<script>

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import { format, subYears, eachMonthOfInterval, endOfMonth, startOfMonth } from 'date-fns';
import axios from 'axios';

export default {
  page: {
    title: "Transmission Loss Factors",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Transmission Loss Factors",
      items: [
        {
          text: "Industry Flows",
          href: "/",
        },
        {
          text: "Transmission Loss Factors",
          active: true,
        },
      ],
      deliveryMonths:[],
      selectedMonth: null,
      selectedFromDate: null,
      selectedToDate: null,
      settlementRunList: null,
      tlfData: null,
      filteredOfftakeTlfData: null,
      filteredDeliveryTlfData: null,
      dnoData: null,
      selectedDno: null,
      selectedSettlementRun: null,
    };
  },
  components: {
    Layout,
    PageHeader  
  },
  computed:{
    isOffTakeDataAvailable() {
      return !!this.filteredOfftakeTlfData && this.filteredOfftakeTlfData.length > 0;
    } ,
    isDeliveryDataAvailable() {
      return !!this.filteredDeliveryTlfData && this.filteredDeliveryTlfData.length > 0;
    } 
  },  
  methods:{
    testMethod() {
      if(this.tlfData === null)
      {
        return;
      } 
 
      console.log('all data is');
      console.log(this.tlfData);
      console.log('settlement run is'); 
      console.log(this.selectedSettlementRun);
      console.log('dno run is'); 
      console.log(this.selectedDno);

      if(this.selectedSettlementRun === "LA")
      {
        this.filteredDeliveryTlfData =  this.tlfData.filter(obj => obj.dnoId == this.selectedDno && obj.isLatestSr === 1 && obj.deliveryType === 'Offtaking');
      }
      else
      {
        this.filteredOfftakeTlfData =  this.tlfData.filter(obj => obj.dnoId == this.selectedDno && obj.settlementRun === this.selectedSettlementRun && obj.deliveryType === 'Offtaking');
      }

      
      if(this.selectedSettlementRun === "LA")
      {
        this.filteredDeliveryTlfData =  this.tlfData.filter(obj => obj.dnoId == this.selectedDno && obj.isLatestSr === 1 && obj.deliveryType === 'Delivering');
      }
      else
      {
        this.filteredDeliveryTlfData =  this.tlfData.filter(obj => obj.dnoId == this.selectedDno && obj.settlementRun === this.selectedSettlementRun && obj.deliveryType === 'Delivering');
      }

      console.log('offtake is');
      console.log(this.filteredOfftakeTlfData);
    },
    async fetchTLFData() {
      const url = `http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/tlf/GetTlfPivot/${this.selectedFromDate}/${this.selectedToDate}`;
      console.log('url is ' + url);
      try {
        const response = await axios.get(url);
        this.tlfData = response.data;
        console.log(this.tlfData);
      } catch (error) {
        console.error('Error fetching Tlfs data:', error);
      }
    },     
    async fetchDnoData() {
      const url = 'http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/dno';

      try {
        const response = await axios.get(url);
        this.dnoData = response.data;
      } catch (error) {
        console.error('Error fetching Dno data:', error);
      }
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
    
    async handleDropdownChange() {
      if(this.selectedDno === null || this.selectedMonth === null || this.selectedSettlementRun === null)
      {
        return;
      }

      this.selectedFromDate = format(this.selectedMonth,'yyyy-MM-dd')
      this.selectedToDate = format(endOfMonth(this.selectedMonth),'yyyy-MM-dd');
      await this.fetchTLFData();
      this.testMethod();
    },   
 
  },
  mounted(){
    this.fetchDnoData();
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
                        <label class="input-group-text" style="width:150px" for="igDno">DNO</label>
                        <select class="form-select" id="igDno" v-model="selectedDno" @change="handleDropdownChange">
                          <option v-for="dno in dnoData" :key="dno.id" :value="dno.id">{{ dno.description }}</option>
                        </select>
                      </div>

                      <div class="input-group">
                        <label class="input-group-text" style="width:150px" for="igSettlementRun">Settlement Run</label>
                        <select class="form-select" id="igSettlementRun" v-model="selectedSettlementRun" @change="handleDropdownChange">
                          <option v-for="sr in settlementRunList" :key="sr.settlementRunType" :value="sr.settlementRunType">{{ sr.description }}</option>
                        </select>
                      </div>

                      <ul class="nav nav-tabs mb-3" role="tablist">
                            <li class="nav-item">
                                <b-link class="nav-link active" data-bs-toggle="tab" href="#offtaking" role="tab"
                                    aria-selected="true">
                                    Offtaking
                                </b-link>
                            </li>
                            <li class="nav-item">
                                <b-link class="nav-link" data-bs-toggle="tab" href="#delivering" role="tab"
                                    aria-selected="false">
                                    Delivering
                                </b-link>
                            </li>
                        </ul>
                        <div class="tab-content text-muted">
                            <div class="tab-pane" id="offtaking" role="tabpanel">
                              <b-row class="align-items-end">
                                <b-col sm="12">
                                  <div class="p-3">
                                    <div v-if="isOffTakeDataAvailable">
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
                                                <template v-for="item in filteredOfftakeTlfData" :key="item.settlementDate">
                                                  <tr>
                                                    <th scope="row">
                                                      {{new Date(item.settlementDate).toLocaleDateString("en-GB")}}
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
                            </div>
                            <div class="tab-pane active" id="delivering" role="tabpanel">
                              <b-row class="align-items-end">
                                <b-col sm="12">
                                  <div class="p-3">
                                    <div v-if="isDeliveryDataAvailable">
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
                                                <template v-for="item in filteredDeliveryTlfData" :key="item.settlementDate">
                                                  <tr>
                                                    <th scope="row">
                                                      {{new Date(item.settlementDate).toLocaleDateString("en-GB")}}
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
                            </div>
                        </div>

              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
    </b-row>
  </Layout>
</template>
