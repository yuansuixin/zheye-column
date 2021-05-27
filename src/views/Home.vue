<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import ColumnList from '../components/ColumnList.vue'
import { GlobalDataProps } from '../store'

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup() {
    const store = useStore<GlobalDataProps>()

    onMounted(() => {
      store.dispatch('fetchColumns')
    })

    const list = computed(() => store.state.columns)
    const biggerColumnLen = computed(() => store.getters.biggerColumnLen)
    return {
      list,
      biggerColumnLen
    }
  }
})
</script>
