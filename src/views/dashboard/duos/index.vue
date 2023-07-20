<script>

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import { format, subYears, eachMonthOfInterval, endOfMonth, startOfMonth } from 'date-fns';
import axios from 'axios';

export default {
  page: {
    title: "Distribution Use of System (DUoS)",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Distribution Use of System (DUoS)",
      items: [
        {
          text: "Industry Flows",
          href: "/",
        },
        {
          text: "Distribution Use of System (DUoS)",
          active: true,
        },
      ],
      deliveryMonths:[],
      selectedMonthType: null,
      selectedMonth: null,
      selectedFromDate: null,
      selectedToDate: null,
      mpanList: null,
      selectedMpan: null,
      duosData: null,
    };
  },
  components: {
    Layout,
    PageHeader
  },
  computed:{
    isDataAvailable() {
      return !!this.duosData && this.duosData.length > 0;
    }, 
  },  
  methods:{
    async fetchDuosData() {
      console.log('fetching data');
      var url = ''
      if(this.selectedMonthType == "1")
      {
        url = `http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/duos/ByDeliveryDate/${this.selectedMpan}/${this.selectedFromDate}/${this.selectedToDate}`;
      }
      else
      {
        url = `http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/duos/ByInvoiceDate/${this.selectedMpan}/${this.selectedFromDate}/${this.selectedToDate}`;
      }
      try {
        const response = await axios.get(url);
        this.duosData = response.data;
        console.log(this.duosData);
      } catch (error) {
        console.error('Error fetching duos data:', error);
      }
    }, 
    async fetchMpanData() {
      const url = 'http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/mpan/';
      try {
        const response = await axios.get(url);
        this.mpanList = response.data;
      } catch (error) {
        console.error('Error fetching Mpan data:', error);
      }
    },    
    generateDeliveryMonthArray() {
      const currentDate = new Date();
      const sixYearsAgo = subYears(currentDate, 6);
      const allMonths = eachMonthOfInterval({ start: sixYearsAgo, end: currentDate });

      const result = allMonths.map(month => {
        const monthYearString = format(month, 'MMMM yyyy');
        const dt = startOfMonth(month);
        return { dt, monthYearString };
      });
        
      this.deliveryMonths = result.reverse();
    },
    handleDropdownChange() {
      if(this.selectedMpan === null || this.selectedMonth === null)
      {
        return;
      }

      this.selectedFromDate = format(this.selectedMonth,'yyyy-MM-dd')
      this.selectedToDate = format(endOfMonth(this.selectedMonth),'yyyy-MM-dd');
      this.fetchDuosData();
    },    
  },
  mounted(){
    this.fetchMpanData();
    this.generateDeliveryMonthArray();
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <b-row>

        <b-row>
          <b-col cols="12">
            <b-card no-body>
              <b-card-body class="p-0">
 
                      <div class="input-group">
                        <label class="input-group-text" style="width:150px" for="igDateType" >Month Type</label>
                        <select class="form-select" id="igDateType" v-model="selectedMonthType" @change="handleDropdownChange">
                          <option value="1">Delivery</option>
                          <option value="2">Invoice</option>
                        </select>
                        <label class="input-group-text" style="width:150px" for="igDateType">Month</label>
                        <select class="form-select" id="igMonth" v-model="selectedMonth" @change="handleDropdownChange">
                          <option v-for="monthYear in deliveryMonths" :key="monthYear.dt" :value="monthYear.dt">{{ monthYear.monthYearString }}</option>
                        </select>
                      </div>

                      <div class="input-group">
                        <label class="input-group-text" style="width:150px" for="igMpan">MPAN</label>
                        <select class="form-select" id="igMpan" v-model="selectedMpan" @change="handleDropdownChange">
                          <option v-for="mpan in mpanList" :key="mpan.mpanCore" :value="mpan.mpanCore">{{ mpan.mpanCore }}</option>
                        </select>
                      </div>
                            <b-row class="align-items-end">
                              <b-col sm="12">
                                <div class="p-3">
                                  <div v-if="isDataAvailable">
                                    <div class="mt-3 table-hscroll">
                                      <table class="table table-nowrap table-hover">
                                          <thead>
                                            <tr>
                                              <th>Invoice Date</th>
                                              <th>Period Start</th>
                                              <th>Period End</th>
                                              <th>HH/NHH</th>
                                              <th>Invoice Type</th>
                                              <th>Tariff Code</th>
                                              <th>Days Billed</th>
                                              <th>LLF</th>
                                              <th>Charge Description</th>
                                              <th>UoM</th>
                                              <th>Units Billed</th>
                                              <th>Price Per Unit</th>
                                              <th>Total Charge</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr v-for="item in duosData" :key="item.invoiceDate">
                                              <td>{{ new Date(item.invoiceDate).toLocaleDateString("en-GB") }}</td>
                                              <td>{{ new Date(item.periodStart).toLocaleDateString("en-GB") }}</td>
                                              <td>{{ new Date(item.periodEnd).toLocaleDateString("en-GB") }}</td>
                                              <td>{{ item.hhnhh }}</td>
                                              <td>{{ item.invoiceType }}</td>
                                              <td>{{ item.tariffCode }}</td>
                                              <td>{{ item.daysBilled }}</td>
                                              <td>{{ item.llf ? item.llf : 'N/A' }}</td>
                                              <td>{{ item.chargeDescription }}</td>
                                              <td>{{ item.uoM }}</td>
                                              <td>{{ item.unitsBilled }}</td>
                                              <td>{{ item.pricePerUnit.toFixed(2) }}</td>
                                              <td>{{ item.totalCharge.toFixed(2) }}</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                    </div>
                                  </div>
                                  <div v-else class="centered-children-200">
                                    <p>No Data Available</p>
                                  </div>   
                                </div>                               
                              </b-col>
                              <b-col sm="4">
                              </b-col>
                            </b-row>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
    </b-row>
  </Layout>
</template>
