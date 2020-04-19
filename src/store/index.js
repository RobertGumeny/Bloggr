import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    comments: [],
    activeComment: {},
    activeBlog: {},
    userBlogs: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs;
    },
    setComments(state, comments) {
      state.activeBlog.comments = comments
    },
    setActiveComment(state, comment) {
      state.activeComment = comment
    },
    setActiveBlog(state, blog) {
      state.activeBlog = blog;
    },
    setUserBlogs(state, blogs) {
      state.userBlogs = blogs
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
        console.log("user data", res.data)
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
    async getComments({ commit }) {
      try {
        let res = await api.get('profile/comments')
        console.log("comments", res.data)
        commit('setComments', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getBlog({ commit, }, blogId) {
      try {
        let res = await api.get('blogs/' + blogId)
        console.log("check for comments", res.data)
        commit('setActiveBlog', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getUserBlogs({ commit, dispatch }) {
      try {
        let res = await api.get('profile/blogs')
        console.log(res.data)
        commit('setUserBlogs', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getBlogForEdit({ commit, }, blogId) {
      console.log(blogId)
      try {
        let res = await api.get('blogs/' + blogId)
        commit('setActiveBlog', res.data.blog)
        console.log(this.state.activeBlog)
      } catch (error) {
        console.error(error)
      }
    },
    // NOTE Post requests

    async postBlog({ commit, dispatch }, newBlog) {
      try {
        await api.post('blogs', newBlog)
        dispatch('getBlogs')
      } catch (error) {
        console.error(error)
      }
    },
    async postComment({ commit, dispatch }, newComment) {
      console.log("new comment", newComment)
      try {
        await api.post('comments', newComment)
        dispatch('getBlog', newComment.blogId)
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
    async editComment({ commit, dispatch }, commentData) {
      try {
        await api.put('comments/' + commentData._id, commentData)
        dispatch('getBlog', commentData.blogId)
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
    },
    async deleteComment({ commit, dispatch }, commentData) {
      try {
        await api.delete('comments/' + commentData._id)
        dispatch('getBlog', commentData.blogId)
      } catch (error) {
        console.error(error)
      }
    }
  },

});
