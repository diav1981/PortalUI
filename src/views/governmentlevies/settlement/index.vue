<script>

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import ChargeRateTable from "../../../components/shared/charge-rate-table.vue";

export default {
  page: {
    title: "CM Settlement Costs Levy",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "CM Settlement Costs Levy",
      rateId: 6,
      items: [
        {
          text: "Government Levies",
          href: "/",
        },
        {
          text: "CM Settlement Costs Levy",
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