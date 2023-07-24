<script>

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import SharedChargeRateTable from "../../../components/sharedchargeratetable.vue";

export default {
  page: {
    title: "CFD Supplier Operational Costs Levy",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Feed-in Tariff",
      rateId: 7,
      items: [
        {
          text: "Government Levies",
          href: "/",
        },
        {
          text: "FiT",
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
    <SharedChargeRateTable :chargeRateIdProp="rateId" />
  </Layout>
</template>