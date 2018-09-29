<template>
<div class="customers container">
    <Alert v-if="alert" v-bind:msg="alert"></Alert>
   <h1 class="page-header">用户管理系统</h1>
  <input type="text" class="form-control" placeholder="搜索" v-model="filterinput">
  <br>

   <table class="table table-striped">
       <thead>
           <tr>
               <th>姓名</th>
               <th>电话</th>
               <th>邮箱</th>
               <th></th>
           </tr>
       </thead>
       <tbody>
           <!--  触发方法  -->
           <tr v-for="customer in fitelby(customers,filterinput)" >
               <td>{{customer.name}}</td>
               <td>{{customer.phone}}</td>
               <td>{{customer.email}}</td>
               <!--  传 ID  -->
               <td><router-link class="btn btn-default" v-bind:to="'/customer/'+ customer.id">详情</router-link></td>
           </tr>
       </tbody>
   </table>

</div>
    
</template>
<script>
import Alert from './Alert'
    export default{
        name: "customers",
        data(){
            return{
                customers: [],
                alert: "",
                filterinput: ""
                

            }
        },
        components: {
            Alert
        },
        methods: {
            fetchCustomers(){
                this.$http.get("http://localhost:3000/users")
                    .then(function(response){
                       // console.log(response);
                        this.customers = response.body

                    })
                
            },
            fitelby(customers,value){
                // es6 数组便利
                return customers.filter(function(customer){
                    // 匹配 值 搜索
                     return customer.name.match(value);
                    //没有 便利整个
                })

            }
        },
        //  创建完成  调用
        created(){
            this.fetchCustomers();
            if(this.$route.query.alert){
                this.alert= this.$route.query.alert;
            }
        },
        // 完成
        updated(){
            this.fetchCustomers();
        }

    }
</script>
