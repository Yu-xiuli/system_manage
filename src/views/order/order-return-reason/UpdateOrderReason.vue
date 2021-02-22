<template>
  <div class="edit">
    <el-form ref="ruleform" :model="list" label-width="80px">
      <el-form-item label="原因类型">
        <el-col :span="15"><el-input v-model="list.name"></el-input></el-col>
      </el-form-item>
      <el-form-item label="排序">
        <el-col :span="15"><el-input v-model="list.sort"></el-input></el-col>
      </el-form-item>
      <el-form-item label="是否启用">
        <el-col :span="15"
          ><el-switch
            :inactive-value="0"
            :active-value="1"
            v-model="list.status"
          ></el-switch
        ></el-col>
      </el-form-item>
    </el-form>
    <div style="margin-top: 15px; text-align: center">
      <el-button @click="cancel">取消</el-button>
      <el-button @click="confirm('ruleform')" type="primary">确定</el-button>
    </div>
  </div>
</template>
<script>
import {
  UpdateOrderReason,
  editOrderReason,
} from "@/api/ordereason";
export default {
  data() {
    return {
      list: {},
      id: "",
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.fetchData(this.id);
  },
  methods: {
    async fetchData(id) {
      let result = await UpdateOrderReason({ id: id });
      this.list = result.data.items;
    },
    cancel() {
      this.$router.back();
    },
    confirm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          console.log(this.list);
          const result = await editOrderReason(this.list);
          this.$router.push("/order/reason");
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
.edit {
  width: 50%;
  height: 400px;
  border: 1px solid rgb(247, 252, 255);
  background-color: rgb(241, 249, 255);
  border-radius: 8px;
  margin: 20px auto;
  padding: 60px;
}
</style>