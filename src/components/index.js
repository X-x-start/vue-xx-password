import Password from './password'
import _Vue from 'vue'

Password.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(Password.name, Password)
}
export default Password;
