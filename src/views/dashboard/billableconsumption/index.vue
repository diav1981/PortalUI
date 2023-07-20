<script>

    import Layout from "../../../layouts/main.vue";
    import PageHeader from "@/components/page-header";
    import appConfig from "../../../../app.config";
    import axios from 'axios';
    import { format, endOfMonth, subYears, eachMonthOfInterval, startOfMonth } from 'date-fns';

    export default {
        page: {
            title: "Billable Consumption",
            meta: [{ name: "description", content: appConfig.description }],
        },
        data() {
            return {
                title: "Billable Consumption",
                items: [
                    {
                        text: "Industry Flows",
                        href: "/",
                    },
                    {
                        text: "Billable Consumption",
                        active: true,
                    },
                ],
                deliveryMonths: null,
                selectedMonth: null,
                mpanList: null,
                selectedMpan: null,
                settlementRunList: null,
                selectedSettlementRun: null,
                gspData: null,
                mspData: null,
                nbpData: null
            };
        },
        components: {
            Layout,
            PageHeader
        },
        computed:{
          hasGspData() {
            return !!this.gspData && this.gspData.length > 0;
          } 
        },        
        methods: {
            async fetchGspData() {
              console.log('fetching gsp data');
              
              const url = `http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/GspCons/GetGspConsPivot/${this.selectedMpan}/${this.selectedFromDate}/${this.selectedToDate}`;

              //const url = `http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/GspCons/GetGspConPivot/${this.selectedMpan}/${this.selectedFromDate}/${this.selectedToDate}`;
              console.log(url);
              try {
                const response = await axios.get(url);
                this.gspData = response.data;
                console.log(this.gspData);
              } catch (error) {
                console.error('Error fetching GSP data:', error);
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
              if(this.selectedMonth === null)
              {
                return;
              }
              this.selectedFromDate = format(this.selectedMonth,'yyyy-MM-dd')
              this.selectedToDate = format(endOfMonth(this.selectedMonth),'yyyy-MM-dd');
              
              /*we just need a date range and an mpan for gsp data*/
              if(this.selectedMpan !== null)
              {
                this.fetchGspData();
              }
            },
        },
        mounted() {
            this.fetchMpanData();
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
                        <label class="input-group-text" style="width:150px" for="igMpan">MPAN</label>
                        <select class="form-select" id="igMpan" v-model="selectedMpan" @change="handleDropdownChange">
                          <option v-for="mpan in mpanList" :key="mpan.mpanCore" :value="mpan.mpanCore">{{ mpan.mpanCore }}</option>
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
                                <b-link class="nav-link active" data-bs-toggle="tab" href="#msp" role="tab"
                                    aria-selected="true">
                                    MSP
                                </b-link>
                            </li>
                            <li class="nav-item">
                                <b-link class="nav-link" data-bs-toggle="tab" href="#gsp" role="tab"
                                    aria-selected="false">
                                    GSP
                                </b-link>
                            </li>
                            <li class="nav-item">
                                <b-link class="nav-link" data-bs-toggle="tab" href="#nbp" role="tab"
                                    aria-selected="false">
                                    NBP
                                </b-link>
                            </li>                            
                        </ul>
                        <div class="tab-content text-muted">
                            <div class="tab-pane" id="msp" role="tabpanel">
                              <b-row class="align-items-end">
                                <b-col sm="12">
                                  <div class="p-3">
                                    <div v-if="isMspDataAvailable">
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
                                                <template v-for="item in mspData" :key="item.settlementDate">
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
                            <div class="tab-pane active" id="gsp" role="tabpanel">
                              <b-row class="align-items-end">
                                <b-col sm="12">
                                  <div class="p-3">
                                    <div v-if="hasGspData">
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
                                                <template v-for="item in gspData" :key="item.billableDate">
                                                  <tr>
                                                    <th scope="row">
                                                      {{new Date(item.billableDate).toLocaleDateString("en-GB")}}
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
                            <div class="tab-pane active" id="nbp" role="tabpanel">
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
                                                <template v-for="item in nbpData" :key="item.settlementDate">
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
