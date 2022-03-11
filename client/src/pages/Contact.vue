<script setup lang="ts">
import {ref} from 'vue'
const response = ref('')
const username = ref('')
const email = ref('')
const message = ref('')

function formSubmit() {
    response.value = "Thanks for your review. It will be addressed shortly";
    username.value = ""
    email.value = ""
    message.value = ""

}

</script>
<template>
    <div class="container my-5 mt-5 mx-5 px-5">
    <h2 class="title is-2 is-capitalized">Contact Us</h2>
    <form @submit.prevent="formSubmit" method="post">
        <div class="field">
            <label for="name" class="label is-size-4 has-text-weight-light"></label>
            <div class="control has-icons-left">
                <input type="text" name="name" id="name" class="input" placeholder="Name" autofocus v-model="username">
                    <span class="icon is-left">
                        <i class="fa fa-user"></i>
                    </span>
            </div>
        </div>
        <div class="field">
            <label for="email" class="label is-size-4 has-text-weight-light"></label>
            <div class="control has-icons-left">
                <input type="email" name="email" id="email" class="input" placeholder="Email" v-model='email'>
                    <span class="icon is-left">
                        <i class="fa fa-envelope"></i>
                    </span>
            </div>
        </div>
        <div class="field">
            <label for="message" class="label is-size-4 has-text-weight-light"></label>
            <textarea name="message" id="message" rows="5" class="textarea is-medium" placeholder="Message" v-model="message"></textarea>
        </div>
        <button type="submit" class="button is-success is-size-5">Submit</button>
    </form>
    <hr>
    <h1 class="title">{{response}}</h1>
</div>
</template>



<style scoped>

</style>