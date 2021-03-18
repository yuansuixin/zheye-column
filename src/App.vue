<template>
  <div class="container ">
    <column-list :list="list"></column-list>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
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
  }
]
export default defineComponent({
  components: {
    ColumnList
  },
  setup() {
    return {
      list: testData
    }
  }
})
</script>
<style></style>
