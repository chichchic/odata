<template>
  <router-view />
</template>
<script>
import { requestEntityCollection } from "@/utility/RequestingData/RequestFunc.js";
import { mapMutations } from "vuex";
export default {
  async created() {
    const result = await requestEntityCollection(
      "/api/V4/TripPinServiceRW",
      ""
    );
    const serviceRoot = result["@odata.context"];
    const category = result.value;
    this.SET_serviceRoot(serviceRoot);
    this.SET_category(category);
  },
  methods: {
    ...mapMutations(["SET_serviceRoot", "SET_category"]),
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
