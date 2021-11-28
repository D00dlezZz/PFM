<template>
  <div>
    <div class="users__list">
      <User
        v-for="user of LocalStorage"
        :key="user"
        v-bind:user="user"
        @delete-user="deleteUser"
        @select-user="selectUser"
      />
    </div>
    <UserInfo
      :user="selectedUser"
      v-if="Object.keys(selectedUser).length > 0"
      @hide-user="hideUser"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import User from "@/components/User.vue";
import UserInfo from "@/components/UserInfo.vue";

export default defineComponent({
  props: {
    LocalStorage: { type: Array },
    selectedUser: { type: Object },
  },
  components: {
    UserInfo,
    User,
  },
  methods: {
    deleteUser(id: number) {
      this.$emit("delete-user", id);
    },
    selectUser(id: number) {
      this.$emit("select-user", id);
    },
    hideUser() {
      this.$emit("hide-user");
    },
  },
});
</script>

<style>
.users__list {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
