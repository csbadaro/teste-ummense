<template>
  <header>
    <div class="header_top">
      <div class="container">
          <ul class="header_top_menu">
            <li>
              <router-link :to="'/contato'" class="g-medium">Contato</router-link>
            </li>
          </ul>
          <ul class="header_top_social">
            <li class="social-item" v-for="img in imgs" :key="img.id">
              <a href="#"><img v-bind:src="'/static/img/social/'+img.name+'.png'" :alt="img.name" width="34" height="34"></a>
            </li>
          </ul>
      </div>
    </div>
    <div class="header_bot">
      <div class="container">
         <router-link :to="'/'"><img src="/static/img/logo/logo-ummense.png"></router-link>
      </div>
    </div>
  </header>
</template>

<script>
// Experimentando *___*
export default {
  name: 'Header',
  data () {
    return {
      imgs: [
        { name: 'linkedin' },
        { name: 'facebook' },
        { name: 'instagram' },
        { name: 'twitter' },
        { name: 'youtube' }
      ]
    }
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
  .header_top ul{
    display: flex;
    align-items: center;
  }
  .header_top_menu a{
    color: #707070;
    padding: 0 20px;
  }
  .header_top_social a{
    display: flex;
    margin-left: 8px;
  }

  .header_bot .container{
    padding: 19px 0;
  }
  @media (max-width: 768px){
    .header_bot .container{
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
</style>
