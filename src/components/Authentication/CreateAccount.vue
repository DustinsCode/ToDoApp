<template>
    <div>
        <h1>Create Account</h1>

        <v-form
            ref="form"
            v-model="form.valid"
        >
            <v-text-field
                v-model="form.fields.firstName"
                label="First Name"
                :counter="15"
                :rules="form.rules.firstName"
                required
            >
            </v-text-field>

            <v-text-field
                v-model="form.fields.email"
                :rules="form.rules.email"
                label="Email"
                required
            >
            </v-text-field>

            <v-text-field
                v-model="form.fields.password"
                :rules="form.rules.password"
                label="Password"
                required
            >
            </v-text-field>

            <v-btn color="success">Sign Up</v-btn>

        </v-form>

    </div>
    
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import firebase from 'firebase';
import {FormDefinition} from '../../interfaces';
import {requiredRule} from '../../form-rules';

interface SignupForm extends FormDefinition {
    fields: {
        firstName: string;
        email: string;
        password: string;
    },
    rules: {
        firstName: ((message?: string) => {})[];
        email: ((message?: string) => {})[];
        password: ((message?: string) => {})[];

    }
}

@Component
export default class CreateAccount extends Vue {

    form: SignupForm = {
        valid: true,
        fields: {
            email: '',
            firstName: '',
            password: '',
        },
        rules: {
            email: [
                requiredRule()
            ],
            firstName: [
                requiredRule()
            ],
            password: [
                requiredRule()
            ]
        }
    }

    //TODO: create signup function

    //TODO: on successful signup, initialize user's entry in database



}
</script>