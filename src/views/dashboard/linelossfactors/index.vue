<script>

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import Widget from "./widget.vue";
import AudiencesMetrics from "./audiences-metrics.vue";
import AudiencesSessions from "./audiences-sessions.vue";
import Country from "./country.vue";
import Referrals from "./referrals.vue";
import SessionsCounties from "./sessions-countries.vue";
import TopPages from "./top-pages.vue";
import Users from "./users.vue";

export default {
  page: {
    title: "Line Loss Factors",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Line Loss Factors",
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
      deliveryMonths:[],
      selectedMonth: ''
    };
  },
  components: {
    Layout,
    PageHeader,
    Widget,
    AudiencesSessions,
    AudiencesMetrics,
    Country,
    Referrals,
    SessionsCounties,
    TopPages,
    Users,
  },
  methods:{
    generateDeliveryMonthArray() {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();

      const monthYearArray = [];

      for (let i = 0; i < 72; i++) {
      const year = currentYear - Math.floor(i / 12);
      const month = (currentMonth - i % 12 + 12) % 12;
      const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });

      const monthYearString = `${monthName} ${year}`;
      monthYearArray.push(monthYearString);
      }
  
      this.deliveryMonths = monthYearArray;
      console.log(this.deliveryMonths);
    }
  },
  mounted(){
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
                        <label class="input-group-text" style="width:150px" for="inputGroupSelect01">Delivery Month</label>
                        <select class="form-select" id="inputGroupSelect01" v-model="selectedMonth">
                          <option v-for="monthYear in deliveryMonths" :key="monthYear" :value="monthYear">{{ monthYear }}</option>
                        </select>
                      </div>

                      <div class="input-group">
                        <label class="input-group-text" style="width:150px" for="inputGroupSelect01">DNO</label>
                        <select class="form-select" id="inputGroupSelect01">
                            <option value="1">EELC</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                      </div>

                      <div class="input-group">
                        <label class="input-group-text" style="width:150px" for="inputGroupSelect01">LLFC</label>
                        <select class="form-select" id="inputGroupSelect01">
                            <option value="1">310</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                      </div>

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
                              <template v-for="day in 30" :key="day">
                                <tr>
                                  <th scope="row">
                                    <a href="#" class="fw-semibold">{{ day }}</a>
                                  </th>
                                  <template v-for="column in 50" :key="column">
                                    <td>1.02</td>
                                  </template>
                                </tr>
                              </template>
                          </tbody>
                        </table>
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
        <Widget />
      </b-col>
      <b-col xxl="7">
        <b-row class="h-100">
          <b-col xl="6">
            <Country />
          </b-col>
          <b-col xl="6">
            <SessionsCounties />
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="h-100">
      <b-col xl="6">
        <AudiencesMetrics />
      </b-col>
      <b-col xl="6">
        <AudiencesSessions />
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="4">
        <Users />
      </b-col>
      <b-col xl="4" md="6">
        <Referrals />
      </b-col>
      <b-col xl="4" md="6">
        <TopPages />
      </b-col>
    </b-row>
  </Layout>
</template>
