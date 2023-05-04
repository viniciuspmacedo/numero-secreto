const btnIniciaJogo = document.getElementById('btn-inicia-jogo')
const elementoDescricao = document.getElementById('descricao')
const elementoJogo = document.getElementById('jogo')

btnIniciaJogo.addEventListener('click', () =>{
    elementoDescricao.classList.add("esconder")
    elementoJogo.classList.add('mostrar')
})