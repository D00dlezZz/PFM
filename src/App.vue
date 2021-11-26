<template>
  <div> 
    <h1>Пользователи</h1>
    <UsersList v-bind:LocalStorage="LocalStorage" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UsersList from '@/components/UsersList.vue';
import {response} from '@/getUsers' 

export default defineComponent({
  name: "App",
  components: {
    UsersList,
  },
  data() {
    return {
      LocalStorage: []
    };
  },
  async mounted() {
    const result = await response;
    this.LocalStorage = result.data;
  }
});
</script>

<style>
#app {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
