import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps } from '../testData'

export interface UserProps {
  isLogin: boolean;
  nickName?: string;
  _id?: string;
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps
}

export default createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, nickName: 'muqing' }
    }
  },
  actions: {
  },
  modules: {
  }
})
