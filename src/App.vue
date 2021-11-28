<template>
  <div>
    <div class="overlay"></div>
    <h1>Пользователи:</h1>
    <UsersList
      :LocalStorage="users"
      @delete-user="deleteUser"
      @select-user="selectUser"
      @hide-user="hideUser"
      @edit-user="editUser"
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
        console.log("salam");
        localStorage.users = JSON.stringify(newUsers);
      }
    );

    function deleteUser(id: number) {
      users.value = JSON.parse(localStorage.users).filter(
        (user: any) => user.id !== id
      );
      selectedUser.value = new User();
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
    function editUser(userInfo: any) {
      let updatedUser: any = [];
      JSON.parse(localStorage.users).forEach((user: any, index: number) => {
        if (user.id === userInfo.id) {
          updatedUser.push(userInfo);
        } else {
          updatedUser.push(user);
        }
      });
      users.value = updatedUser;
    }
    return {
      users,
      deleteUser,
      selectUser,
      selectedUser,
      hideUser,
      editUser,
    };
  },
});
</script>

<style>
#app {
  box-sizing: border-box;
  padding: 30px;
  font-family: Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}

h1 {
  text-align: center;
}
</style>
