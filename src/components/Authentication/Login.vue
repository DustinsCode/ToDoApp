<template>
    <div>
        <form @submit.prevent>
            <h1>Welcome Back</h1>
            <div>
                <label for="email1">Email</label>
                <input v-model.trim="loginForm.email" type="text" placeholder="you@email.com" id="email" />
            </div>
            <div>
                <label for="password1">Password</label>
                <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password"/>
            </div>
            <button @click="login()">Log In</button>
            <div >
                <a>Forgot Password</a> |
                <a>Create an Account</a>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component
export default class Login extends Vue {
    loginForm: any = {
        email: '',
        password: ''
    }

    login(){
        this.$store.dispatch('login', {
            email: this.loginForm.email,
            password: this.loginForm.password
        })
    }
}
</script>