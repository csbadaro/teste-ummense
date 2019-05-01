<template>
  <section class="container">
      <div class="footer_bot_corp">
        <span>Uma empresa do grupo</span>
        <img src="/static/img/footer/logo-scopo.png">
      </div>
      <Social/>
  </section>
</template>

<script>
import Social from '@/components/social/Social.vue'

export default {
  name: 'Rodape',

  components: {
    Social
  }
}
</script>

<style scoped>
  .container{
    padding: 23px 0; /* 36px 0; */
    display: flex;
    align-items: center;
    justify-content: space-between; /* floate left + float right */
  }
  .footer_bot_corp span{
    font-family: Gilroy-Medium;
    color: #707070;
  }
  .footer_bot_corp img{
    margin-left: 15px;
  }

  @media (max-width: 768px){
    .container{
      flex-direction: column;
      text-align: center;
    }
    .footer_bot_corp{
      margin-bottom: 30px;
    }
  }
</style>
