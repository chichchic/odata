<template>
  <section class="data-table">
    <el-table v-if="tableData" :data="tableData" style="width: 100%">
      <el-table-column
        v-for="key in dataKeys"
        :prop="key"
        :label="key"
        :key="key"
      >
        <template #default="props">
          {{ displayEntity(props.row[key]) }}
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>
<script>
export default {
  props: ["tableData"],
  computed: {
    dataKeys() {
      if (!this.tableData || this.tableData.length === 0) return [];
      const filteredTableData = this.tableData.map((v) => {
        return Object.entries(v).reduce((acc, [key, value]) => {
          if (Array.isArray(value)) {
            acc[key] = value.join("\n");
          } else {
            acc[key] = value;
          }
          return acc;
        }, {});
      });
      return Object.keys(filteredTableData[0]).filter(
        (val) => val[0] !== "@" && val !== "Concurrency"
      );
    },
  },
  data() {
    return {};
  },
  methods: {
    displayEntity(value) {
      if (typeof value === "object") {
        return "show detail";
      }
      return value;
    },
  },
};
</script>
<style lang="scss" scoped></style>
