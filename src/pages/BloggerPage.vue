<template>
  <div class="container">
    <div class="row">
      <div v-if="!editing" class="col d-flex">
        <img :src="blogger.picture" alt="" />
        <div>
            <h3>{{blogger.name}}</h3>
            <h4>Blogs: {{blogs.length}}</h4>
        </div>
        <div v-if="blogger.id == account.id">
            
        </div>
      </div>
    </div>
  </div>
  <Blog v-for="b in blogs" :key="b.id" :blog="b" />
</template>



<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { blogsService } from "../services/BlogsService.js";
import { AppState } from "../AppState.js";
import { AccountService } from "../services/AccountService.js";
</script>