<template>
  <div class="detail-container">
    <div class="step">
      <el-steps
        :active="formatStepStatus(list.status)"
        finish-status="success"
        align-center
      >
        <el-step
          title="提交订单"
          :description="formatTime(list.create_time)"
        ></el-step>
        <el-step
          title="支付订单"
          :description="formatTime(list.payment_time)"
        ></el-step>
        <el-step
          title="平台发货"
          :description="formatTime(list.delivery_time)"
        ></el-step>
        <el-step
          title="确认收货"
          :description="formatTime(list.receive_time)"
        ></el-step>
        <el-step
          title="完成评价"
          :description="formatTime(list.comment_time)"
        ></el-step>
      </el-steps>
    </div>
    <div style="margin: 0 50px">
      <el-card class="box-card" align-center>
        <div slot="header" class="clearfix">
          <i class="el-icon-warning color-danger" style="color: red"></i>
          <span class="color-danger" style="color: red"
            >当前订单状态：{{ list.status | formatStatus }}</span
          >
          <div class="operate-button-container" v-show="list.status === 0">
            <el-button size="mini">修改收货人信息</el-button>
            <el-button size="mini">修改商品信息</el-button>
            <el-button size="mini">修改费用信息</el-button>
            <el-button size="mini">发送站内信</el-button>
            <el-button size="mini">关闭订单</el-button>
            <el-button size="mini">备注订单</el-button>
          </div>
          <div class="operate-button-container" v-show="list.status === 1">
            <el-button size="mini">修改收货人信息</el-button>
            <el-button size="mini">发送站内信</el-button>
            <el-button size="mini">取消订单</el-button>
            <el-button size="mini">备注订单</el-button>
          </div>
          <div
            class="operate-button-container"
            v-show="list.status === 2 || list.status === 3"
          >
            <el-button size="mini">订单跟踪</el-button>
            <el-button size="mini">发送站内信</el-button>
            <el-button size="mini">备注订单</el-button>
          </div>
          <div class="operate-button-container" v-show="list.status === 4">
            <el-button size="mini">删除订单</el-button>
            <el-button size="mini">备注订单</el-button>
          </div>
        </div>
        <div>
          <i class="el-icon-edit-outline"></i>
          <span class="font-small">基本信息</span>
        </div>
        <div class="table-layout">
          <el-row>
            <el-col :span="4" class="table-cell-title">订单编号</el-col>
            <el-col :span="4" class="table-cell-title">发货单流水号</el-col>
            <el-col :span="4" class="table-cell-title">用户账号</el-col>
            <el-col :span="4" class="table-cell-title">支付方式</el-col>
            <el-col :span="4" class="table-cell-title">订单来源</el-col>
            <el-col :span="4" class="table-cell-title">订单类型</el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="table-cell">{{ list.order_sn }}</el-col>
            <el-col :span="4" class="table-cell">暂无</el-col>
            <el-col :span="4" class="table-cell">{{
              list.member_username
            }}</el-col>
            <el-col :span="4" class="table-cell">{{
              list.pay_type | formatPaytype
            }}</el-col>
            <el-col :span="4" class="table-cell">{{
              list.source_type | formatSourcetype
            }}</el-col>
            <el-col :span="4" class="table-cell">{{
              list.order_type | formatOrdertype
            }}</el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="table-cell-title">配送方式</el-col>
            <el-col :span="4" class="table-cell-title">物流单号</el-col>
            <el-col :span="4" class="table-cell-title">自动确认收货时间</el-col>
            <el-col :span="4" class="table-cell-title">订单可得优币</el-col>
            <el-col :span="4" class="table-cell-title">订单可得成长值</el-col>
            <el-col :span="4" class="table-cell-title">活动信息</el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="table-cell">{{
              list.delivery_company | formatNull
            }}</el-col>
            <el-col :span="4" class="table-cell">{{
              list.delivery_sn | formatNull
            }}</el-col>
            <el-col :span="4" class="table-cell">{{
              list.auto_confirm_day | formatNum
            }}</el-col>
            <el-col :span="4" class="table-cell">{{
              list.integration | formatNum
            }}</el-col>
            <el-col :span="4" class="table-cell">{{
              list.growth | formatNum
            }}</el-col>
            <el-col :span="4" class="table-cell">{{
              list.promotion_info | formatText
            }}</el-col>
          </el-row>
        </div>
        <div style="margin-top: 20px">
          <i class="el-icon-edit-outline"></i>
          <span class="font-small">收货人信息</span>
        </div>
        <div class="table-layout">
          <el-row>
            <el-col :span="6" class="table-cell-title">收货人</el-col>
            <el-col :span="6" class="table-cell-title">手机号码</el-col>
            <el-col :span="6" class="table-cell-title">邮政编码</el-col>
            <el-col :span="6" class="table-cell-title">收货地址</el-col>
          </el-row>
          <el-row>
            <el-col :span="6" class="table-cell">{{
              list.receiver_name
            }}</el-col>
            <el-col :span="6" class="table-cell">{{
              list.receiver_phone
            }}</el-col>
            <el-col :span="6" class="table-cell">{{
              list.receiver_post_code
            }}</el-col>
            <el-col :span="6" class="table-cell"
              >{{ list.receiver_province }}{{ list.receiver_city
              }}{{ list.receiver_region
              }}{{ list.receiver_detail_address }}</el-col
            >
          </el-row>
        </div>
        <div style="margin-top: 20px">
          <i class="el-icon-edit-outline"></i>
          <span class="font-small">商品信息</span>
        </div>
        <el-table
          ref="orderItemTable"
          :data="list2"
          style="width: 100%; margin-top: 20px"
          border
        >
          <el-table-column label="商品图片" width="120" align="center">
            <template slot-scope="scope">
              <img :src="scope.row.product_pic" style="height: 80px" />
            </template>
          </el-table-column>
          <el-table-column label="商品名称" align="center">
            <template slot-scope="scope">
              <p>{{ scope.row.productName }}</p>
              <p>品牌：{{ scope.row.product_brand }}</p>
            </template>
          </el-table-column>
          <el-table-column label="价格/货号" width="120" align="center">
            <template slot-scope="scope">
              <p>价格：￥{{ scope.row.product_price }}</p>
              <p>货号：{{ scope.row.product_sn }}</p>
            </template>
          </el-table-column>
          <el-table-column label="属性" width="120" align="center">
            <template slot-scope="scope">
              {{ scope.row.product_attr }}
            </template>
          </el-table-column>
          <el-table-column label="数量" width="120" align="center">
            <template slot-scope="scope">
              {{ scope.row.product_quantity }}
            </template>
          </el-table-column>
          <el-table-column label="小计" width="120" align="center">
            <template slot-scope="scope">
              ￥{{ scope.row.product_price * scope.row.product_quantity }}
            </template>
          </el-table-column>
        </el-table>
        <div style="float: right; margin: 20px">
          合计：<span class="color-danger">￥{{list.total_amount}}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import { getOrderDetail } from "@/api/orderlist";
