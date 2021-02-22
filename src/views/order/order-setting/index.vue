<template>
  <div class="set" style="border: 1px solid rgb(240, 245, 255); width: 60%">
    <el-form ref="orderSettingForm" :model="list" label-width="150px">
      <el-form-item label="秒杀订单超过：">
        <el-col :span="11">
          <el-input class="input-width" v-model="list.flash_order_overtime">
            <template slot="append">分</template>
          </el-input>
        </el-col>
        <span class="note-margin">未付款，订单自动关闭</span>
      </el-form-item>
      <el-form-item label="正常订单超过：">
        <el-col :span="11">
          <el-input class="input-width" v-model="list.normal_order_overtime">
            <template slot="append">分</template>
          </el-input>
        </el-col>
        <span class="note-margin">未付款，订单自动关闭</span>
      </el-form-item>
      <el-form-item label="发货超过：">
        <el-col :span="11">
          <el-input class="input-width" v-model="list.confirm_overtime">
            <template slot="append">天</template>
          </el-input>
        </el-col>
        <span class="note-margin">未收货，订单自动完成</span>
      </el-form-item>
      <el-form-item label="订单完成超过：">
        <el-col :span="11">
          <el-input class="input-width" v-model="list.comment_overtime">
            <template slot="append">天</template>
          </el-input>
        </el-col>
        <span class="note-margin">自动结束交易，不能申请售后</span>
      </el-form-item>
      <el-form-item label="订单完成超过：">
        <el-col :span="11">
          <el-input class="input-width" v-model="list.finish_overtime">
            <template slot="append">天</template>
          </el-input>
        </el-col>
        <span class="note-margin">自动五星好评</span>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="confirm('orderSettingForm')"
          type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { getOrderSet,updateOrderSet } from "@/api/orderset";
export default {
  data() {
    return {
        id:'',
      list: {},
    };
  },
  created() {
      this.fetchData()
  },
  methods: {
    fetchData() {
      getOrderSet().then((response) => {
        this.list = response.data.items[0];
        this.id=this.list.id
      });
    },
    confirm(formName){
        this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const result = await updateOrderSet(this.list);
          this.$router.push("/order/formsetting");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
};
</script>
<style lang="less" scoped>
.set {
  height: 450px;
  margin: 30px auto;
  border-radius: 8px;
  background-color: rgb(245, 252, 255);
  box-shadow: 5px 5px rgb(231, 239, 245);
  padding: 60px;
  .note-margin {
    margin-left: 15px;
  }
}
</style>