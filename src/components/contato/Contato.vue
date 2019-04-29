<template>
  <section class="contato">
    <FaleConosco/>
  </section>
</template>

<script>
import FaleConosco from './FaleConosco.vue'

export default {
  name: 'Contato',

  data () {
    return {
      msg: 'PAGE CONTATO'
    }
  },

  components: {
    FaleConosco
  }
}
</script>
