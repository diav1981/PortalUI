<script>

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import base from '../../../components/shared/base/base-component.js'
import axios from 'axios';
import MessagePopup from '../../../components/shared/message.vue';

export default {
  page: {
    title: "Trades",
    meta: [{ name: "description", content: appConfig.description }],
  },
  mixins: [base],    
  data() {
    return {
      title: "Trades",
      items: [
        {
          text: "Trading",
          href: "/",
        },
        {
          text: "Trades",
          active: true,
        },
      ],
      tradeData: null,
    };
  },
  components: {
    Layout,
    PageHeader,
    MessagePopup
  },
  computed:{
      hasData() {
        return !!this.tradeData && !!this.tradeData.length > 0;
      },  
    },
  methods:{
    showPopup(title, headline, message) {
            this.$refs.messagePopup.showMessage(title, headline, message);
        },    
    async fetchTradeData(){
      try {
        console.log(this.TradeApiUrl);
        const response = await axios.get(`${this.TradeApiUrl}`);
        if (response.status === 200) {
          // Data successfully fetched with a status code of 200
          this.basketData = response.data;
        } else {
          this.showPopup('Uh-oh', '', `Trade data couldn't be retrieved, if it keeps happening it could be one for App Support. The error was'${response.message}'`);
        }
      } catch (error) {
          if (error.response && error.response.data && error.response.data) {
            // The API returned an error message.
            this.showPopup('Uh-oh', '', `Trade data couldn't be retrieved, the attempt failed with status ${error.response.status}. Might be one for App Support.
            The following text might help them. '${error.response.data}'`);
          } else {
            // Handle other errors.
            this.showPopup('Uh-oh', '', `Trade data couldn't be retrieved. If it keeps happening it's one for App Support.`);
          }
      }
    }
  },
  mounted(){
    this.fetchTradeData();
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
                        <div class="mt-3 table-hscroll table-container">
                            <table class="table table-nowrap table-hover">
                            <thead>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Index</th>
                                <th scope="col">Valid From</th>
                                <th scope="col">Valid To</th>
                                <th scope="col">Fee</th>
                                <th scope="col">Multiplier</th>
                            </thead>
                                <tbody>
                                    <template v-for="item in tradeData" :key="item.Id">
                                    <tr>
                                        <td>{{ item.id }}</td>
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.index }}</td>
                                        <td>{{ new Date(item.validFrom).toLocaleDateString("en-GB") }}</td>
                                        <td>{{ new Date(item.validTo).toLocaleDateString("en-GB") }}</td>
                                        <td>{{ item.fee }}</td>
                                        <td>{{ item.multiplier }}</td>
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


  <MessagePopup ref="messagePopup"></MessagePopup>  
</template>
