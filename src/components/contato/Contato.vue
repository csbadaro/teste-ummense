<template>
  <main class="contato">
    <FaleConosco/>
  </main>
</template>

<script>
import FaleConosco from './FaleConosco.vue'

export default {
// Experimentando *___*
  name: 'Contato',

  data () {
    return {
      var: 'contato vars aqui'
    }
  },

  components: {
    FaleConosco
  }
}
</script>
