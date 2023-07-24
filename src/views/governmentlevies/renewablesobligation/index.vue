<script>

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import SharedChargeRateTable from "../../../components/sharedchargeratetable.vue";

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