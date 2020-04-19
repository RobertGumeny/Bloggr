<template>
  <nav class="navbar navbar-expand-lg">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <div>
        <h1 class="text-info logo">B</h1>
        <!-- <img src="../assets/logo.png" alt="Logo" /> -->
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ active: $route.name == 'Home' }">
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'Blogs' }">
          <router-link :to="{ name: 'Blogs' }" class="nav-link">Blogs</router-link>
        </li>
        <li
          class="nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'Profile' }"
        >
          <router-link class="nav-link" :to="{ name: 'Profile' }">Profile</router-link>
        </li>
      </ul>
      <div class="navbar-nav ml-auto">
        <button class="btn btn-outline-info" @click="login" v-if="!$auth.isAuthenticated">Login</button>
        <div class="nav-item btn-group" v-else>
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img class="avatar" :src="profile.picture" :alt="profile.name" />
          </a>

          <div class="dropdown-menu dropdown-menu-right">
            <router-link class="dropdown-item" :to="{ name: 'Profile' }">Profile</router-link>
            <button
              class="dropdown-item"
              type="button"
              data-toggle="modal"
              data-target="#blogModal2"
            >Post a Blog</button>
            <button class="dropdown-item text-danger" @click="logout" type="button">Logout</button>
            <BlogModal2 id="blogModal2"></BlogModal2>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { getUserData } from "@bcwdev/auth0-vue";
import { setBearer, api } from "../store/AxiosStore";
import BlogModal2 from "./blogmodal";
import CreateBlog from "./createblog";
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      if (this.$auth.isAuthenticated) {
        setBearer(this.$auth.bearer);
        // NOTE if you want to do something everytime the user logs in, do so here
      }
      this.$store.dispatch("getProfile");
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    }
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  },
  components: {
    BlogModal2,
    CreateBlog
  }
};
</script>

<style lang="scss">
nav {
  background-color: #7b7b7b;
}
.nav-link {
  color: rgb(246, 252, 255);
}
.nav-link:hover {
  color: #383838;
}
.active a {
  color: #383838;
}
.avatar {
  border-radius: 50%;
  height: 3rem;
  border: 1px solid #e1eef4;
}
.logo {
  font-size: 50px;
  font-weight: bold;
  margin-top: 5px;
  margin-left: 10px;
}
</style>
