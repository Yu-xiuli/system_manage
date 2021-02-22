<template>
   
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>发货列表</span>
    </el-card>
    <div>
      <el-form ref="orderItemTable" :model="info" label-width="80px">
        <el-form-item label="订单编号">
          <el-input v-model="info.order_sn" ></el-input>
        </el-form-item>
        <el-form-item label="收货人">
          <el-input v-model="info.receiver_name"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="info.receiver_phone"></el-input>
        </el-form-item>
        <el-form-item label="邮政编码">
          <el-input v-model="info.receiver_post_code"></el-input>
        </el-form-item>
        <el-form-item label="收货地址">
          <el-input v-model="info.receiver_province"
            >{{ info.receiver_city }}{{ info.receiver_region
            }}{{ info.receiver_detail_address }}</el-input
          >
        </el-form-item>
        <el-form-item label="配送方式">
          <el-select v-model="info.delivery_company" placeholder="">
            <!-- "顺丰快递", "圆通快递", "中通快递", "韵达快递" -->
            <el-option label="顺丰快递" value="顺丰快递"></el-option>
            <el-option label="圆通快递" value="圆通快递"></el-option>
            <el-option label="中通快递" value="中通快递"></el-option>
            <el-option label="韵达快递" value="韵达快递"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物流单号">
          <el-input v-model="info.delivery_sn"></el-input>
        </el-form-item>
      </el-form>
      <div style="margin-top: 15px; text-align: center">
        <el-button @click="cancel">取消</el-button>
        <el-button @click="confirm('orderItemTable')" type="primary"
          >确定</el-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { getOrderLeave, updateOrderLeave } from "@/api/orderlist";

export default {
  data() {
    return {
      id: "",
      info: {},
    };
  },
  created() {
    this.id = this.info = this.$route.query.id;
    console.log(this.id);
    this.fetchData(this.id);
  },
  methods: {
    async fetchData(id) {
      let result = await getOrderLeave({ id: id });
      console.log(result, "ppppppp");
      this.info = result.data.items;
      console.log(this.info, "ttttttt");
    },
    cancel() {
      this.$router.back();
    },
    confirm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const result = await updateOrderLeave(this.info);
          console.log(result,'lllllllllll')
          this.$router.push("/order/list");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
</style>