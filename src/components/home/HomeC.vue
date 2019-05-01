<template>
  <section>
    <div class="container">
        <h2><span>Mais tempo</span> para o que realmente importa</h2>
        <p>Por mais importante que você pareça, não é legal ser o gestor extremamente ocupado, centralizador, correndo de um lado para o outro, estressado, esquecendo compromissos e informações importantes. Você acaba sem tempo para pensar estrategicamente sobre a empresa, sobre sua visão de futuro e em novas oportunidades de negócios. E aquilo que é o mais importante, mas não é urgente, é deixado de lado, como sua família, seus sonhos, sua saúde e seu propósito de vida.</p>
        <span>Assuma o controle. Elimine o urgente e viva aquilo que realmente importa.</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Tempo'
}
</script>

<style scoped>
  section{
      background-color: #3C9DD5;
  }
  .container{
    padding: 80px 0;
    text-align: center;
    color: white;
  }
  h2{
    font-family: Gilroy-Medium;
    font-weight: 400;
    font-size: 35px;
  }
  h2 span{
    font-family: Gilroy-Bold;
    font-weight: 400;
  }
  p{
    line-height: 26px;
    margin: 24px auto 38px;
    max-width: 920px;
    /* max-width: 58rem; */
  }
</style>
