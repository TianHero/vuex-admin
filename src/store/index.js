import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false,
    tagLists: []
  },
  getters: {
    isCollapse: state => {
      return state.isCollapse
    },
    // 标签列表
    tagLists: state => state.tagLists
  },
  mutations: {
    collapseChange: state => {
      state.isCollapse = !state.isCollapse
    },
    // 打开标签，插入标签列表
    tagListsPush: (state, item) => {
      state.tagLists.push(item)
    },
    // 关闭标签，从标签列表中删除
    tagListsRemove: (state, item) => {
      state.tagLists.splice(item, 1)
    },
    // 关闭所有
    tagListsClear: state => {
      state.tagLists = []
    },
    // 关闭其他
    tagListsClearOther: (state, curItem) => {
      state.tagLists = curItem
    }
  },
  actions: {

  }
})