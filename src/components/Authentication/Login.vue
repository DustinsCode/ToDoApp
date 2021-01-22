<template>
    <div class="login-form">
        <h1>Welcome Back!</h1>
        <div>
            <v-form
                ref="form"
                v-model="form.valid"
            >

                <v-text-field
                    id="emailField"
                    ref="emailField"
                    v-model="form.fields.email"
                    :rules="form.rules.email"
                    label="Email"
                    autofocus
                >
                </v-text-field>

                <v-text-field
                    ref="passwordField"
                    v-model="form.fields.password"
                    :rules="form.rules.password"
                    :type="'password'"
                    label="Password"
                >
                </v-text-field>

                <v-btn
                    color="success" 
                    @click="login" 
                    :disabled="!form.valid"
                >Sign In</v-btn>

            </v-form>
        </div>
    </div>
</template>

<script lang="ts">
import { emailFormatRule, requiredRule } from '@/form-rules';
import { FormDefinition } from '@/interfaces';
import {Component, Vue, Prop} from 'vue-property-decorator'
import firebase from 'firebase';
import FirebaseAuth from '@/components/Authentication/firebaseauth.service'

interface LoginForm extends FormDefinition {
    fields: {
        email: string;
        password: string;
    },
    rules: {
        email: ((message?: string) => {})[];
        password: ((message?: string) => {})[];
    }
}

@Component
export default class Login extends Vue {
    form: LoginForm = {
        valid: true,
        errors: [],
        fields: {
            email: '',
            password: ''
        },
        rules: {
            email: [
                requiredRule(),
                emailFormatRule()
            ],
            password: [
                requiredRule()
            ]
        }
    }

    $refs!: {
        emailField: HTMLFormElement;
        passwordField: HTMLFormElement;
    }

    firebaseAuthService!: FirebaseAuth;

    mounted() {
        this.firebaseAuthService = new FirebaseAuth();
    }

    //TODO: check if user logged in during init lifecycle hook

    login(){
        this.firebaseAuthService.signIn(this.form.fields.email, this.form.fields.password)
            .then((user) => {
                //redirect to home page
                this.$router.push('/');
            })
            .catch((error) => {
                var errorMessage = error.message;
                if(errorMessage.toLowerCase().includes('no user record')){
                    this.$refs.emailField.errorBucket.push('We couldn\'t find an account with that email');
                }else if(errorMessage.toLowerCase().includes('password is invalid')){
                    this.$refs.passwordField.errorBucket.push('Invalid password');
                }
            });
    }
}
</script>