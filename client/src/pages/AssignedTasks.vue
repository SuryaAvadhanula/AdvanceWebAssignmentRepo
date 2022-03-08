<script setup lang="ts">
    import session from "../models/session";
</script>

<template>
    <div class="container">
        <h1 class="title">
            Welcome {{session.user?.firstName}} Your assigned tasks are:
        </h1>
        <div class="section">
                <thead>
                    Tasks
                </thead>
                <tbody> 
                    <h2 class="sub-title" v-for="task in session.user?.userTasks">{{task}}</h2>
                </tbody>
        </div>
    </div>
</template>

<style scoped>

</style>