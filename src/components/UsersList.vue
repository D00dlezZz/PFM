<template>
  <div>
    <div class="users__list">
      <Users
        v-for="user of LocalStorage" :key="user"
        v-bind:user="user"
        v-on:delete-user="deleteUser"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Users from "@/components/Users.vue";

export default defineComponent({
  props: ["LocalStorage"],
  components: {
    Users,
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
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
}
</style>