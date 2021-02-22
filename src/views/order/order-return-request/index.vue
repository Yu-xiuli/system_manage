<template>
  <div class="require">
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
        ><el-table-column
          type="selection"
          width="45"
          align="center"
        ></el-table-column>
        <el-table-column align="center" label="服务单号" width="80">
          <template slot-scope="scope">
            {{ scope.row.id }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="申请时间">
          <template slot-scope="scope">
            {{ scope.row.create_time }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="用户账号" width="100">
          <template slot-scope="scope">
            {{ scope.row.member_username }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="退款金额" width="100">
          <template slot-scope="scope">
            {{ scope.row.product_real_price }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="申请状态" width="100">
          <template slot-scope="scope">
            {{ scope.row.status | formatstatus }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="处理时间">
          <template slot-scope="scope">
            {{ scope.row.handle_time | formattime }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template >
            <el-button
              size="mini"
              >查看详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <pagination
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="fetchData"
    />
  </div>
</template>
<script>
import pagination from "@/components/Pagination";
import { getRequest } from "@/api/orderrequest";
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
  filters:{
      formatstatus(value){
          if (value==0) {
              return "待处理"
          } else if(value==1){
              return "退货中"
          }else if(value==2){
              return "已完成"
          }else{
              return "已拒绝"
          }
      },
      formattime(value){
          if(value==''||value==null){
              return "NAN"
          }else{
              return value
          }
      }
  },
  components:{pagination},
  methods: {
    fetchData() {
      getRequest(this.listQuery).then((response) => {
        this.total = response.data.total;
        this.list = response.data.items;
        console.log(this.list, "xxxxxxxxxxxxxxx");
      });
    },
  },
};
</script>
<style lang="less" scoped>
.require {
  width: 87%;
  margin: 20px 80px;
  .el-card {
    margin-bottom: 20px;
  }
}
</style>