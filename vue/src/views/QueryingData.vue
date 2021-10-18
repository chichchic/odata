<template>
  <section class="querying-data">
    <h3>please write down the collectionPath</h3>
    <input type="text" v-model="collectionPath" />
    <h3>please select the query</h3>
    <div class="query-box">
      <el-checkbox-group v-model="selectedQuery" @change="setSelectedQuery">
        <el-checkbox-button
          v-for="query in queries"
          :key="query"
          :label="query"
          >{{ query }}</el-checkbox-button
        >
      </el-checkbox-group>
    </div>
    <h3>please write down the query string</h3>
    <input type="text" v-model="queryOptions" />
    <el-button @click.prevent="getQueryingData">get data</el-button>
    <section>
      <p>
        {{ result["@odata.context"] }}
      </p>
      <p v-for="v in result.value" :key="v['@odata.id']">{{ v }}</p>
    </section>
  </section>
</template>
<script>
import { query } from "@/utility/QueryingData/QeuryFunc.js";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["serviceRoot"]),
  },
  data() {
    return {
      queryOptions: "",
      collectionPath: "",
      result: "",
      selectedQuery: ["filter"],
      queries: [
        "filter",
        "expand",
        "orderby",
        "top",
        "skip",
        "count",
        "select",
        "search",
      ],
    };
  },
  methods: {
    async getQueryingData() {
      console.log();
      const queryObject = {
        [this.selectedQuery[0]]: this.queryOptions,
      };
      this.result = await query(
        this.serviceRoot,
        this.collectionPath,
        queryObject
      );
      console.log(this.result);
    },
    setSelectedQuery() {
      this.selectedQuery = this.selectedQuery.slice(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.querying-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin: 20px 0;
  }
  section {
    border: solid 1px black;
    min-height: 300px;
    min-width: 50%;
  }
}
</style>
