<template>
  <div class="order-list">
    <el-card shadow="hover">
      <!-- 筛选搜索 -->
      <div class="search">
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button
          style="float: right"
          type="primary"
          @click="handleSearchList()"
          size="small"
        >
          查询搜索
        </el-button>
        <el-button
          style="float: right; margin-right: 15px"
          @click="handleResetSearch('ruleform')"
          size="small"
        >
          重置
        </el-button>
      </div>
      <div class="form-data" style="margin-top: 30px">
        <el-form inline ref="ruleform" :model="form" label-width="80px">
          <el-form-item label="输入搜索">
            <el-input v-model="form.id" placeholder="订单编号"></el-input>
          </el-form-item>
          <el-form-item label="收货人">
            <el-input
              v-model="form.name"
              placeholder="收货人姓名/手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item label="提交时间">
            <el-date-picker
              type="date"
              placeholder="请选择时间"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="订单状态">
            <el-select v-model="form.status" placeholder="全部">
              <el-option label="待付款" value="0"></el-option>
              <el-option label="代发货" value="1"></el-option>
              <el-option label="已发货" value="2"></el-option>
              <el-option label="已完成" value="3"></el-option>
              <el-option label="已关闭" value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单分类">
            <el-select v-model="form.class" placeholder="全部">
              <el-option label="正常订单" value="0"></el-option>
              <el-option label="秒杀订单" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单来源">
            <el-select v-model="form.source" placeholder="全部">
              <el-option label="PC订单" value="0"></el-option>
              <el-option label="APP订单" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
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
        <el-table-column label="订单编号" width="170" align="center">
          <template slot-scope="scope">
            {{ scope.row.order_sn }}
          </template>
        </el-table-column>
        <el-table-column label="提交时间" width="180" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.create_time }}</span>
          </template>
        </el-table-column>
        <el-table-column label="用户账号" width="90" align="center">
          <template slot-scope="scope">
            {{ scope.row.member_username }}
          </template>
        </el-table-column>
        <el-table-column label="订单金额" width="100" align="center">
          <template slot-scope="scope">
            ￥{{ scope.row.total_amount }}
          </template>
        </el-table-column>
        <el-table-column label="支付方式" width="100" align="center">
          <template slot-scope="scope">
            {{ scope.row.pay_type | formatPayType }}
          </template>
        </el-table-column>
        <el-table-column label="订单来源" width="100" align="center">
          <template slot-scope="scope">
            {{ scope.row.source_type | formatSourceType }}
          </template>
        </el-table-column>
        <el-table-column label="订单状态" width="100" align="center">
          <template slot-scope="scope">
            {{ scope.row.status | formatStatus }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="210" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleViewOrder(scope.row.id, scope.row)"
              >查看订单</el-button
            >
            <!-- <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.id, scope.row)"
            >
              {{ scope.row.status | formatStatus2 }}
            </el-button> -->
            <el-button
              size="mini"
              @click="handleDeleteOrder(scope.$index, scope.row)"
              v-show="scope.row.status === 0"
              >关闭订单</el-button
            >
            <el-button
              size="mini"
              @click="handleDeliveryOrder(scope.$index, scope.row)"
              v-show="scope.row.status === 1"
              >订单发货</el-button
            >
            <el-button
              size="mini"
              @click="dialogVisible = true"
              v-show="scope.row.status === 2 || scope.row.status === 3"
              >订单跟踪</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDeleteOrder(scope.$index, scope.row)"
              v-show="scope.row.status === 4"
              >删除订单</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="fetchData"
      />
    </el-card>
    <el-dialog
      title="订单跟踪"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div style="height: 350px">
        <el-steps direction="vertical" :active="6" finish-status="success">
          <el-step
            title="订单已提交，等待付款"
            description="2017-04-01 12:00:00"
          ></el-step>
          <el-step
            title="订单付款成功"
            description="2017-04-01 12:00:00"
          ></el-step>
          <el-step
            title="在北京进行下级地点扫描，等待付款"
            description="2017-04-01 12:00:00"
          ></el-step>
          <el-step
            title="在分拨中心广东深圳公司进行卸车扫描"
            description="2017-04-01 12:00:00"
          ></el-step>
          <el-step
            title="在广东深圳公司进行发出扫描"
            description="2017-04-01 12:00:00"
          ></el-step>
          <el-step
            title="到达目的地网点，快件将很快进行派送"
            description="2017-04-01 12:00:00"
          ></el-step>
          <el-step
            title="订单已签收，期待再次为您服务"
            description="2017-04-01 12:00:00"
          ></el-step>
        </el-steps>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getOrderList,deleteOrderList } from "@/api/orderlist";
import Pagination from "@/components/Pagination";
export default {
  data() {
    return {
      listLoading: true,
      list: [],
      listQuery: {
        page: 1,
        limit: 5,
      },
      total: 0,
      form: {
        id: "",
        name: "",
        date1: "",
        status: "",
        class: "",
        source: "",
      },
      dialogVisible: false,
    };
  },
  created() {
    this.fetchData();
  },
  filters: {
    formatPayType(value) {
      if (value === 1) {
        return "支付宝";
      } else if (value === 2) {
        return "微信";
      } else {
        return "未支付";
      }
    },
    formatSourceType(value) {
      if (value == 0) {
        return "PC订单";
      } else {
        return "APP订单";
      }
    },
    formatStatus(value) {
      if (value === 1) {
        return "待发货";
      } else if (value === 2) {
        return "已发货";
      } else if (value === 3) {
        return "已完成";
      } else if (value === 4) {
        return "已关闭";
      } else if (value === 5) {
        return "无效订单";
      } else {
        return "待付款";
      }
    },
  },
  methods: {
    async fetchData() {
      this.listLoading = true;
      let result = await getOrderList(this.listQuery);
      this.list = result.data.items;
      this.total = result.data.total;
      console.log(this.list, this.listQuery);
      this.listLoading = false;
    },
    covertOrder(order) {
      let address =
        list.receiver_province +
        list.receiver_city +
        list.receiver_region +
        list.receiver_detail_address;
      let listItem = {
        orderId: list.id,
        orderSn: list.order_sn,
        receiverName: list.receiver_name,
        receiverPhone: list.receiver_phone,
        receiverPostCode: list.receiver_post_code,
        address: address,
        deliveryCompany: null,
        deliverySn: null,
      };
      return listItem;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    //存在问题================================================================================================
    handleResetSearch(formName) {
      this.$refs[formName].resetFields();
    },
    handleViewOrder(index, row) {
      this.$router.push({ path: "/order/orderdetail", query: { id: row.id } });
    },
    handleDeliveryOrder(index, row) {
      this.$router.push({
        path: "/order/deliverOrderLeave",
        query: { id: row.id },
      });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    handleDeleteOrder(index, item) {
   deleteOrderList({ id: item.id }).then(response => {
      this.fetchData();
   });
}
  },
  components: {
    Pagination,
  },
};
</script>

<style lang="less" scoped>
.order-list {
  margin: 20px;
  .el-card {
    margin-bottom: 20px;
  }
  .form-data {
    margin-left: 20px;
    .element.style {
      width: 140px;
    }
  }
}

</style>