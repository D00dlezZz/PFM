<template>
  <div>
    <h1>Пользователи:</h1>
    <UsersList
      v-bind:LocalStorage="users"
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

  async mounted() {
    await getUsers()
    .then((response: any) => {
      localStorage.setItem("users", JSON.stringify(response.data));
    })
  },
  computed: {
    users(): any {
      let users: any =  JSON.parse(localStorage.getItem("users")!);
      return users;
    }
  },
  methods: {
    deleteUser(id: number) {
      console.log(this.users)
      this.users.filter((user: any) => user.id !== id);
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
