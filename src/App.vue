<template>
  <div id="app">
    
    <div class="container">
       <app-Header></app-Header>
     </div>
      <div class="container">

      <router-view></router-view>
     </div>
  </div>
</template>

<script>

import customers from "./components/Customers";
import About from "./components/About";
import Headerl from "./components/Header";


export default {
  name: "App",
  components: {
    // customers,
    // About,
    "app-Header": Headerl,

  }
  
};
</script>

<style>

</style>
