<template>
    <div class="login">
        <section>
            <div class="col1">
                <h1>ToDo App</h1>
                <p>Welcome to my humble little ToDo app</p>
            </div>
            <div class="col2">
                <form @submit.prevent>
                    <h1>Welcome Back</h1>
                    <div>
                        <label for="email1">Email</label>
                        <input v-model.trim="loginForm.email" type="text" placeholder="you@email.com" id="email1" />
                    </div>
                    <div>
                        <label for="password1">Password</label>
                        <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password1"></input>
                    </div>
                    <button @click="login()" class="button">Log In</button>
                    <div class="extras">
                        <a>Forgot Password</a> |
                        <a>Create an Account</a>
                    </div>
                </form>
            </div>
        </section>
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