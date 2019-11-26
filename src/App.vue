<template>
  <div id="app">
    <Password ref="pwdRef" @on-submit="onSubmit" :isClear='true' @on-change="onChange"/>
  </div>
</template>

<script>
  import Password from './components/index'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Password
  },
  methods:{
    onSubmit(){
      console.log(1111)
    },
    onChange(e){
      console.log('change',e)
    }
  }
}
</script>

<style>

</style>
