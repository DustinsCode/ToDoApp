<template>
    <div class="signup-form">
        <h1>Create Account</h1>
        <div>
            <v-form
                ref="form"
                v-model="form.valid"
            >
                <v-text-field
                    v-model="form.fields.firstName"
                    label="First Name"
                    :counter="15"
                    :rules="form.rules.firstName"
                    autofocus
                >
                </v-text-field>

                <v-text-field
                    ref="emailField"
                    v-model="form.fields.email"
                    :rules="form.rules.email"
                    label="Email"
                >
                </v-text-field>

                <v-text-field
                    v-model="form.fields.password"
                    :rules="form.rules.password"
                    :type="'password'"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                >
                </v-text-field>

                <v-btn color="success" @click="signUp" :disabled="!form.valid">Sign Up</v-btn>

            </v-form>
        </div>

    </div>
    
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import firebase from 'firebase';
import {FormDefinition} from '../../interfaces';
import {requiredRule, emailFormatRule, minPasswordLength} from '../../form-rules';

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
        errors: [],
        fields: {
            email: '',
            firstName: '',
            password: '',
        },
        rules: {
            email: [
                requiredRule(),
                emailFormatRule()
            ],
            firstName: [
                requiredRule()
            ],
            password: [
                requiredRule(),
                minPasswordLength()
            ]
        }
    }

    $refs!: {
        emailField: HTMLFormElement;
    }
    
    signUp(){
        firebase.auth().createUserWithEmailAndPassword(this.form.fields.email, this.form.fields.password)
            .then((user) => {
                
                //redirect to home page
                this.$router.push('/');
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log("Error: " + errorMessage);
                this.form.errors.push(errorMessage);
                this.form.valid = false; 
                this.emailErrorCheckAfterSubmit();
            });
    }

    emailErrorCheckAfterSubmit(){
        this.form.errors.forEach(error => {
            if(error.toLowerCase().includes('email')){
                this.$refs.emailField.errorBucket.push(error);
            }else{
                alert("We had a problem signing you in. Since this app is currently in development, please email the following error message to dthurston1996@gmail.com: \n\n " + error);
            }
        });
    }


}
</script>