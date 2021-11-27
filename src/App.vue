<template>
  <div>
    <h1>Пользователи:</h1>
    <UsersList
      v-bind:LocalStorage="LocalStorage"
      @delete-user="deleteUser"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UsersList from "@/components/UsersList.vue";
import { getUsers } from "@/getUsers";


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
    await this.addUsers()
  },
  methods: {
    async addUsers() {
      let value: any = await getUsers().then((res) => res);
      this.LocalStorage = value.data
    },
    deleteUser(id: number) {
      this.LocalStorage = this.LocalStorage.filter((user: any) => user.id !== id);
    }
  }
});
</script>

<style>
#app {
  box-sizing: border-box;
  padding: 10px 90px;
  font-family: Avenir,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
