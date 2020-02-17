<script>
import Header from './components/Header.vue';


export default {
  name: 'app',
  components: {
    Header
  },
  watch: {
    '$route' (to, from) {
      document.title = to.meta.title || 'K-Festival 2019'
    }
  },
}
</script>

<template>
  <div id="app" class="k-festival-wrap">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />

    <div class="container main clearfix" style="overflow: hidden;">
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="home">
                <router-view></router-view>
            </div>
        </div>		
    </div>
  </div>
</template>

<style lang="scss">
  @import "./styles/style.scss";
</style>