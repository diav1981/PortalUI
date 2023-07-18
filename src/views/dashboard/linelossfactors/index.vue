<script>

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import axios from 'axios';
import { format, endOfMonth, subYears, eachMonthOfInterval, startOfMonth } from 'date-fns';

export default {
  page: {
    title: "Line Loss Factors",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Line Loss Factors",
      llfData: null,
      dnoData: null,
      llfDist: null,
      availablellfDist: null,
      deliveryMonths: [],
      selectedMonth: null,
      selectedFromDate: null,
      selectedToDate: null,
      selectedDno: null,
      selectedLlf: null,
      items: [
        {
          text: "Industry Flows",
          href: "/",
        },
        {
          text: "Line Loss Factors",
          active: true,
        },
      ],
    };
  },
  components: {
    Layout,
    PageHeader
  },
  computed:{
    areAllDropdownsPopulated() {
      return !!this.llfData && this.llfData.length > 0;
    } 
  },
  methods:{
    async fetchLlfDistributorCombinationData() {
      const url = 'http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/Llf/';

      try {
        const response = await axios.get(url);
        this.llfDist = response.data;
        this.availablellfDist = this.llfDist;
      } catch (error) {
        console.error('Error fetching LLF Distributor Combination data:', error);
      }
    },
    async fetchLlfData() {
      const url = `http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/Llf/GetLlfPivot/${this.selectedDno}/${this.selectedLlf}/${this.selectedFromDate}/${this.selectedToDate}`;
      try {
        const response = await axios.get(url);
        this.llfData = response.data;
      } catch (error) {
        console.error('Error fetching LLF data:', error);
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
      if(this.selectedLlf === null || this.selectedDno === null || this.selectedMonth === null)
      {
        return;
      }

      /*if(this.selectedDno !== null && this.selectedLlf === null)
      {
        const filteredData = this.llfDist.filter(item => item.distributorId === this.selectedDno);
        this.availablellfDist = filteredData;
        console.log(this.availablellfDist);
      }*/
      this.selectedFromDate = format(this.selectedMonth,'yyyy-MM-dd')
      this.selectedToDate = format(endOfMonth(this.selectedMonth),'yyyy-MM-dd');
      this.fetchLlfData();
      /*todo - same filter on dno when llf is selected but dno is empty*/
    },
  },
  mounted(){
    this.fetchDnoData();
    this.fetchLlfDistributorCombinationData();
    this.generateDeliveryMonthArray();
  }
};
</script>


<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <b-row>
      <b-col xxl="5">
        <b-row>
          <b-col cols="12">
            <b-card no-body>
              <b-card-body class="p-0">
 
                <b-row class="align-items-end">
                  <b-col sm="12">
                    <div class="p-3">

                      <div class="input-group">
                        <label class="input-group-text" style="width:150px" for="igMonth">Delivery Month</label>
                        <select class="form-select" id="igMonth" v-model="selectedMonth" @change="handleDropdownChange">
                          <option v-for="monthYear in deliveryMonths" :key="monthYear.dt" :value="monthYear.dt">{{ monthYear.monthYearString }}</option>
                        </select>
                      </div>

                      <div class="input-group">
                        <label class="input-group-text" style="width:150px" for="igDno">DNO</label>
                        <select class="form-select" id="igDno" v-model="selectedDno" @change="handleDropdownChange">
                          <option v-for="dno in dnoData" :key="dno.id" :value="dno.abbreviation">{{ dno.description }}</option>
                        </select>
                      </div>

                      <div class="input-group">
                        <label class="input-group-text" style="width:150px" for="igLlf">LLFC</label>
                        <select class="form-select" id="igLlf" v-model="selectedLlf" @change="handleDropdownChange">
                          <option v-for="x in availablellfDist" :key="x.llf" :value="x.llf">{{ x.llf }}</option>
                        </select>
                      </div>
                      <div v-if="areAllDropdownsPopulated">
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
                                <template v-for="item in llfData" :key="item.settlementDate">
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
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </Layout>
</template>
