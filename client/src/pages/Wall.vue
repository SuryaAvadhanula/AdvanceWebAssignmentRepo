<script setup lang="ts">
import { useSession } from "../models/session";
const session = useSession()
const user = session.user?.handle;
</script>

<template>
  <div class="section homePagebg">
    <div v-if="!session.user">
      <h1 class="title">Welcome to Suny New Paltz</h1>
      <h1 class="title">Please login/register to continue to view & assign tasks</h1>
    </div>
    <div  v-else>
      <h1 class="title">Welcome to Suny New Paltz Task Manager, {{user}}</h1>
    </div>
    <img src="../assets/suny_new_paltz.jpg">
  </div>
</template>


<style scoped>
.title {
  text-align: center;
  margin-bottom: 10px;
}

.homePagebg img {
  min-width: 100%;
}
</style>
