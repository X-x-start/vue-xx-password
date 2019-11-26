<template>
  <div class="fet-password" @click="onClickWrap">
    <ul class="input-list">
      <li v-bind:class="{ active: i <= strVal.length }" v-for="i in 6" class="input-box">
      </li>
      <li class="input-core-wrap">
        <input v-model="val" ref="inputCore" autoFocus='autoFocus' class="input-core" maxlength="6" type="tel"
               pattern="[0-9]" @input='change'>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'Password',
    props: ['value', 'on-submit', 'on-change','isClear'],
    data() {
      return {
        val: [],
        strVal: ''
      }
    },
    created() {
      let self = this
      self.strVal = self.value + ''
      self.val = self.value
    },
    methods: {
      reset() {
        this.val = ''
        this.strVal = ''
      },
      onClickWrap() {
        this.$refs['inputCore'].focus()
      },
      change(e){
        // console.log(e.target.value)
        this.$emit('on-change',e.target.value)
      }
    },
    watch: {
      val: function (val, oldVal) {
        let self = this
        if (oldVal + '' === 6) {
          self.strVal = oldVal
          self.val = oldVal
          return
        }
        if ((val + '').length <= 6) {
          self.strVal = val + ''
          self.val = val
          if ((val + '').length === 6) {
            self.$refs['inputCore'].blur()
            self.$emit('on-submit', val)
            !self['isClear'] && self.reset()
          }
        } else {
          self.strVal = oldVal + ''
          self.val = oldVal
        }
      },
      value: function (val, oldVal) {
        let self = this
        self.$nextTick(function () {
          self.strVal = val + ''
          self.val = val
        })
      }
    }
  }
</script>

<style lang="css">
  .fet-password {
    width: 100%;
    height: 50px;
    text-align: center;
  }

  .fet-password * {
    transition: .28s;
  }

  .fet-password .input-list {
    display: inline-block;
    width: 300px;
    position: relative;
    height: 50px;
    box-sizing: content-box;
    padding: 0 !important;
  }

  .fet-password .input-box {
    display: inline-block;
    background: #fff;
    width: 50px;
    height: 50px;
    border-right: 1px solid #ddd;
    border-top:1px solid #ddd;
    border-bottom: 1px solid #ddd;
    position: relative;
    box-sizing: border-box;
  }

  .fet-password .input-box:first-child {
    border-left: 1px solid #ddd;
  }

  .fet-password .input-box.active {
    border-right: 1px solid black !important;
    border-top: 1px solid  black !important;
    border-bottom: 1px solid black !important;
  }

  .fet-password .input-box.active:after {
    content: ' ';
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    z-index: 10;
    background: black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
  }

  .fet-password .input-box:first-child.active {
    border-left: 1px solid black !important;
  }

  .fet-password .input-core-wrap {
    position: absolute;
    display: block;
    left: -300%;
    top: 0;
    width: 100%;
    height: 50px;
    z-index: 99;
  }

  .fet-password .input-core {
    width: 100%;
    height: 50px;
    background: transparent;
    color: transparent;
    border: none;
    outline: none;
    caret-color: transparent;
    opacity: 0;
  }
</style>
