<template>
  <mt-swipe :auto="4000">
  <mt-swipe-item v-for="(msg,index) in msgs" :key="index">{{msg}}</mt-swipe-item>
</mt-swipe>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msgs: ['english','math']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-swipe {
  width: 100%;
  height:200px;
}
.mint-swipe img {
  width: 100%;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
