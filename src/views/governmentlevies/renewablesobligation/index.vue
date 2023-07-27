<script>

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import ChargeRateTable from "../../../components/shared/charge-rate-table.vue";

export default {
  page: {
    title: "Renewables Obligation",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Renewables Obligation",
      rateId: 8,
      items: [
        {
          text: "Government Levies",
          href: "/",
        },
        {
          text: "Renewables Obligation",
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