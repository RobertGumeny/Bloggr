import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs;
    },
    setActiveBlog(state, blog) {
      state.activeBlog = blog;
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    // NOTE Get requests
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBlogs({ commit }) {
      try {
        let res = await api.get('blogs')
        commit('setBlogs', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getBlog({ commit, }, blogId) {
      try {
        let res = await api.get('blogs/' + blogId)
        commit('setActiveBlog', res.data.blog)
      } catch (error) {
        console.error(error)
      }
    },
    async getBlogForEdit({ commit, }, blogId) {
      console.log(blogId)
      try {
        let res = await api.get('blogs/' + blogId)
        console.log(res.data.blog)
        commit('setActiveBlog', res.data.blog)
        console.log(this.state.activeBlog)
      } catch (error) {
        console.error(error)
      }
    },
    // NOTE Post requests

    async postBlog({ commit, dispatch }, newBlog) {
      try {
        let res = await api.post('blogs', newBlog)
        dispatch('getBlogs')
      } catch (error) {
        console.error(error)
      }
    },
    // NOTE Put requests
    async editBlog({ commit, dispatch }, blogData) {
      try {
        await api.put('blogs/' + blogData._id, blogData)
        dispatch('getBlogs')
      } catch (error) {
        console.error(error)
      }
    },
    // NOTE Delete requests
    async deleteBlog({ commit, dispatch }, blogId) {
      try {
        await api.delete('blogs/' + blogId)
        dispatch('getBlogs')
      } catch (error) {
        console.error(error)
      }
    }
  },

});