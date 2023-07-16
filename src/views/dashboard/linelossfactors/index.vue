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
                  <b-col sm="8">
                    <div class="p-3">

                      <div class="input-group">
                        <label class="input-group-text" style="width:150px" for="inputGroupSelect01">Delivery Month</label>
                        <select class="form-select" id="inputGroupSelect01">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                      </div>

                      <div class="input-group">
                        <label class="input-group-text" style="width:150px" for="inputGroupSelect01">DNO</label>
                        <select class="form-select" id="inputGroupSelect01">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                      </div>

                      <div class="input-group">
                        <label class="input-group-text" style="width:150px" for="inputGroupSelect01">LLFC</label>
                        <select class="form-select" id="inputGroupSelect01">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                      </div>

                      <div class="mt-3">
                        <table class="table table-nowrap table-hover">
                          <thead>
                              <tr>
                                  <th scope="col">Date</th>
                                  <th scope="col">1</th>
                                  <th scope="col">2</th>
                                  <th scope="col">3</th>
                                  <th scope="col">4</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <th scope="row"><a href="#" class="fw-semibold">#VZ2110</a></th>
                                  <td>Bobby Davis</td>
                                  <td>October 15, 2021</td>
                                  <td>$2,300</td>
                                  <td><a href="javascript:void(0);" class="link-success">View More <i class="ri-arrow-right-line align-middle"></i></a></td>
                              </tr>
                              <tr>
                                  <th scope="row"><a href="#" class="fw-semibold">#VZ2109</a></th>
                                  <td>Christopher Neal</td>
                                  <td>October 7, 2021</td>
                                  <td>$5,500</td>
                                  <td><a href="javascript:void(0);" class="link-success">View More <i class="ri-arrow-right-line align-middle"></i></a></td>
                              </tr>
                              <tr>
                                  <th scope="row"><a href="#" class="fw-semibold">#VZ2108</a></th>
                                  <td>Monkey Karry</td>
                                  <td>October 5, 2021</td>
                                  <td>$2,420</td>
                                  <td><a href="javascript:void(0);" class="link-success">View More <i class="ri-arrow-right-line align-middle"></i></a></td>
                              </tr>
                              <tr>
                                  <th scope="row"><a href="#" class="fw-semibold">#VZ2107</a></th>
                                  <td>James White</td>
                                  <td>October 2, 2021</td>
                                  <td>$7,452</td>
                                  <td><a href="javascript:void(0);" class="link-success">View More <i class="ri-arrow-right-line align-middle"></i></a></td>
                              </tr>
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
