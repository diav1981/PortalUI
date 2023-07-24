<script>

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import SharedChargeRateTable from "../../../components/sharedchargeratetable.vue";

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
    SharedChargeRateTable,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <SharedChargeRateTable :chargeRateIdProp="2" />
  </Layout>
</template>