# vue-xx-password

> A Vue conponent for password


1、how to install

npm i vue-xx-password -S


2、how to use

在组件中import Password from 'vue-xx-password'

<Password ref="pwdRef" @on-submit="onSubmit" :isClear='true' @on-change="onChange"/>

on-submit 为输入完后触发的方法

on-change 输入过程中触发的方法 带参数为输入的值

isClear 输入true or false  true为输入完后不清除输入框 false 输入完其清空
