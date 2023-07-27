<script>

import Layout from "../../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../../app.config";
import ChargeRateTable from "../../../../components/shared/charge-rate-table.vue";

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
    ChargeRateTable,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <ChargeRateTable :chargeRateIdProp="1" />
  </Layout>
</template>
