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
      title: "CFD Supplier Operational Costs Levy",
      rateId: 3,
      items: [
        {
          text: "Government Levies",
          href: "/",
        },
        {
          text: "CFD SOCL",
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