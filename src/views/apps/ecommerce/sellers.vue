<script>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";
import PageHeader from "@/components/page-header";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  page: {
    title: "Sellers",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Sellers",
      items: [
        {
          text: "Ecommerce",
          href: "/",
        },
        {
          text: "Sellers",
          active: true,
        },
      ],
      modalShow: false,
      searchQuery: null,
      date: null,
      value: null,
      chartOptions: {
        chart: {
          type: "area",
          height: 50,
          sparkline: {
            enabled: true,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
          },
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        colors: ["#f44336"],
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function () {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
      },
      sellersList: [
        {
          id: 1,
          isTrending: true,
          img: require("@/assets/images/companies/img-1.png"),
          label: "Force Medicines",
          name: "David Marshall",
          stock: "452",
          balance: "$45,415",
          series: [{ data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] }],
          chartcolor: "#f44336",
        },
        {
          id: 2,
          isTrending: false,
          img: require("@/assets/images/companies/img-2.png"),
          label: "Micro Design",
          name: "Katia Stapleton",
          stock: "784",
          balance: "$97,642",
          series: [{ data: [12, 14, 2, 47, 42, 15, 35, 75, 20, 67, 89] }],
          chartcolor: "#67b173",
        },
        {
          id: 3,
          isTrending: false,
          img: require("@/assets/images/companies/img-3.png"),
          label: "Nesta Technologies",
          name: "Harley Fuller",
          stock: "320",
          balance: "$27,102",
          series: [{ data: [45, 20, 8, 42, 30, 5, 35, 79, 22, 54, 64] }],
          chartcolor: "#ffc84b",
        },
        {
          id: 4,
          isTrending: true,
          img: require("@/assets/images/companies/img-4.png"),
          series: [{ data: [26, 15, 48, 12, 47, 19, 35, 19, 85, 68, 50] }],
          chartcolor: "#67b173",
          label: "iTest Factory",
          name: "Oliver Tyler",
          stock: "159",
          balance: "$14,933",
        },
        {
          id: 5,
          isTrending: false,
          img: require("@/assets/images/companies/img-5.png"),
          series: [{ data: [60, 67, 12, 49, 6, 78, 63, 51, 33, 8, 16] }],
          chartcolor: "#ffc84b",
          label: "Meta4Systems",
          name: "Zoe Dennis",
          stock: "363",
          balance: "$73,426",
        },
        {
          id: 6,
          isTrending: true,
          img: require("@/assets/images/companies/img-6.png"),
          series: [{ data: [78, 63, 51, 33, 8, 16, 60, 67, 12, 49] }],
          chartcolor: "#67b173",
          label: "Digitech Galaxy",
          name: "John Roberts",
          stock: "412",
          balance: "$34,241",
        },
        {
          id: 7,
          isTrending: true,
          img: require("@/assets/images/companies/img-7.png"),
          series: [{ data: [15, 35, 75, 20, 67, 8, 42, 30, 5, 35] }],
          chartcolor: "#f44336",
          label: "Syntyce Solutions",
          name: "Demi Allen",
          stock: "945",
          balance: "$17,200",
        },
        {
          id: 8,
          isTrending: false,
          img: require("@/assets/images/companies/img-8.png"),
          series: [{ data: [45, 32, 68, 55, 36, 10, 48, 25, 74, 54] }],
          chartcolor: "#ffc84b",
          label: "Zoetic Fashion",
          name: "James Bowen",
          stock: "784",
          balance: "$97,642",
        },
      ],
    };
  },
  components: {
    Layout,
    PageHeader,
    Multiselect,
    flatPickr
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.sellersList.filter((data) => {
          return (
            data.balance.toLowerCase().includes(search) ||
            data.chartcolor.toLowerCase().includes(search) ||
            data.label.toLowerCase().includes(search) ||
            data.name .toLowerCase().includes(search)
          );
        });
      } else {
        return this.sellersList;
      }
    },
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <b-card no-body>
      <b-card-header class="border-0 rounded">
        <b-row class="g-2">
          <b-col xl="3">
            <div class="search-box">
              <input type="text" class="form-control search"
                placeholder="Search for sellers & owner name or something..." v-model="searchQuery" />
              <i class="ri-search-line search-icon"></i>
            </div>
          </b-col>
          <b-col xxl="3" class="ms-auto">
            <div>
              <Multiselect class="form-control" v-model="value" :close-on-select="true" :searchable="true"
                :create-option="true" :options="[
                  { value: '', label: 'Select Categories' },
                  { value: 'All', label: 'All' },
                  { value: 'Retailer', label: 'Retailer' },
                  { value: 'Health & Medicine', label: 'Health & Medicine' },
                  { value: 'Manufacturer', label: 'Manufacturer' },
                  { value: 'Food Service', label: 'Food Service' },
                  { value: 'Computers & Electronics', label: 'Computers & Electronics' },
                
                ]" />
            </div>
          </b-col>
          <b-col lg="auto">
            <div class="hstack gap-2">
              <b-button type="button" variant="danger">
                <i class="ri-equalizer-fill me-1 align-bottom"></i> Filters
              </b-button>
              <b-button variant="success" @click="modalShow = !modalShow">
                <i class="ri-add-fill me-1 align-bottom"></i> Add Seller
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-card-header>
    </b-card>

    <b-row class="mt-4">
      <b-col xl="3" lg="6" v-for="(item, index) of resultQuery" :key="index">
        <b-card no-body class="ribbon-box right overflow-hidden">
          <b-card-body class="text-center p-4">
            <div class="ribbon ribbon-danger ribbon-shape trending-ribbon" v-if="item.isTrending == true">
              <i class="ri-flashlight-fill text-white align-bottom"></i>
              <span class="trending-ribbon-text">Trending</span>
            </div>
            <img :src="item.img" alt="" height="45" />
            <h5 class="mb-1 mt-4">
              <router-link to="/ecommerce/seller-details" class="text-reset">{{ item.label }}</router-link>
            </h5>
            <p class="text-muted mb-4">{{ item.name }}</p>
            <b-row class="justify-content-center">
              <b-col lg="8">
                <apexchart class="apex-charts" dir="ltr" height="50" :series="item.series"
                  :options="{ ...chartOptions, ...{ colors: [item.chartcolor] } }"></apexchart>
              </b-col>
            </b-row>
            <b-row class="mt-4">
              <b-col lg="6" class="border-end-dashed border-end">
                <h5>{{ item.stock }}</h5>
                <span class="text-muted">Item Stock</span>
              </b-col>
              <b-col lg="6">
                <h5>{{ item.balance }}</h5>
                <span class="text-muted">Wallet Balance</span>
              </b-col>
            </b-row>
            <div class="mt-4">
              <router-link to="/ecommerce/seller-details" class="btn btn-light w-100">View Details</router-link>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-row class="g-0 text-center text-sm-start align-items-center mb-3">
      <b-col sm="6">
        <div>
          <p class="mb-sm-0">Showing 1 to 8 of 12 entries</p>
        </div>
      </b-col>
      <b-col sm="6">
        <ul class="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
          <li class="page-item disabled">
            <b-link href="#" class="page-link"><i class="mdi mdi-chevron-left"></i></b-link>
          </li>
          <li class="page-item active">
            <b-link href="#" class="page-link">1</b-link>
          </li>
          <li class="page-item">
            <b-link href="#" class="page-link">2</b-link>
          </li>
          <li class="page-item">
            <b-link href="#" class="page-link">3</b-link>
          </li>
          <li class="page-item">
            <b-link href="#" class="page-link">4</b-link>
          </li>
          <li class="page-item">
            <b-link href="#" class="page-link">5</b-link>
          </li>
          <li class="page-item">
            <b-link href="#" class="page-link"><i class="mdi mdi-chevron-right"></i></b-link>
          </li>
        </ul>
      </b-col>
    </b-row>

    <b-modal v-model="modalShow" hide-footer body-class="p-0" title="Add Seller" size="lg" content-class="border-0 mt-3"
      modal-class="zoomIn" class="v-modal-custom" centered>
      <div class="modal-content border-0 mt-3">
        <ul class="nav nav-tabs nav-tabs-custom nav-success p-2 pb-0 bg-light" role="tablist">
          <li class="nav-item">
            <b-link class="nav-link active" data-bs-toggle="tab" href="#personalDetails" role="tab"
              aria-selected="true">
              Personal Details
            </b-link>
          </li>
          <li class="nav-item">
            <b-link class="nav-link" data-bs-toggle="tab" href="#businessDetails" role="tab" aria-selected="false">
              Business Details
            </b-link>
          </li>
          <li class="nav-item">
            <b-link class="nav-link" data-bs-toggle="tab" href="#bankDetails" role="tab" aria-selected="false">
              Bank Details
            </b-link>
          </li>
        </ul>
      </div>
      <div class="modal-body">
        <div class="tab-content">
          <div class="tab-pane active" id="personalDetails" role="tabpanel">
            <b-form action="#">
              <b-row>
                <b-col lg="6">
                  <div class="mb-3">
                    <label for="firstnameInput" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstnameInput" placeholder="Enter your firstname" />
                  </div>
                </b-col>
                <b-col lg="6">
                  <div class="mb-3">
                    <label for="lastnameInput" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastnameInput" placeholder="Enter your lastname" />
                  </div>
                </b-col>
                <b-col lg="6">
                  <div class="mb-3">
                    <label for="contactnumberInput" class="form-label">Contact Number</label>
                    <input type="number" class="form-control" id="contactnumberInput" placeholder="Enter your number" />
                  </div>
                </b-col>
                <b-col lg="6">
                  <div class="mb-3">
                    <label for="phonenumberInput" class="form-label">Phone Number</label>
                    <input type="number" class="form-control" id="phonenumberInput" placeholder="Enter your number" />
                  </div>
                </b-col>
                <b-col lg="6">
                  <div class="mb-3">
                    <label for="emailidInput" class="form-label">Email</label>
                    <input type="email" class="form-control" id="emailidInput" placeholder="Enter your email" />
                  </div>
                </b-col>
                <b-col lg="6">
                  <div class="mb-3">
                    <label for="birthdayidInput" class="form-label">Date of Birth</label>
                    <flat-pickr v-model="date" placeholder="Enter your date of birth"
                      class="form-control flatpickr-input">
                    </flat-pickr>
                  </div>
                </b-col>
                <b-col lg="4">
                  <div class="mb-3">
                    <label for="cityidInput" class="form-label">City</label>
                    <input type="text" class="form-control" id="cityidInput" placeholder="Enter your city" />
                  </div>
                </b-col>
                <b-col lg="4">
                  <div class="mb-3">
                    <label for="countryidInput" class="form-label">Country</label>
                    <input type="text" class="form-control" id="countryidInput" placeholder="Enter your country" />
                  </div>
                </b-col>
                <b-col lg="4">
                  <div class="mb-3">
                    <label for="zipcodeidInput" class="form-label">Zip Code</label>
                    <input type="text" class="form-control" id="zipcodeidInput" placeholder="Enter your zipcode" />
                  </div>
                </b-col>
                <b-col lg="12">
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                      placeholder="Enter description"></textarea>
                  </div>
                </b-col>
                <b-col lg="12">
                  <div class="hstack gap-2 justify-content-end">
                    <b-button type="button" variant="link" class="link-success text-decoration-none fw-medium"
                      @click="modalShow = false">
                      <i class="ri-close-line me-1 align-middle"></i> Close
                    </b-button>
                    <b-button type="button" variant="primary">
                      <i class="ri-save-3-line align-bottom me-1"></i> Save
                    </b-button>
                  </div>
                </b-col>
              </b-row>
            </b-form>
          </div>
          <div class="tab-pane" id="businessDetails" role="tabpanel">
            <b-form action="#">
              <b-row>
                <b-col lg="12">
                  <div class="mb-3">
                    <label for="companynameInput" class="form-label">Company Name</label>
                    <input type="text" class="form-control" id="companynameInput"
                      placeholder="Enter your company name" />
                  </div>
                </b-col>
                <b-col lg="6">
                  <div class="mb-3">
                    <label for="choices-single-default" class="form-label">Company Type</label>
                    <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                      <option value="">Select type</option>
                      <option value="All" selected>All</option>
                      <option value="Merchandising">Merchandising</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Corporation">Corporation</option>
                    </select>
                  </div>
                </b-col>
                <b-col lg="6">
                  <div class="mb-3">
                    <label for="pancardInput" class="form-label">Pan Card Number</label>
                    <input type="text" class="form-control" id="pancardInput"
                      placeholder="Enter your pan-card number" />
                  </div>
                </b-col>
                <b-col lg="4">
                  <div class="mb-3">
                    <label for="websiteInput" class="form-label">Website</label>
                    <input type="url" class="form-control" id="websiteInput" placeholder="Enter your URL" />
                  </div>
                </b-col>
                <b-col lg="4">
                  <div class="mb-3">
                    <label for="faxInput" class="form-label">Fax</label>
                    <input type="text" class="form-control" id="faxInput" placeholder="Enter your fax" />
                  </div>
                </b-col>
                <b-col lg="4">
                  <div class="mb-3">
                    <label for="companyemailInput" class="form-label">Email</label>
                    <input type="email" class="form-control" id="companyemailInput" placeholder="Enter your email" />
                  </div>
                </b-col>
                <b-col lg="6">
                  <div class="mb-3">
                    <label for="worknumberInput" class="form-label">Number</label>
                    <input type="number" class="form-control" id="worknumberInput" placeholder="Enter your number" />
                  </div>
                </b-col>
                <b-col lg="6">
                  <div class="mb-3">
                    <label for="companylogoInput" class="form-label">Company Logo</label>
                    <input type="file" class="form-control" id="companylogoInput" />
                  </div>
                </b-col>
                <b-col lg="12">
                  <div class="hstack gap-2 justify-content-end">
                    <b-button variant="link" class="link-success text-decoration-none fw-medium"
                      @click="modalShow = false">
                      <i class="ri-close-line me-1 align-middle"></i> Close
                    </b-button>
                    <b-button type="submit" variant="primary">
                      <i class="ri-save-3-line align-bottom me-1"></i> Save
                    </b-button>
                  </div>
                </b-col>
              </b-row>
            </b-form>
          </div>
          <div class="tab-pane" id="bankDetails" role="tabpanel">
            <b-form action="#">
              <b-row>
                <b-col lg="6">
                  <div class="mb-3">
                    <label for="banknameInput" class="form-label">Bank Name</label>
                    <input type="text" class="form-control" id="banknameInput" placeholder="Enter your bank name" />
                  </div>
                </b-col>
                <b-col lg="6">
                  <div class="mb-3">
                    <label for="branchInput" class="form-label">Branch</label>
                    <input type="text" class="form-control" id="branchInput" placeholder="Branch" />
                  </div>
                </b-col>
                <b-col lg="12">
                  <div class="mb-3">
                    <label for="accountnameInput" class="form-label">Account Holder Name</label>
                    <input type="text" class="form-control" id="accountnameInput"
                      placeholder="Enter account holder name" />
                  </div>
                </b-col>
                <b-col lg="6">
                  <div class="mb-3">
                    <label for="accountnumberInput" class="form-label">Account Number</label>
                    <input type="number" class="form-control" id="accountnumberInput"
                      placeholder="Enter account number" />
                  </div>
                </b-col>
                <b-col lg="6">
                  <div class="mb-3">
                    <label for="ifscInput" class="form-label">IFSC</label>
                    <input type="number" class="form-control" id="ifscInput" placeholder="IFSC" />
                  </div>
                </b-col>
                <b-col lg="12">
                  <div class="hstack gap-2 justify-content-end">
                    <b-button variant="link" class="link-success text-decoration-none fw-medium"
                      @click="modalShow = false">
                      <i class="ri-close-line me-1 align-middle"></i> Close
                    </b-button>
                    <b-button type="submit" variant="primary">
                      <i class="ri-save-3-line align-bottom me-1"></i> Save
                    </b-button>
                  </div>
                </b-col>
              </b-row>
            </b-form>
          </div>
        </div>
      </div>
    </b-modal>

  </Layout>
</template>
