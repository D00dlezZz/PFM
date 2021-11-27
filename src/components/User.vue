<template>
  <div class="user" :id="`${user.id}`">
    <div class="main">
      <div class="user__avatar"><img :src="`${user.avatar}`" alt=""></div>
      <div class="user__id"><p>User {{ user.id }}</p></div>
      <p @click="showInfo" class="about">подрообнее</p>
    </div>
    <div class="user__info">
      <button class="editor" @click="toggleEditButton"></button>
      <div class="info"><p>Name:</p><input type="text" :value="user.first_name" disabled="disabled"/></div>
      <div class="info"><p>Surename:</p><input type="text" :value="user.last_name" disabled="disabled"/></div>
      <div class="info"><p>Email:</p><input type="email" :value="user.email" disabled="disabled" class="email"/></div>
    </div>
    <button class="user__delete" @click="$emit('delete-user', user.id)">&times;</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    user: { type: Object },
  },
  methods: {
    toggleEditButton(event: any) {
      const currentUser: any = event.target.closest(".user")
      currentUser.querySelectorAll("input").forEach((input: any) => {
        input.disabled = !input.disabled
        if (input.disabled === true) {
          input.style.border = 'none'
        }else {
          input.style.border = '0.5px solid #ff8484'
        }
      })
    },
    showInfo( ) {
      // const selectedUser: any = event.target.
      document.querySelectorAll(".user__info").forEach((element:any) => {
          element.style.display = "flex"
      });
      document.querySelectorAll(".user").forEach((element:any) => {
        element.style.width = "35em"
      });
    }
  }
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
  width: 120px;
  height: 10em;
  margin: 10px;
  align-items: center;
  -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border: none;
  animation: animShow 0.8s;
}

.user:hover .user__delete{
 opacity: 1;
  pointer-events: unset;
  transition: opacity 0.5s;
}


.user__avatar img {
  height: 120px;
  width: 120px;
  border-radius: 50%;
}
.user__info {
  display: none;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1em;
  font-size: 1.5em;
}

.info {
  display: flex;
  margin-bottom: 5px;
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
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s;
}

.editor {
  position: absolute;
  top: 20%;
  right: 10%;
  cursor: pointer;
  background-image: url("../img/icons8-редактировать.svg");
  width: 25px;
  height: 25px;
  border: none;
  background-color: white;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s;
}

.user:hover .editor{
  opacity: 1;
  pointer-events: unset;
  transition: opacity 0.5s;
}
input {
  border: none;
  font-size: 1em;
  font-weight: initial;
  color: #2c3e50;
  background-color: white;
  outline:none;
  border-radius: 10px;
}

.email {
  width: 300px;
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