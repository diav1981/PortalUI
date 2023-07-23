<script>

import Layout from "../../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../../app.config";

import axios from 'axios';


export default {
  page: {
    title: "Assistance For Areas With High Electricity Distribution Costs",
    meta: [{ name: "description", content: appConfig.description }],
  },
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
    PageHeader
  },
  computed:{
    hasData() {
      return !!this.chargeData;
    }, 
  },  
  methods:{
    getUniqueChargeRateTypes() {
      const uniqueChargeRateTypes = new Map();

      this.chargeData.forEach((item) => {
        if (item.chargeRateType) {
          uniqueChargeRateTypes.set(item.chargeRateType.id, item.chargeRateType.description);
        }
      });

      this.uniqueChargeRateTypesArray = Array.from(uniqueChargeRateTypes.entries()).map(([id, description]) => ({ id, description }));

    },
    flattenData() {
      this.flattenedChargeData = this.chargeData.reduce((result, item) => {
        const key = `${item.dataSetId}_${item.chargeRateId}_${item.validityStart}_${item.validityEnd}`;
        const existingItem = result.find((i) => i.key === key);

        if (existingItem) {
          existingItem.chargeRateTypes.push({
            chargeRateTypeId: item.chargeRateTypeId,
            chargeValue: item.chargeValue,
          });
        } else {
          result.push({
            key,
            dataSetId: item.dataSetId,
            dataSetDesc: item.dataSet.description,
            chargeRateId: item.chargeRateId,            
            validityStart: item.validityStart,
            validityEnd: item.validityEnd,
            chargeRateTypes: [
              {
                chargeRateTypeId: item.chargeRateTypeId,
                chargeValue: item.chargeValue,
              },
            ],
          });
        }

        return result;
      }, []);
    },
    getChargeValue(item, chargeRateTypeId) {
      var crt = item.chargeRateTypes.find(cr => cr.chargeRateTypeId === chargeRateTypeId);
      if(crt){
        return crt.chargeValue;
      }
      return ''; // Return an empty string if chargeRateType not found
    },
    async fetchChargeData() {
      const url = `http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/ChargeRates/ByRateId/8`;
      try {
        const response = await axios.get(url);
        this.chargeData = response.data;
        this.getUniqueChargeRateTypes();
        this.flattenData();
        } catch (error) {
        console.error('Error fetching charge rate data:', error);
      }
    },   
  },
  mounted(){
    this.fetchChargeData();
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
                              <b-row class="align-items-end">
                                <b-col sm="12">
                                  <div class="p-3">
                                    <div v-if="hasData">
                                      <div class="mt-3 table-hscroll">
                                        <table class="table table-nowrap table-hover">
                                          <thead>
                                            <tr scope="col">
                                              <th scope="col">DataSet</th>
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
