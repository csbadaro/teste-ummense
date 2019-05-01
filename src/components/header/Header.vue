<template>
  <header>
    <div class="header_top">
      <div class="container">
          <ul class="header_top_menu">
            <li>
              <router-link :to="'/contato'">Contato</router-link>
            </li>
          </ul>
          <Social/>
      </div>
    </div>
    <div class="header_bot">
      <div class="container">
         <router-link :to="'/'"><img src="/static/img/header/logo-ummense.png"></router-link>
      </div>
    </div>
  </header>
</template>

<script>
import Social from '@/components/social/Social.vue' // import Social from './social/Social.vue'

export default {
  name: 'Header',

  data () {
    return {
      var: 'header vars aqui'
    }
  },

  components: {
    Social
  }
}
</script>

<style scoped>
  .header_top, .header_bot{
    background-color: #FBFCFD;
    border-bottom: 1px solid #E7EAEF;
  }

  .header_top .container{
    display: flex;
    justify-content: flex-end;
    padding: 6px 0;
  }
  .header_top_menu{ /* header_top ul */
    display: flex;
    align-items: center;
  }
  .header_top_menu a{
    font-family: Gilroy-Medium;
    color: #707070;
    padding: 0 20px;
  }

  .header_bot .container{
    padding: 21px 0;
  }

  @media (max-width: 768px){
    .header_bot .container{
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
</style>
