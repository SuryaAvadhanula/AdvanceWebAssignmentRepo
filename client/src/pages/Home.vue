<script setup lang="ts">
import {useSession} from "../models/session";
const session = useSession()
const user = session.user?.handle;
</script>

<template>
    <div class="section homePagebg">
        <h1 v-if="!session.user" class="title">Welcome, Please login to continue</h1>
        <h1 v-else class="title">Welcome, {{user}}</h1>
        <img src="../assets/homepage.png">
        
    </div>
</template>

<style scoped>
.title{
    text-align: center;
}
</style>