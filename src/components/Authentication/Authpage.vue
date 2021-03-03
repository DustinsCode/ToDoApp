<template>
  <div>
    <section class="d-flex justify-center align-baseline">
      <div>
        <h1>ToDo App</h1>
        <p>Get something done today!</p>
        <transition name="slide-fade" mode="out-in">
          <a
            v-if="loginMode"
            v-on:click="switchBetweenLoginAndCreateAccountForm()"
            key="toCreate"
            >Don't have an account yet?</a
          >
          <a
            v-else
            v-on:click="switchBetweenLoginAndCreateAccountForm()"
            key="toLogin"
            >Already have an account?</a
          >
        </transition>
      </div>
      <div class="pl-10 pt-10">
        <transition name="slide-fade" mode="out-in">
          <login v-if="loginMode"></login>
          <create-account v-else></create-account>
        </transition>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Login from "./Login.vue";
@Component
export default class Authpage extends Vue {
  loginMode = true;

  switchBetweenLoginAndCreateAccountForm() {
    this.loginMode = !this.loginMode;
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slid-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
/* .flex-container {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  .flex-child {
    flex: 1;
    width: 33%;
  }

  .flex-child:first-child {
    padding: 2em;
    
  } */
</style>
