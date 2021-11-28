<template>
  <div>
    <div class="users__list">
      <User
        v-for="user of LocalStorage" :key="user"
        v-bind:user="user"
        v-on:delete-user="deleteUser"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import User from "@/components/User.vue";

export default defineComponent({
  props: ["LocalStorage"],
  components: {
    User,
  },
  methods: {
    deleteUser(id:number) {
      this.$emit('delete-user', id)
  }
}
});
</script>

<style scoped>
.users__list {
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
}
</style>