<template>
    <div>
        <section>
            <div >
                <h1>ToDo App</h1>
                <p>Welcome to my humble little ToDo app</p>
            </div>
            <div>
                <login></login>
                <create-account></create-account>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component
export default class Authpage extends Vue {
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