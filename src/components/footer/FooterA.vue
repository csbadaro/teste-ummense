<template>
    <section>
        <div class="container">
            <h2><span>Seja um</span> dos primeiros</h2>
            <p>A plataforma Ummense está em fase de testes e em algumas semanas você poderá aproveitar os benefícios da Ummense para impulsionar sua organização! Deixe aqui seu e-mail para avisarmos você.</p>
            <form>
                <div>
                    <label>Nome</label>
                    <input type="text" placeholder="Seu primeiro nome">
                </div>
                <div>
                    <label>E-mail</label>
                    <input type="email" placeholder="Insira seu melhor e-mail">
                </div>
                <button type="submit">Quero ser avisado</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Registro',

  data () {
    return {
      var: 'vars para registro'
    }
  }
}
</script>

<style scoped>
  section{
    background-color: #364E62;
    color: #FFFFFF;
  }
  .container{
    max-width: 842px;
    padding: 80px 0 64px; /* 60px 0; */
  }
  h2{
    /* font-family: Gilroy-Bold; */
    font-family: Gilroy-Medium;
    font-weight: 400;
    font-size: 35px;
    margin: 0 0 24px;
  }
  h2 span{
    font-family: Gilroy-Bold;
  }
  p{
    line-height: 26px;
    margin-bottom: 26px;
  }
  form{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
  }
  form > div{
    /* width: 100%; */
    width: 36%;
    margin-bottom: 16px;
    margin-right: 16px;
  }
  form label{
    font-family: Gilroy-Medium;
    display: inline-block;
    margin-bottom: 6px;
  }
  form input{
    height: 60px;
    /* border: 1px solid #707070; */
  }
  form button{
    background-color: #8bbd4f;
    color: white;
    font-family: Gilroy-Medium;
    height: 60px;
    margin-bottom: 16px;
  }

  @media (max-width: 768px){
    form > div{
      width: 100%;
    }
  }
</style>
