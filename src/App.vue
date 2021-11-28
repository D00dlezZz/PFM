<template>
  <div>
    <div class="overlay"></div>
    <h1>Пользователи:</h1>
    <UsersList
      :LocalStorage="users"
      @delete-user="deleteUser"
      @select-user="selectUser"
      @hide-user="hideUser"
      :selectedUser="selectedUser"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UsersList from "@/components/UsersList.vue";
import User from "@/User";
import { getUsers } from "@/getUsers";
import { ref, watch } from "vue";

export default defineComponent({
  name: "App",
  components: {
    UsersList,
  },
  setup() {
    const users = ref<Array<User>>([]);
    const selectedUser = ref<User>(new User());

    getUsers().then((response: any) => {
      users.value = response.data;
    });

    watch(
      () => users.value,
      (newUsers) => {
        localStorage.users = JSON.stringify(newUsers);
      }
    );

    function deleteUser(id: number) {
      users.value = JSON.parse(localStorage.users).filter(
        (user: any) => user.id !== id
      );
    }
    function selectUser(id: number) {
      selectedUser.value = JSON.parse(localStorage.users).find(
        (user: any) => user.id === id
      );
      console.log(Object.keys(selectedUser.value));
    }
    function hideUser() {
      selectedUser.value = new User();
    }
    return {
      users,
      deleteUser,
      selectUser,
      selectedUser,
      hideUser,
    };
  },
});
</script>

<style>
#app {
  box-sizing: border-box;
  font-family: Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}

.overlay {
  display: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  overflow: hidden;
}
</style>
