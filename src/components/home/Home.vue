<template>
  <main class="home">
    <HomeA/>
    <HomeB/>
    <HomeC/>
    <HomeD/>
  </main>
</template>

<script>
import HomeA from './HomeA.vue'
import HomeB from './HomeB.vue'
import HomeC from './HomeC.vue'
import HomeD from './HomeD.vue'

export default {
  name: 'Home',

  data () {
    return {
      var: 'home vars aqui'
    }
  },

  components: {
    HomeA,
    HomeB,
    HomeC,
    HomeD
  }
}
</script>
