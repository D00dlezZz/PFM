<template>
  <div class="user">
    <div class="user__avatar"><img :src="`${user.avatar}`" alt=""></div> 
    <div class="user__info">
      <div class="info"><p>Name: {{ user.first_name }}</p><button class="red"></button></div>
      <div class="info"><p>Surename: {{ user.last_name }}</p><button class="red"></button></div>
      <div class="info"><p>Email: {{ user.email }}</p><button class="red"></button></div>
    </div>
    <button class="user__delete">&times;</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    user: { type: Object },
  },
});
</script>

<style scoped>
.user {
  position: relative;
  display: flex;
  padding: 1em;
  width: 35em;
  height: 10em;
  border: 1px solid;
  border-radius: 10px;
  margin: 10px;
  align-items: center;
}
.user__avatar img {
  width: 100%;
  height: 100%;
}
.user__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1em;
  font-size: 1.5em;
}

.info {
  display: flex;
}

p {
  margin: 0;
}

.user__delete {
  cursor: pointer;
  position: absolute;
  top: 3px;
  right: 3px;
  border-radius: 50%;
  border: none;
}

.red {
  background-image: url("../img/icons8-редактировать.svg") 100%;
  /*width: 10px;*/
  /*height: 20px;*/
}
</style>