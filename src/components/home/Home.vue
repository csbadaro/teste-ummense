<template>
  <section class="home">
    <HomeA/>
    <HomeB/>
  </section>
</template>

<script>
import HomeA from './HomeA.vue'
import HomeB from './HomeB.vue'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Gestão de projetos. Simples, ágil e inteligente.'
    }
  },

  components: {
    HomeA,
    HomeB
  }
}
</script>
