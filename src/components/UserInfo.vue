<template>
  <div class="user__container">
    <div class="user__avatar"><img :src="`${user.avatar}`" alt="" /></div>
    <div class="user__info">
      <div class="info">
        <p>Name:</p>
        <input type="text" v-model="userInfo.first_name" />
      </div>
      <div class="info">
        <p>Surename:</p>
        <input type="text" v-model="userInfo.last_name" />
      </div>
      <div class="info">
        <p>Email:</p>
        <input type="email" v-model="userInfo.email" class="email" />
      </div>
      <button class="closeBtn" @click="$emit('hide-user')">Закрыть</button>
      <button class="editor" @click="$emit('edit-user', userInfo)">
        Сохранить
      </button>
    </div>
    <button class="deleteBtn" @click="$emit('delete-user', user.id)"></button>
  </div>
  <div class="modal-mask"></div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserInfo",
  props: ["user"],
  data() {
    return {
      userInfo: {
        first__name: "",
        last__name: "",
        email: "",
      },
    };
  },
  mounted() {
    this.userInfo = this.user;
  },
});
</script>

<style scoped>
.user__container {
  top: -150px;
  left: 25%;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 40em;
  height: 15em;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  border-radius: 10px;
  background-color: white;
  border: none;
  animation: animShow 1s;
  padding: 10px;
  z-index: 2;
  animation: appeared 0.7s;
}
.info {
  display: flex;
}

.info input {
  width: 300px;
  font-size: 1.5em;
  border: none;
  outline: none;
}

p {
  font-size: 1.5em;
  margin: 5px;
}

.editor {
  margin-top: 5px;
  margin-left: 20px;
  font-size: 1em;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: none;
  background-color: #529fd3;
  color: white;
}

.deleteBtn {
  position: absolute;
  top: 5%;
  right: 5%;
  background-image: url("../img/free-icon-dustbin-5617178.png");
  border: none;
  background-size: 100%;
  width: 30px;
  height: 30px;
  background-color: white;
}

.user__avatar img {
  height: 180px;
  width: 180px;
  border-radius: 50%;
}
.closeBtn {
  background-color: #ff8484;
  font-size: 1em;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: none;
}

.modal-mask {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}

@keyframes appeared {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
