<template>
  <div class="user">
    <div class="user__avatar"><img :src="`${user.avatar}`" alt=""></div> 
    <div class="user__info">
      <div class="info"><p>Name: {{ user.first_name }}</p><button class="red"></button></div>
      <div class="info"><p>Surename: {{ user.last_name }}</p><button class="red"></button></div>
      <div class="info"><p>Email: {{ user.email }}</p><button class="red"></button></div>
    </div>
    <button class="user__delete" v-on:click="$emit('delete-user', user.id)">&times;</button>
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
  margin: 10px;
  align-items: center;
  -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border: none;
}
.user__avatar img {
  height: 120px;
  width: 120px;
  border-radius: 50%;
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
  top: 5px;
  right: 5px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: none;
  background-color: #ff8484;
}

.red {
  cursor: pointer;
  background-image: url("../img/icons8-редактировать.svg");
  width: 25px;
  height: 25px;
  border: none;
  background-color: white;
  margin-left: 10px;
}

</style>