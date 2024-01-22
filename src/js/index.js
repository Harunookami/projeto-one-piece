const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) => {
   botao.addEventListener("click", () => {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    desselecionarBotao(botaoSelecionado, botao);
    desselecionarPersonagem();

       personagens[indice].classList.add("selecionado");
   })
})

function desselecionarPersonagem() {
   const personagemSelecionado = document.querySelector(".personagem.selecionado");
   personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao(botaoSelecionado, botao) {
   botaoSelecionado.classList.remove("selecionado");
   botao.classList.add("selecionado");
}

