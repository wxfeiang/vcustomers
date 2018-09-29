<template>
<div class="edit container" >
<Alert v-if="alert" v-bind:msg="alert"></Alert>
<h1 class="page-header">编辑用户</h1>
<form v-on:submit="editCustomer">
    <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
            <label for="">姓名</label>
            <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
            <label for="">电话</label>
            <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
            <label for="">邮箱 </label>
            <input type="text" class="form-control" placeholder="email" v-model="customer.email">
        </div>
        <div class="form-group">
            <label for="">学历</label>
            <input type="text" class="form-control" placeholder="education" v-model="customer.education">
        </div>
        <div class="form-group">
            <label for="">毕业学校</label>
            <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
        </div>
        <div class="form-group">
            <label for="">职业</label>
            <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
        </div>
        <div class="form-group">
            <label for="">个人简介</label>
            <textarea type="text" class="form-control" rows="10" placeholder="profile" v-model="customer.profile"></textarea>
        </div>



    </div>
    

<button type="submit" class="btn btn-primary">确认</button>
</form>
</div>
    
</template>
<script>
import Alert from './Alert'
export default {
  name: "edit",
  data() {
    return {
      customer: [],
      alert : ""
    };
  },
  components:{
      Alert
  },
  methods: {
    // 获取信息
    fetchCustomers(id) {
      this.$http
        .get("http://localhost:3000/users/" + id)
        .then(function(response) {
          
          // console.log(response);
          this.customer = response.body;
        });
    },

    // 编辑信息
    editCustomer(e) {
      //阻止默认事件
      e.preventDefault();
      // 验证表单
      if (!this.customer.name || !this.customer.phone) {
        this.alert="请添加对应的信息";
        return false;
      } else {
        // 定义数组
        var editCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          education: this.customer.education,
          graduationschool: this.customer.graduationschool,
          profession: this.customer.profession,
          profile: this.customer.profile
        };
        // put 到数据接口  对应的ID
        this.$http
          .put(
            "http://localhost:3000/users/" + this.$route.params.id,
            editCustomer
          )
          .then(function(response) {
            // console.log(response)
            this.$router.push({
              path: "/",
              query: { alert: "用户信息编辑成功!" }
            });
          });
        e.preventDefault();
      }
    }
  },
  // 进入页面 拿到ID
  created() {
    this.fetchCustomers(this.$route.params.id);
  }
};
</script>
