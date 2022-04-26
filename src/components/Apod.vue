<template>
  <div class="component"></div>
</template>


<script>
import { apodService } from "../services/APODService";
import { Apod } from "../models/apod.js";

export default {
  props: {
    apod: { type: Apod, required: true },
  },

  setup(props) {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>