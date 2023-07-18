<script>

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

export default {
  page: {
    title: "Baskets",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Baskets",
      items: [
        {
          text: "Trading",
          href: "/",
        },
        {
          text: "Baskets",
          active: true,
        },
      ],
      deliveryMonths:[],
      selectedMonth: ''
    };
  },
  components: {
    Layout,
    PageHeader
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




                      <div class="mt-3 table-hscroll">
                        <table class="table table-nowrap table-hover">
                          <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">End Date</th>
                                <th scope="col">Fee (£/MWh)</th>
                              </tr>
                          </thead>
                          <tbody>
                              <!-- Generate rows for each day of the month -->
                              <template v-for="day in 30" :key="day">
                                <tr>
                                  <th scope="row">
                                    <a href="#" class="fw-semibold">{{ day }}</a>
                                  </th>
                                  <template v-for="column in 4" :key="column">
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
      </b-col>
    </b-row>
  </Layout>
</template>
