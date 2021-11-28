<template>
  <div class="user__container">
    <div class="user" :id="`${user.id}`">
      <div class="main">
        <button
          class="deleteBtn"
          @click="$emit('delete-user', user.id)"
        ></button>
        <div class="user__avatar"><img :src="`${user.avatar}`" alt="" /></div>
        <div class="user__id">
          <p>User {{ user.id }}</p>
        </div>
        <p @click="$emit('select-user', user.id)" class="about">подробнее</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    user: { type: Object },
  },
  methods: {
    // toggleEditButton(event: any) {
    //   const currentUser: any = event.target.closest(".user");
    //   currentUser.querySelectorAll("input").forEach((input: any) => {
    //     input.disabled = !input.disabled;
    //     if (input.disabled === true) {
    //       input.style.border = "none";
    //     } else {
    //       input.style.border = "0.5px solid #ff8484";
    //     }
    //   });
    // },
  },
});
</script>

<style scoped>
.user__id {
  display: flex;
  justify-content: center;
  font-size: 1.3em;
}
.about {
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.user {
  position: relative;
  display: flex;
  padding: 1em;
  width: 8em;
  height: 10em;
  margin: 10px;
  align-items: center;
  -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: white;
  border: none;
  animation: animShow 1s;
}

.deleteBtn {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  background-image: url("../img/free-icon-dustbin-5617178.png");
  background-size: 100%;
  width: 20px;
  height: 20px;
  border: none;
  background-color: white;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s;
}

.user:hover .deleteBtn {
  opacity: 1;
  pointer-events: unset;
  transition: opacity 0.5s;
}

.user__avatar img {
  height: 120px;
  width: 120px;
  border-radius: 50%;
}

p {
  margin: 0;
}

.user:hover .editor {
  opacity: 1;
  pointer-events: unset;
  transition: opacity 0.5s;
}

@keyframes animShow {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
