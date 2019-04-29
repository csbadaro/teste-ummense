<template>
  <footer>
    <div class="footer-top">
      <div class="container">
          <h2 class="g-bold">{{title}}</h2>
          <p>{{txt}}</p>
          <form>
            <div>
              <label class="g-medium">Nome</label>
              <input id="name" type="text" placeholder="Seu primeiro nome">
            </div>
            <div>
              <label class="g-medium">E-mail</label>
              <input id="email" type="text" placeholder="Insira seu melhor e-mail">
            </div>
            <button class="g-medium" type="submit">Quero ser avisado</button>
          </form>
      </div>
    </div>
    <div class="footer-bot">
      <div class="container">
          <div class="scopo">Uma empresa do grupo</div>
          <div class="scopo">Uma empresa do grupo</div>
      </div>
    </div>
  </footer>
</template>

<script>
// Experimentando *___*
export default {
  name: 'Footer',
  data () {
    return {
      title: 'Seja um dos primeiros',
      txt: 'A plataforma Ummense está em fase de testes e em algumas semanas você poderá aproveitar os benefícios da Ummense para impulsionar sua organização! Deixe aqui seu e-mail para avisarmos você.'
    }
  }
}
</script>

<style scoped>
  .footer-top{
    background-color: #364E62;
    color: #FFFFFF;
  }
  .footer-top .container{
    max-width: 842px;
    padding-top: 90px;
    padding-bottom: 60px;
  }
  .footer-top h2{
    font-size: 35px;
    font-weight: 400;
    margin-bottom: 16px
  }
  .footer-top p{
    line-height: 26px;
    margin-bottom: 26px;
  }
  .footer-top form{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
  }
  .footer-top form > div{
    width: 100%;
    width: 36%;
    margin-bottom: 16px;
    margin-right: 16px;
  }
  .footer-top form label{
    display: inline-block;
    margin-bottom: 6px;
  }
  .footer-top form input{
    display: block;
    width: 100%;
    color: #253142;
    background-color: #fff;
    padding: 0 16px;
    height: 60px;
    border: none;
    border-radius: 4px;
    border: 1px solid #707070;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: inherit;
  }
  .footer-top button{
    height: 60px;
    margin-bottom: 16px;
    padding: 0 28px;
    font-size: 16px;
    font-weight: 400;
    border-radius: 4px;
    background-color: #8BBD4F;
    color: white;
    border: 1px solid #707070;
    box-sizing: border-box;
  }
   @media (max-width: 768px){
    .footer-top form > div{
      width: 100%;
    }
  }

  .footer-bot .container{
    padding: 6px 0;
  }
  .footer-bot .scopo{
    
  }
</style>
