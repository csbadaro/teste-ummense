<template>
  <section class="container">
    <h2>Um <span>novo conceito</span> em gestão de projetos</h2>
    <p>Da criação de um logotipo, até a construção de um edifício, da negociação de uma venda à logística da entrega, os projetos estão por toda parte, e precisam ser gerenciados de forma eficiente. Na Ummense, você não precisa ser expert em gestão para liderar uma equipe e alcançar os objetivos do projeto. Saiba instantaneamente o que cada um está fazendo e reúna todas as informações do projeto em um único lugar.</p>
    <ul>
      <li>
        <h3>Aumente a produtividade</h3>
        <p>Automatize facilmente tudo o que não precisa ser feito por humanos</p>
      </li>
      <li>
        <h3>Simplifique seu dia a dia</h3>
        <p>Acompanhe todos os projetos do fluxo em uma única tela</p>
      </li>
      <li>
        <h3>Organize e ative a colaboração</h3>
        <p>Seu time pode trabalhar junto com mais eficiência e sem perder nenhuma informação</p>
      </li>
      <li>
        <h3>Aprimore seu fluxo de trabalho </h3>
        <p>Ao enxergar todas as etapas dos seus processos você pode otimizar os fluxos constantemente</p>
      </li>
      <li>
        <h3>Alcance excelência operacional</h3>
        <p>Nenhuma etapa é negligenciada, sua empresa funciona perfeitamente.</p>
      </li>
      <li>
        <h3>Gerencie equipes de modo eficaz</h3>
        <p>Todos sabem o que precisam fazer e quando precisam entregar. E o gestor consegue acompanhar tudo</p>
      </li>
      <li>
        <h3>Entregue resultados confiáveis</h3>
        <p>Você saberá exatamente o que foi entregue para o cliente e qual é o resultado final dos projetos</p>
      </li>
      <li>
        <h3>Fidelize seus clientes</h3>
        <p>Seus clientes ficarão muito mais satisfeitos com uma comunicação organizada e entregas pontuais e de qualidade.</p>
      </li>
      <li>
        <h3>Mensure o desempenho </h3>
        <p>Com as estatísticas de projetos, equipes e colaboradores, você saberá exatamente o quanto sua organização está melhorando</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Conceito'
}
</script>

<style scoped>
.container{
  padding: 100px 0 60px; /* 80px 0 40px; */
  text-align: center;
}
h2{
  font-size: 35px;
  font-family: Gilroy-Medium;
  font-weight: 400;
}
h2 span{
  font-family: Gilroy-Bold;
  font-weight: 400;
}
p{
  line-height: 26px;
  margin: 24px auto 60px;
  max-width: 1060px;
}
ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
ul li{
    line-height: 26px;
    padding: 40px;
    padding-top: 0;
    flex-basis: 33.33%;
}
ul li h3{
    color: #208fcf;
    /* font-size: 16px; */
    font-size: inherit;
    font-weight: inherit;
}
ul li p{
    margin: 0 auto;
}

@media (max-width: 768px){
  ul li{
    flex-basis: 50%;
  }
}

@media (max-width: 576px){
  ul li{
    flex-basis: 100%;
    padding: 0 0 40px;
  }
  ul li p{
    max-width: 80%;
  }
}
</style>
