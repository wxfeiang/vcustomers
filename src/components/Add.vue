<template>
<div class="add container" >
<h1 class="page-header">添加用用户</h1>
<form v-on:submit="addCustomer">
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
    

<button type="submit" class="btn btn-primary">添加</button>
</form>
</div>
    
</template>
<script>
export default {
  name: "add",
  data() {
    return {
      customer: []
    };
  },
  methods: {
      addCustomer(e){
          //阻止默认事件
          e.preventDefault();
          // 验证表单
          if(!this.customer.name || !this.customer.phone  ){
              alert("请添加对应得信息")

          }else{
              // 定义数组
              var newCustomer ={
                name: this.customer.name,
                phone: this.customer.phone,
                email: this.customer.email,
                education: this.customer.education,
                graduationschool: this.customer.graduationschool,
                profession: this.customer.profession,
                profile: this.customer.profile
                

              }
              // post 到数据接口
              this.$http.post("http://localhost:3000/users",newCustomer)
              .then(function(response){
                 // console.log(response)
                 this.$router.push({path:"/"})
              })
                e.preventDefault();
          }

          
          

      }
  }
};
</script>
