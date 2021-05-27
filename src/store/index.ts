import { createStore } from 'vuex'
import axios from 'axios'
/* eslint-disable */
export interface ResponseType<P = {}> {
  code: number;
  msg: string;
  data: P;
}
export interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string;
  fitUrl?: string;
}
export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
}
export interface PostProps {
  _id?: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: ImageProps | string;
  createdAt?: string;
  column: string;
  author?: string | UserProps;
  isHTML?: boolean;
}
export interface UserProps {
  isLogin: boolean;
  nickName?: string;
  _id?: string;
  column?: string;
  columnId?: number
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps
}

/* eslint-disable */
export default createStore<GlobalDataProps>({
  state: {
    columns: [],
    posts: [],
    user: { isLogin: false, nickName: 'muqing', columnId: 1, column: 'fda' }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, nickName: 'muqing' }
    },
    createPost(state, newPost) {
      state.posts.push(newPost)
    },
    fetchColumns(state, rawData) {
      state.columns = rawData.data.list
    },
  },
  getters: {
    // getColumns: (state) => {
    //   return objToArr(state.columns.data)
    // },
    // biggerColumnsLen(state) {
    //   return state.columns.filter(c => c._id > 2).length
    // },
    // getColumnById: (state) => (id: string) => {
    //   return state.columns.data[id]
    // },
    // getPostsByCid: (state) => (cid: string) => {
    //   return objToArr(state.posts.data).filter(post => post.column === cid)
    // },
  },
  actions: {
    fetchColumns(context) {
      axios.get('/column').then(resp => {
        context.commit('fetchColumns', resp.data)
      })
    },
    fetchColumn({ commit }, cid) {
      axios.get(`/column/${cid}`).then(resp => {
        commit('fetchColumn', resp.data)
      })
    }
  },
  modules: {
  }
})
