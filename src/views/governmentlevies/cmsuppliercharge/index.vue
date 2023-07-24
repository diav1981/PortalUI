<script>

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import SharedChargeRateTable from "../../../components/sharedchargeratetable.vue";

export default {
  page: {
    title: "CM Supplier Charge",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "CM Supplier Charge",
      rateId: 5,
      items: [
        {
          text: "Government Levies",
          href: "/",
        },
        {
          text: "CM Supplier Charge",
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