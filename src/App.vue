<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// Interessante *___*
import Header from '@/components//header/Header.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'App',

  data () {
    return {
      var: 'app vars aqui'
    }
  },

  components: {
    Header,
    Footer
  }
}
</script>

<style>
  @font-face {
    src: url("./assets/fonts/Gilroy-Regular.ttf") format("truetype");
    font-family: "Gilroy-Regular";
  }
  @font-face {
    src: url("./assets/fonts/Gilroy-Light.ttf") format("truetype");
    font-family: "Gilroy-Light";
  }
  @font-face {
    src: url("./assets/fonts/Gilroy-Medium.ttf") format("truetype");
    font-family: "Gilroy-Medium";
  }
  @font-face {
    src: url("./assets/fonts/Gilroy-Bold.ttf") format("truetype");
    font-family: "Gilroy-Bold";
  }
  body {
    /* font-family: Gilroy-Light; */
    font-family: Gilroy-Regular;
    font-size: 16px;
    color: #4c6173;
    /* line-height: 1;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent; */
  }
  * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      /* font-size: 100%;
      font: inherit;
      vertical-align: baseline; */
  }
  img {
    /* max-width: 100%; */
    vertical-align: middle;
  }
  a, button{
    text-decoration: none;
    cursor: pointer;
  }
  li{
    list-style: none;
  }
  .container {
    width: 90%;
    max-width: 1160px;
    padding: 0;
    margin: 0 auto;
  }
  input{
    display: block;
    width: 100%;
    color: #253142;
    background-color: #fff;
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    font-size: inherit;
    font-family: inherit;
  }
  input::placeholder{
    color: #B0B2B4;
    font-family: Gilroy-Medium;
  }
  button{
    font-size: inherit;
    font-family: inherit;
    padding: 10px 28px;
    border-radius: 4px;
  }
  textarea {
    overflow: auto;
    resize: vertical;
    display: block;
    width: 100% !important;
    min-height: 130px !important;
    border: 1px solid #E7EAEF;
    margin-bottom: 16px !important;
    color: #253142;
    background-color: #fff;
    padding: 10px 16px;
    border-radius: 4px;
    font-size: inherit;
    font-family: inherit;
  }
</style>
