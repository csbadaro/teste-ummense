<template>
  <section>
    <div class="container">
      <div>
        <img src="/static/img/home/metodologias-ageis.png">
      </div>
      <div class="content">
        <h2>As <span>Metodologias Ágeis</span> nunca foram tão ágeis</h2>
        <p> Se você está familiarizado com termos como Scrum, Sprint, Kanban, Product Backlog, XP, FDD e outros termos semelhantes, a Ummense é pra você! Implante a sua forma de gestão na Ummense e ganhe ainda mais produtividade para a sua equipe. Facilite a gestão e o acompanhamento em tempo real mantendo o histórico de todas as informações relevantes para o projeto. Crie um subprojeto para cada Story e atribua à Sprint, mantendo o projeto principal com o histórico completo e Backlog.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Metodologia'
}
</script>

<style scoped>
section{
  background-color: #fbfbfd;
}
.container{
  padding: 100px 0;
  display: flex;
  justify-content: center;
}
.content{
  max-width: 700px;
  margin: 0 0 0 80px;
}
.content h2{
  font-size: 30px;
  font-family: Gilroy-Medium;
  font-weight: 400;
  margin: 0 0 24px;
  max-width: 320px;
}
.content h2 span{
  font-family: Gilroy-Bold;
  font-weight: 400;
}
.content p{
  line-height: 26px;
}

@media (max-width: 768px){
  .container{
    flex-wrap: wrap;
  }
  .content{
    margin: 40px 0 0;
    text-align: center;
  }
  .content h2{
    max-width: none;
  }
}
</style>
