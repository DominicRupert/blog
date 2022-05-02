<template>
  <div class="row border border-dark" @click="openModal"></div>
  <div class="col-md-4">
    <h4>{{ blog.title }}</h4>
  </div>
  <div class="col-md-4">
    <img class="rounded preview-img" :src="blog.coverImg" alt="" />
    <img
      v-for="i in 2"
      :key="i"
      class="rounded preview-img"
      :src="blog.blogImgs[i] ? blog.blogImgs[i] : 'http://thiscatdoesnotexist.com'
      " alt=""
    />
  </div>

  <Modal :id="'m-' + blog.id"> </Modal>
</template>

<script>
import { Modal } from "bootstrap";
import { useRouter } from "vue-router";
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    return {
      account: computed(() => AppState.account),
      goToBlogger() {
        Modal.getOrCreateInstance(
          document.getElementById("m-" + props.blog.id)
        ).hide();
        router.push({ name: "Blogger", params: { id: props.blog.creatorId } });
      },
      openModal() {
        Modal.getOrCreateInstance(
          document.getElementById("m-" + props.blog.id)
        ).toggle();
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.masonry-with-columns {
  columns: 2 200px;
  column-gap: 1rem;
  div {
    display: inline-block;
    width: 70%;
    img {
      max-width: 100%;
      padding: 0.25em;
    }
  }
}
</style>