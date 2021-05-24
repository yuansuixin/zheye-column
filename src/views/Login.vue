<template>
  <div class="login-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">登录到者也</h5>
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
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default defineComponent({
  components: {
    ValidateInput,
    ValidateForm
  },
  setup() {
    const router = useRouter()
    const store = useStore()

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
      if (result) {
        router.push('/')
        store.commit('login')
      }
    }

    return {
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
