<script>

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import ChargeRateTable from "../../../components/shared/charge-rate-table.vue";

export default {
  page: {
    title: "Climate Change Levy",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Climate Change Levy",
      items: [
        {
          text: "Government Levies",
          href: "/",
        },
        {
          text: "CCL",
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
    <ChargeRateTable :chargeRateIdProp="2" />
  </Layout>
</template>