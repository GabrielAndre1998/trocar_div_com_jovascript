
// ae vamos criar a funcao  no javascript com o id do jogo que sera o identificador unico dos cards

function alterarStatus(id){
    // logo em seguida vamos identificar o que queremos mudar no html e declarar essa variavel com let que terá o nome de cardClicado  logo em seguida vamos chamar essa funçao com o document.getElementById o nome não pode permanecer como game-1 como está no html , pois dessa forma ficará fixo e sempre referenciará o primeiro jogo. É necessário substituir o número 1 pelo ID correspondente Vamos utilizar a expressão do JavaScript que envolve o uso do símbolo de crase. Escreveremos game- entre crases e, em seguida, usaremos o sinal de dólar seguido de chaves (${}) para concatenar com a variável id.
let cardClicado = document.getElementById(`game-${id}`)
//agora vamos recuperar o game que foi clicado logo abaixo que vamos recuperar  uma div que tem uma class que e o que vamos uzar e vomos fazer com todos que sera ultilizado vamos uzar somente informaçoes do game que foi clicado por isso usamos cardClicado.querySelector e nao document. 
let nome = cardClicado.querySelector('.dashboard__item__name')
let botao = cardClicado.querySelector('.dashboard__item__button')
let imagem = cardClicado.querySelector('.dashboard__item__img')


//alert(cardClicado.textContent);
//no if se tiver o  elemento dashboard__item__img--rented quer dizer que ele esta alugado entao temos que mudar ele para devolvido  a palavra rented quer dizer alugado 
if (imagem.classList.contains('dashboard__item__img--rented')){

    //a baixo vai mudar a cor de imagem da div
    imagem.classList.remove('dashboard__item__img--rented')

    botao.classList.remove('dashboard__item__button--return')
   // vai mudar o nome do botao de devolver para alugar
    botao.innerHTML = 'Alugar'
} else {
    imagem.classList.add('dashboard__item__img--rented')
     //a baixo vai mudar a cor de imagem da div
    botao.classList.add('dashboard__item__button--return')
     // vai mudar o nome do botao de alugar para devolver
    botao.innerHTML = 'Devolver'
}

}

