<script setup lang="ts">
import session from "../models/session";
</script>

<template>
    <div class="container">
        <h1 class="title">Welcome {{ session.user?.firstName }} Your assigned tasks are:</h1>
        <div class="section">
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            <abbr title="Position">Users</abbr>
                        </th>
                        <th>
                            <abbr title="Played">Tasks</abbr>
                        </th>
                        <th>
                            <abbr title="Won">Date</abbr>
                        </th>
                        <th>
                            <abbr title="Drawn">Assigned By</abbr>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<style scoped>
</style>