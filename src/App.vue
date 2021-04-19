<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>

    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <validate-input
          :rules="emailRules"
          v-model="emailVal"
          type="text"
          placeholder="请输入邮箱地址"
        ></validate-input>
        <div class="form-t ext" v-if="emailRef.error">
          {{ emailRef.message }}
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">密码</label>
        <validate-input
          :rules="passwdRules"
          v-model="passwdVal"
          type="password"
          placeholder="请输入密码"
        ></validate-input>
        <div class="form-t ext" v-if="passwdRef.error">
          {{ passwdRef.message }}
        </div>
      </div>
      <template #submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
import ValidateForm from './components/ValidateForm.vue'

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1专栏',
    description: '这是test1的专栏',
    avatar:
      '//cdn.micoworld.net/web/activity/20210314/assets/images/rank-active.png'
  },
  {
    id: 2,
    title: 'test2专栏',
    description: '这是test2的专栏',
    avatar:
      '//cdn.micoworld.net/web/activity/20210314/assets/images/rank-active.png'
  },
  {
    id: 2,
    title: 'test2专栏',
    description: '这是test2的专栏',
    avatar:
      '//cdn.micoworld.net/web/activity/20210314/assets/images/rank-active.png'
  },
  {
    id: 2,
    title: 'test2专栏',
    description: '这是test2的专栏',
    avatar:
      '//cdn.micoworld.net/web/activity/20210314/assets/images/rank-active.png'
  }
]
const currentUser: UserProps = {
  isLogin: true,
  name: 'muqing',
  id: 6
}
export default defineComponent({
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm
  },
  setup() {
    const emailVal = ref('muqing')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的的电子邮箱格式' }
    ]

    const passwdVal = ref('')
    const passwdRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]

    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const passwdRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'can not be empty'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = 'can be valid email'
      }
    }

    const onFormSubmit = (result: boolean) => {
      console.log('fdads', result)
    }

    return {
      list: testData,
      currentUser,
      emailRef,
      validateEmail,
      emailRules,
      emailVal,
      onFormSubmit,
      passwdRef,
      passwdVal,
      passwdRules
    }
  }
})
</script>
<style></style>
