<script>

import Layout from "../../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../../app.config";
import SharedChargeRateTable from "../../../../components/sharedchargeratetable.vue";
//import TestComponent from "../../../../components/testcomponent.vue"
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
    };
  },
  components: {
    Layout,
    PageHeader,
    SharedChargeRateTable,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <SharedChargeRateTable :chargeRateIdProp="1" />
  </Layout>
</template>