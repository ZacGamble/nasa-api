<template>
  <div
    class="
      home
      flex-grow-1
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
  >
    <div class="home-card p-5 bg-white rounded elevation-3">
      <h4 class="my-5 bg-dark text-white p-3 rounded text-center">
        Astronomy Picture of the Day
      </h4>
      <div>
        <img :src="apod.url" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { apodService } from "../services/APODService";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";

export default {
  name: "Home",
  setup() {
    onMounted(() => {
      try {
        apodService.getApod();
      } catch (error) {
        logger.error("error");
      }
    });
    return {
      apod: computed(() => AppState.apod),
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
