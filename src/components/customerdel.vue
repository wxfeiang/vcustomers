<template>
<div class="dels container">
    <router-link class="btn btn-default" to="/"> 返回</router-link>
    <!-- 展示页面 -->
    <h1 class="page-header">
        {{customer.name}}

        <span class="pull-right ">
            <router-link class="btn btn-primary" v-bind:to="'/edit/'+ customer.id">编辑</router-link>
            <!-- <router-link class="btn btn-default" v-bind:to="'/customer/'+ customer.id">详情</router-link> -->

            <button class="btn btn-danger" v-on:click="delcustomer(customer.id)">删除</button>


        </span>
        </h1>
    <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-earphone"> {{customer.phone}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-envelope"> {{customer.email}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-zoom-in"> {{customer.education}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-asterisk"> {{customer.graduationschool}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-heart"> {{customer.profession}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-print"> {{customer.profile}}</span></li>
       
    </ul>
  
</div>
    
</template>
<script>
export default {
  name: "dels",
  data() {
    return {
      customer: []
    };
  },
  methods: {
    fetchCustomers(id) {
      this.$http
        .get("http://localhost:3000/users/" + id)
        .then(function(response) {
         // console.log(response);
          this.customer = response.body;
        });
    },
    delcustomer(id){
        //console.log(id);
        this.$http.delete("http://localhost:3000/users/" + id)
        .then(function(response){

            // 删除 跳转到 主页
          this.$router.push({path:"/",query:{alert:"用户信息删除成功!"}})

        })

    }
  },
  created() {
    this.fetchCustomers(this.$route.params.id);
  }
};
</script>
