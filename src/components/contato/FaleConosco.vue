<template>
  <div class="container">
    <h1>
      <span>Fale </span>
      <strong>conosco</strong>
    </h1>
    <form>
      <input type="text" placeholder="Nome">
      <input type="text" placeholder="E-mail">
      <input type="text" placeholder="Telefone">
      <textarea rows="10" placeholder="Mensagem"></textarea>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FaleConosco',

  data () {
    return {
      form: 'Esta var será preenchida com os dados (nome, e-mail, telefone, msn) do form acima e enviada dinamicamente *___*'
    }
  }
}
</script>

<style scoped>
  .container{
    max-width: 570px;
    padding: 80px 0;
  }
  h1{
    font-family: Gilroy-medium;
    font-size: 35px;
    font-weight: 400;
    margin-bottom: 16px;
  }
  h1 strong{
    font-family: Gilroy-Bold;
    font-weight: 400;
  }
  form input{
      height: 60px;
      border: 1px solid #E7EAEF;
      margin-bottom: 16px;
  }
  form button{
    background-color: #8bbd4f;
    color: white;
    font-family: Gilroy-Medium;
    height: 60px;
  }
  form textarea{
    height: 154px;
  }
</style>
