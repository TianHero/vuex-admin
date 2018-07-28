<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="keepAlive">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
  </div>
</template>

<script>
import vHead from './Header.vue'
import vSidebar from './Sidebar.vue'
import vTags from './Tags.vue'

export default {

  components: {
    vHead, vSidebar, vTags
  },
  computed: {
    collapse() {
      return this.$store.getters.isCollapse
    },
    keepAlive() {
      let tagKeepAlive = []
      // vuex getters
      for (let i = 0; i < this.$store.state.tagLists.length; i++) {
        tagKeepAlive.push(this.$store.state.tagLists[i].name)
      }
      return tagKeepAlive
    }
  }
}
</script>

