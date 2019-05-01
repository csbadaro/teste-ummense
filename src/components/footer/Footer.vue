<template>
  <footer>
    <FooterA/>
    <FooterB/>
  </footer>
</template>

<script>
import FooterA from './FooterA.vue'
import FooterB from './FooterB.vue'

export default {
  name: 'Footer',

  data () {
    return {
      vars: 'vars para usar no component *___*'
    }
  },

  components: {
    FooterA,
    FooterB
  }
}
</script>
