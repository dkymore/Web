<template>
  <div>
    <headBarVue/>
    <transition name="fade">
      <router-view/>
    </transition>
    <footerBarVue/>
  </div>
</template>

<script>
import headBarVue from './components/headBar.vue'
import footerBarVue from './components/footerBar.vue'

export default {
  components:{
    headBarVue,
    footerBarVue
  }
}
</script>



<style lang="scss">
html {
  ::-webkit-scrollbar {
    width: 5px !important;
    height: 5px !important;
  }
  ::-webkit-scrollbar-corner,
  ::-webkit-scrollbar-track {
    background: transparent !important;
  }
  ::-webkit-resizer,
  ::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
  &,
  * {
    scrollbar-color: #aaa transparent;
    scrollbar-width: thin !important;
  }
}




body{
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
