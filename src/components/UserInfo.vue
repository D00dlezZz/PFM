<template>
  <div class="user__info">
    <button class="editor"></button>
    <div class="info">
      <p>Name:</p>
      <input type="text" :value="user.first_name" disabled="disabled" />
    </div>
    <div class="info">
      <p>Surename:</p>
      <input type="text" :value="user.last_name" disabled="disabled" />
    </div>
    <div class="info">
      <p>Email:</p>
      <input
        type="email"
        :value="user.email"
        disabled="disabled"
        class="email"
      />
    </div>
    <button class="closeBtn" @click="$emit('hide-user')">Закрыть</button>
    <button class="deleteBtn" @click="$emit('select-user', user.id)"></button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserInfo",
  props: ["user"],
});
</script>

<style scoped></style>
