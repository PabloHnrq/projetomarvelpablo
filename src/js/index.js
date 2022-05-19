/*
 objetivos:  quando passar o mouse em cima do personagem temos que:
    colocar a classe selecionado nele e colocar a animacao dele;
    retirar a classe selecionado do antigo personagem.
 objetivos: quando passar o mouse em cima do personagem, troca o nome e imagem dos personagens laterais(grandes):
    alterar imagem;
    alterar nome.
*/

const personagensp = document.querySelectorAll('.personagens')

personagensp.forEach((personagens) => {
   personagens.addEventListener('mouseenter', () => {

      const idSelecionado = personagens.attributes.id.value;

      if(idSelecionado === 'hulk') return;

      const personagemSelecionado = document.querySelector('.selecionado')
      personagemSelecionado.classList.remove('selecionado')
      personagens.classList.add('selecionado')

      
      const imagemJogador1 = document.getElementById('personagem-jogador-1');
      imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

      const nomeJogador1 = document.getElementById('nome-jogador-1')
      const nomeSelecionado = personagens.getAttribute('data-name')

      nomeJogador1.innerHTML = nomeSelecionado;
      
   });
}) 