import { getProductDetail } from "@/api/orderdetail";
export default {
  data() {
    return {
      id: "",
      list: {},
      list2: [],
    };
  },
  created() {
    this.id = this.list = this.$route.query.id;
    this.fetchData(this.id);
    this.fetchData2(this.id);
  },
  filters: {
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
    formatPaytype(value) {
      if (value === 0) {
        return "未支付";
      } else if (value === 1) {
        return "支付宝";
      } else if (value === 2) {
        return "微信";
      }
    },
    formatSourcetype(value) {
      if (value === 0) {
        return "PC订单";
      } else if (value === 1) {
        return "APP订单";
      }
    },
    formatOrdertype(value) {
      if (value === 0) {
        return "正常订单";
      } else if (value === 1) {
        return "秒杀订单";
      }
    },
    formatNull(value) {
      if (value === undefined || value === null || value === "") {
        return "暂无";
      } else {
        return value;
      }
    },
    formatText(value) {
      if (value === undefined || value === null || value === "") {
        return "暂无";
      } else if (value.length > 8) {
        return value.substr(0, 8) + "...";
      } else {
        return value;
      }
    },
    formatNum(time) {
      if (time == null || time === "") {
        return 0;
      } else {
        return time;
      }
    },
  },
  methods: {
    async fetchData(id) {
      let result = await getOrderDetail({ id: id });
      this.list = result.data.items;
      console.log(this.list);
    },
    async fetchData2(id) {
      let result2 = await getProductDetail({ id: id });
      this.list2 = result2.data.items;
      console.log(this.list2, "aaaaaaaa");
    },
    formatStepStatus(value) {
      if (value === 1) {
        //待发货
        return 2;
      } else if (value === 2) {
        //已发货
        return 3;
      } else if (value === 3) {
        //已完成
        return 4;
      } else {
        //待付款、已关闭、无限订单
        return 1;
      }
    },
    formatTime(time) {
      if (time == null || time === "") {
        return "";
      } else {
        return time;
      }
    },
  },
};
</script>
<style lang="less" scoped>
element.style {
  margin: 0;
}
.el-card_body {
  padding: 0;
}
.detail-container {
  width: 80%;
  margin: 20px auto;
  .el-card {
    border-radius: 4px;
    border: 1px solid #ebeef5;
    color: #303133;
    .el-card__header {
      padding: 0;
      .clearfix {
        line-height: 50px;
        .operate-button-container {
          display: inline-block;
          float: right;
          line-height: 60px;
          margin-right: 20px;
        }
      }
    }
    .table-layout {
      margin-top: 20px;
      border-left: 1px solid #dcdfe6;
      border-top: 1px solid #dcdfe6;
    }
    .table-cell {
      height: 60px;
      line-height: 40px;
      border-right: 1px solid #dcdfe6;
      border-bottom: 1px solid #dcdfe6;
      padding: 10px;
      font-size: 14px;
      color: #606266;
      text-align: center;
      overflow: hidden;
    }

    .table-cell-title {
      border-right: 1px solid #dcdfe6;
      border-bottom: 1px solid #dcdfe6;
      padding: 10px;
      background: #f2f6fc;
      text-align: center;
      font-size: 14px;
      color: #303133;
    }
  }
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>