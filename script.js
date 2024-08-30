const paragrafo1 = document.getElementById('paragrafo1')
const paragrafo2 = document.getElementsByClassName('paragrafo2')
const botao = document.querySelector('#botao')

botao.addEventListener('click', function() {
    paragrafo1.textContent = 'A aula da Kelliven é massa'
    paragrafo2.textContent = 'Nada demais.'
})


//selecionando os elementos
const link = document.getElementById('link')
const imagem = document.getElementById('imagem')
const botaoImagem = document.getElementById('botaoImagem')

link.setAttribute('href', 'https://www.roblox.com/pt/home')
link.textContent = 'visitar o roblox'

link.style.color = 'blue'

var imagemAtual = 1

botaoImagem.addEventListener('click', function(){
    if(imagemAtual === 1) {
        imagem.setAttribute('src', '.jpg')
        imagemAtual = 2
    }else{
        imagem.setAttribute('src', 'macaquinho.jpg')
        imagemAtual = 1
    }
})