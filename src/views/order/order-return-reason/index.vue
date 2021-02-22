<template>
  <div class="reason">
    <el-card shadow="hover">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
    </el-card>
    <el-card shadow="hover">
      <el-table
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column
          type="selection"
          width="45"
          align="center"
        ></el-table-column>
        <el-table-column align="center" label="编号" width="65">
          <template slot-scope="scope">
            {{ scope.row.id }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="原因类型" width="120">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="排序" width="90">
          <template slot-scope="scope">
            {{ scope.row.sort }}
          </template>
        </el-table-column>
        <el-table-column label="是否启用" align="center">
          <template slot-scope="scope">
            <el-switch
              active-color="green"
              inactive-color="red"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.status"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="添加时间" width="180" align="center">
          <template slot-scope="scope">{{ scope.row.create_time }}</template>
        </el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleUpdate(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="fetchData"
    />
  </div>
</template>
<script>
import pagination from "@/components/Pagination";
import { getOrderReason,delReason} from "@/api/ordereason";
export default {
  data() {
    return {
      list: [],
      total: 0,
      listQuery: {
        page: 1,
        limit: 5,
      },
    };
  },
  created() {
    this.fetchData();
  },
  filters: {
    formatval(value) {
      if (value == 1) {
        return true;
      } else {
        return false;
      }
    },
  },
  components: {
    pagination,
  },
  methods: {
    fetchData() {
      getOrderReason(this.listQuery).then((response) => {
        this.total = response.data.total;
        this.list = response.data.items;
        console.log(this.list, "xxxxxxxxxxxxxxx");
      });
    },
    handleUpdate(index, row) {
      this.$router.push({
        path: "/order/updateOrderReason",
        query: { id: row.id },
      });
      console.log(row.id)
    },
    handleDelete(index, item) {
      delReason({ id: item.id }).then((response) => {
        this.fetchData();
      });
    },
  },
};
</script>
<style lang="less" scoped>
.reason {
  width: 80%;
  margin: 20px 80px;
  .el-card {
    margin-bottom: 20px;
  }
}
</style>