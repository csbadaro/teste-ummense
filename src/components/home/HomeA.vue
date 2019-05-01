<template>
  <section class="container">
    <h1>
      <span>Gestão de <strong>projetos</strong>.</span>
      <span> Simples, ágil e inteligente.</span>
    </h1>
    <p>Destrave o melhor da sua equipe</p>
    <img src="/static/img/home/gestao-de-projetos.png">
  </section>
</template>

<script>
export default {
  name: 'Gestão'
}
</script>

<style scoped>
.container{
  padding: 80px 0 0;
  display: flex;
  flex-flow: column;
  align-items: center;
}
h1{
  font-size: 50px;
  font-family: Gilroy-Bold;
  color: #404F61;
  font-weight: 400;
  text-align: center;
}
h1 span{
  display: block;
}
strong{
  color: #8bbd4f;
  font-weight: 400;
}
p{
  font-size: 20px;
  font-family: Gilroy-Medium;
  color: #707070;
  margin: 20px 0 62px; /* 20px 0 70px; */
}
h2{
  font-size: 50px;
  font-family: Gilroy-Bold;
  font-weight: 400;
  max-width: 355px;
  /* max-width: 200px; */
  text-align: center;
  /* display: flex; */
  /* flex-flow: column; */
}
img{
  max-width: 100%;
}
</style>
