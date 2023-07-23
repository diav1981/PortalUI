<script>

import Layout from "../../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../../app.config";
import ChargeRateComponent from "../../../../components/chargerate.vue";

export default {
  page: {
    title: "Assistance For Areas With High Electricity Distribution Costs",
    meta: [{ name: "description", content: appConfig.description }],
  },
  mixins: 
    [ChargeRateComponent],  
  data() {
    return {
      title: "Assistance For Areas With High Electricity Distribution Costs",
      items: [
        {
          text: "Industry Pricing",
          href: "/",
        },
        {
          text: "Manual",
          href: "/",
        },
        {
          text: "AAHEDC",
          active: true,
        },
      ],
      chargeData: null,
      uniqueChargeRateTypesArray: null,
      flattenedChargeData: null,
    };
  },
  components: {
    Layout,
    PageHeader,
    ChargeRateComponent
  },
  mounted(){
    this.fetchChargeData(8);
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <ChargeRateComponent></ChargeRateComponent>
    <b-row>
        <b-row>
          <b-col cols="12">
            <b-card no-body>
              <b-card-body class="p-0">
                <b-row class="align-items-end">
                  <b-col sm="12">
                    <div class="p-3">
                      <div v-if="hasData">
                        <div class="mt-3 table-hscroll">
                          <table class="table table-nowrap table-hover">
                            <thead>
                              <tr scope="col">
                                <th scope="col">Source</th>
                                <th scope="col">Valid From</th>
                                <th scope="col">Valid To</th>
                                <th v-for="chargeRateType in uniqueChargeRateTypesArray" :key="chargeRateType.id">
                                  {{ chargeRateType.description }}
                                </th>
                              </tr>
                            </thead>
                              <tbody>
                                  <!-- Generate rows for each day of the month -->
                                  <template v-for="item in flattenedChargeData" :key="item.id">
                                    <tr>
                                      <td>{{ item.dataSetDesc }}</td>
                                        <td>{{  new Date(item.validityStart).toLocaleDateString("en-GB") }}</td>
                                        <td>{{ new Date(item.validityEnd).toLocaleDateString("en-GB") }}</td>
                                        <td v-for="chargeRateType in uniqueChargeRateTypesArray" :key="chargeRateType.id">
                                          {{ getChargeValue(item, chargeRateType.id) }}
                                      </td>
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
