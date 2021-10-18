<template>
  <section class="request-data">
    <el-checkbox-group v-model="selectedCategory" @change="changeCheckboxGroup">
      <el-checkbox-button
        v-for="name in categoryNames"
        :key="name"
        :label="name"
        >{{ name }}</el-checkbox-button
      >
    </el-checkbox-group>
    <data-table :tableData="tableData"></data-table>
  </section>
</template>
<script>
import {
  requestEntityCollection,
  //   requestIndividualEntity,
  //   requestIndividualProperty,
  //   requestIndividualRawValue,
} from "@/utility/RequestingData/RequestFunc.js";
import { mapState } from "vuex";
import DataTable from "@/components/DataTable.vue";
export default {
  components: { DataTable },
  data() {
    return {
      selectedCategory: ["Photos"],
      tableData: [],
    };
  },
  computed: {
    ...mapState(["serviceRoot", "category"]),
    categoryNames() {
      return this.category.map(({ name }) => name);
    },
  },
  methods: {
    changeCheckboxGroup(updatedValue) {
      this.selectedCategory = updatedValue.slice(-1);
      this.setTableData();
    },
    async setTableData() {
      try {
        const category = this.selectedCategory[0];
        const { value } = await requestEntityCollection(
          this.serviceRoot,
          category
        );
        this.tableData = value;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.tagStatus = Array(this.category.length).fill(false);
    this.setTableData();
  },
};
</script>
<style lang="scss" scoped>
.tag-box {
  span {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
}
</style>
