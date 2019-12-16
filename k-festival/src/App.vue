<script>
import Header from './components/Header.vue';
import Event from './components/Events/Event.vue';
export default {
  name: 'app',
  components: {
    Header,
    Event
  }
}
</script>

<template>
  <div id="app" class="k-festival-wrap">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />

    <div class="container main clearfix" style="overflow: hidden;">
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="home">
                <Event/>
            </div>
        </div>		
    </div>
  </div>
</template>

<style lang="scss">
  @import "./styles/style.scss";
</style>