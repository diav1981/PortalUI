<script>
export default {
  data() {
    return {
      show: false,
      title: '',
      headline: '',
      message: '',
    };
  },
  methods: {
    showMessage(title, headline, message) {
      this.title = title;
      this.headline = headline;
      this.message = message;
      this.show = true;
    },
  },
};
</script>

<template>
    <b-modal v-model="show" hide-footer :title="title">
      <h5 class="fs-15">{{ headline }}</h5>
      <p class="text-muted">{{ message }}</p>
      <div class="modal-footer v-modal-footer">
        <b-button type="button" variant="primary" @click="show = false">Ok</b-button>
      </div>
    </b-modal>
  </template>