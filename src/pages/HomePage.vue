<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <h5>{{ blogs.body }}</h5>
      </div>
    </div>
    <Blog v-for="b in blogs" :key="b.id" :blog="b" />
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import { logger } from "../utils/Logger.js";
import { blogsService } from "../services/BlogsService.js";
import Pop from "../utils/Pop.js";
export default {
  name: "Home",
  setup() {
    onMounted(async () => {
      try {
        await blogsService.getAll();
      } catch (error) {
        logger.log(error);
        Pop.toast(error.message, "error");
      }
    });

    return {
      blogs: computed(() => AppState.blogs),
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
