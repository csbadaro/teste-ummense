<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

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
.g-regular{
  font-family: Gilroy-Regular;
}
.g-medium{
  font-family: Gilroy-Medium;
}
.g-bold{
  font-family: Gilroy-Bold;
}

body {
  font-family: Gilroy-Light;
  font-size: 16px;
  color: #4c6173!important;
  /* line-height: 1; */
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: transparent;
}
* {
    margin: 0;
    padding: 0;
    border: 0;
    /* font-size: 100%;
    font: inherit;
    vertical-align: baseline; */
}
a{
  text-decoration: none;
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
.flex{
  display: flex;
}
</style>
