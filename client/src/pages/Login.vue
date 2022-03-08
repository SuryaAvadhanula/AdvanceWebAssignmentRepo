<script setup lang="ts">
import { Login } from '../models/session';
let userName: any;
let password: any;
function login() {
    userName = document.getElementsByTagName("input")[0].value
    password = document.getElementsByTagName("input")[1].value
    Login(userName, password)
}
</script>

<template>
    <div class="section login">
        <form @submit.prevent="login">
            <h1 class="title">Login Page</h1>
            <input class="input is-primary username" placeholder="username" :v-model="userName"/>
            <input class="input is-primary password" placeholder="Password" :v-model="password" />
            <br />
            <button class="button is-primary">
                <span class="icon">
                    <i class="fa fa-sign-in"></i>
                </span>
                <span>Login</span>
            </button>
        </form>
    </div>
</template>


<style scoped lang="css">
.is-primary {
    width: 30%;
    margin: 10px;
    align-content: center;
    display: flex;
}
.login {
    text-align: center;
}
</style>