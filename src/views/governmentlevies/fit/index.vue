<script>

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import ChargeRateTable from "../../../components/shared/charge-rate-table.vue";

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
    ChargeRateTable,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <ChargeRateTable :chargeRateIdProp="rateId" />
  </Layout>
</template>