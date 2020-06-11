<template>
  <div>
    <mt-header title="学习"></mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
  <mt-tab-item id="tab1">
    <img slot="icon" src="">
    tab1
  </mt-tab-item>
  <mt-tab-item id="tab2">
    <img slot="icon" src="">
    tab2
  </mt-tab-item>
  <mt-tab-item id="tab3">
    <img slot="icon" src="">
    tab3
  </mt-tab-item>
  <mt-tab-item id="tab4">
    <img slot="icon" src="">
    tab4
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      selected:''
    }
  }
}
</script>

<style>

</style>
