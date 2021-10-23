import { createStore } from "vuex";

const axios = require("axios");

const instance = axios.create({
  baseURL: "https://api.example.com",
});

// Create a new store instance
const store = createStore({
  state: {},
  actions: {
    createAccount: ({ commit }, userInfos) => {
      commit;
      axios
        .post("/user", {
          firstName: "Fred",
          lastName: "Flintstone",
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
});

export default store;
