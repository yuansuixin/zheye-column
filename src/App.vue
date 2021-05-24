<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>

    <router-view></router-view>

    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020 者也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'

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
    GlobalHeader
  },
  setup() {
    return {
      list: testData,
      currentUser
    }
  }
})
</script>
<style></style>
