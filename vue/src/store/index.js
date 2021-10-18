import { createStore } from "vuex";

export default createStore({
  state: { serviceRoot: null, category: [] },
  mutations: {
    SET_serviceRoot(state, payload) {
      state.serviceRoot = payload
        .replace("http://services.odata.org", "/api")
        .replace("$metadata", "");
    },
    SET_category(state, payload) {
      state.category = payload;
    },
  },
  actions: {},
  modules: {},
});
