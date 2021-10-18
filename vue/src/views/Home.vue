<template>
  <div class="home">
    <router-link to="/request-data">Requst Data</router-link>
    <router-link to="/querying-data">Querying Data</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
