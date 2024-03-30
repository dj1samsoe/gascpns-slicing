// store/auth.js
import Api from "../../api/Api";

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem("token") || "",
    user: JSON.parse(localStorage.getItem("user")) || {},
    role: localStorage.getItem("role") || "", // Added user role
  },
  mutations: {
    AUTH_SUCCESS(state, { token, user }) {
      state.token = token;
      state.user = user;
      state.role = user && user.roles ? user.roles : "member";

      // Save token and user data in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    },
    GET_USER(state, user) {
      state.user = user;
      state.role = user && user.roles ? user.roles : "member";

      // Update user data in local storage
      localStorage.setItem("user", JSON.stringify(user));
    },
    AUTH_LOGOUT(state) {
      state.token = "";
      state.user = {};
      state.role = ""; // Clear user role on logout
    },
  },
  actions: {
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        Api.post("/v1/register", {
          name: user.name,
          email: user.email,
          username: user.username,
          phone: user.phone,
          password: user.password,
          password_confirmation: user.password_confirmation,
        })
          .then((response) => {
            const token = response.data.token;
            const user = response.data.user; // Ensure user data is present
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            Api.defaults.headers.common["Authorization"] = "Bearer " + token;
            commit("AUTH_SUCCESS", token, user);
            commit("GET_USER", user);
            resolve(response);
          })
          .catch((error) => {
            localStorage.removeItem("token");
            reject(error.response.data);
          });
      });
    },
    getUser({ commit }) {
      return new Promise((resolve, reject) => {
        Api.get("/user"),
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
            .then((response) => {
              const user = response.data;
              commit("GET_USER", user);
              resolve(response);
            })
            .catch((error) => {
              reject(error);
            });
      });
    },

    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        Api.post("/v1/login", {
          email_or_username: user.email_or_username,
          password: user.password,
        })
          .then((response) => {
            const token = response.data.data.access_token;
            const user = response.data.user || {};
            const role = user && user.roles ? user.roles : "member";

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("role", role);
            Api.defaults.headers.common["Authorization"] = "Bearer " + token;

            commit("AUTH_SUCCESS", { token, user });
            commit("GET_USER", user);
            // commit("SET_ROLE", role);
            resolve(response);
          })
          .catch((error) => {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            reject(error.response.data.error);
          });
      });
    },
  },
  getters: {
    currentUser(state) {
      return state.user;
    },
    isLoggedIn(state) {
      return state.token;
    },
    userRole(state) {
      return state.role;
    },
    isAdmin(state) {
      return state.role === "admin";
    },
    isMember(state) {
      return state.role === "member";
    },
    SET_ROLE(state, role) {
      state.role = role;
    },
  },
};

export default auth;
