<template>
  <div class="user">
     <div class="user__avatar"><img :src="`${user.avatar}`" alt=""></div> 
     <p class="user__name">{{user.first_name + ' ' + user.last_name}}</p> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    user: {
      type: Object,
    } 
   }
});
</script>

<style scoped>
.user {
    display: flex;
    padding: 1em;
    width: 25em;
    height: 10em;
    border: 1px solid;
    border-radius: 5%;
    margin: 10px;
}

.user__name {
    font-size: 2em;
}

</style>