<script>

import Layout from "../../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../../app.config";
import { format, subYears, eachMonthOfInterval, endOfMonth, startOfMonth } from 'date-fns';
import axios from 'axios';


export default {
  page: {
    title: "Balancing Services Use of System (BSUoS)",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Balancing Services Use of System (BSUoS)",
      items: [
        {
          text: "Industry Flows",
          href: "/",
        },
        {
          text: "Balancing Services Use of System (BSUoS)",
          active: true,
        },
      ],
      deliveryMonths:[],
      selectedMonthType: null,
      selectedMonth: null,
      selectedFromDate: null,
      selectedToDate: null,
      settlementRunList: null,
      selectedSettlementRun: null,
      bsuosData: null,
    };
  },
  components: {
    Layout,
    PageHeader
  },
  computed:{
    hasData() {
      return !!this.bsuosData && this.bsuosData.length > 0;
    }, 
  },  
  methods:{
    async fetchbsuosData() {
      console.log('fetching data');
      var url = ''
      if(this.selectedSettlementRun == "LA")
      {
        url = `http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/Bsuos/GetBsuosPivot/Latest/${this.selectedFromDate}/${this.selectedToDate}`;
      }
      else
      {
        url = `http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/Bsuos/GetBsuosPivot/${this.selectedSettlementRun}/${this.selectedFromDate}/${this.selectedToDate}`;
      }
      console.log(url);
      try {
        const response = await axios.get(url);
        this.bsuosData = response.data;
        console.log(this.bsuosData);
      } catch (error) {
        console.error('Error fetching duos data:', error);
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
    async fetchSettlementRunData() {
                const url = 'http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/settlementrun/';

                try {
                    const response = await axios.get(url);
                    this.settlementRunList = response.data;
                } catch (error) {
                    console.error('Error fetching Settlement Run data:', error);
                }
    },
    handleDropdownChange() {
      if(this.selectedSettlementRun === null || this.selectedMonth === null)
      {
        return;
      }

      this.selectedFromDate = format(this.selectedMonth,'yyyy-MM-dd')
      this.selectedToDate = format(endOfMonth(this.selectedMonth),'yyyy-MM-dd');
      this.fetchbsuosData();
    },    
  },
  mounted(){
    this.fetchSettlementRunData();
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
                        <label class="input-group-text" style="width:150px" for="igMonth">Delivery Month</label>
                        <select class="form-select" id="igMonth" v-model="selectedMonth" @change="handleDropdownChange">
                          <option v-for="monthYear in deliveryMonths" :key="monthYear.dt" :value="monthYear.dt">{{ monthYear.monthYearString }}</option>
                        </select>
                      </div>

                      <div class="input-group">
                        <label class="input-group-text" style="width:150px" for="igSettlementRun">Settlement Run</label>
                        <select class="form-select" id="igSettlementRun" v-model="selectedSettlementRun" @change="handleDropdownChange">
                          <option v-for="sr in settlementRunList" :key="sr.settlementRunType" :value="sr.settlementRunType">{{ sr.description }}</option>
                        </select>
                      </div>


                              <b-row class="align-items-end">
                                <b-col sm="12">
                                  <div class="p-3">
                                    <div v-if="hasData">
                                      <div class="mt-3 table-hscroll">
                                        <table class="table table-nowrap table-hover">
                                            <thead>
                                                <tr>
                                                  <th scope="col">Date</th>
                                                    <!-- Generate columns up to 50 -->
                                                    <template v-for="column in 50" :key="column">
                                                      <th scope="col" >{{ column }}</th>
                                                    </template>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <!-- Generate rows for each day of the month -->
                                                <template v-for="item in bsuosData" :key="item.settlementDay">
                                                  <tr>
                                                    <th scope="row">
                                                      {{new Date(item.settlementDay).toLocaleDateString("en-GB")}}
                                                    </th>
                                                    <td v-for="(value, index) in 50" :key="index">{{ item['_' + (index + 1)] }}</td>
                                                  </tr>
                                                </template>
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
