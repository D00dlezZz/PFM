<template>
  <div>
    <h1>Users</h1>
    <UsersList
      v-bind:LocalStorage="LocalStorage"
      @delete-user="deleteUser"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UsersList from "@/components/UsersList.vue";
import { response } from "@/getUsers";

export default defineComponent({
  name: "App",
  components: {
    UsersList,
  },
  data() {
    return {
      LocalStorage: [],
    };
  },
  async mounted() {
    const result = await response;
    this.LocalStorage = result.data;
  },
  methods: {
    deleteUser(id:number) {
      this.LocalStorage = this.LocalStorage.filter(user => user.id !== id)
    }
  }
});
</script>

<style>
#app {
  box-sizing: border-box;
  font-family: Avenir,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
