// Selecionando elementos do DOM
const titulo = document.getElementById('titulo');
const paragrafo = document.getElementById('paragrafo');
const botao = document.getElementById('botao');
const toggleBotao = document.getElementById('toggleBotao');

// Alterando o texto do título
titulo.textContent = 'Título alterado';

// Adicionando um evento de clique ao botão
botao.addEventListener('click', () => {
    paragrafo.textContent = 'O parágrafo foi alterado!';
    titulo.style.color = 'purple'; // Mudando a cor do título para roxo
    
    // Alternar classe para mudar o fundo do corpo
    document.body.classList.toggle('changed-background');
    
    // Adicionando e removendo elementos dinamicamente
    const novoElemento = document.createElement('div');
    novoElemento.textContent = 'Novo elemento adicionado';
    novoElemento.style.marginTop = '20px';
    novoElemento.classList.add('highlight');
    document.body.appendChild(novoElemento);

    // Mudando estilos do botão
    botao.style.backgroundColor = 'purple';
    botao.style.color = 'white';
    botao.textContent = 'Clique novamente!';
});

// Adicionando um evento de clique ao botão de alternância
toggleBotao.addEventListener('click', () => {
    paragrafo.classList.toggle('hidden');
});

// Manipulando eventos de mouse
titulo.addEventListener('mouseover', () => {
    titulo.classList.add('highlight');
});

titulo.addEventListener('mouseout', () => {
    titulo.classList.remove('highlight');
});

// Manipulando eventos de teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        alert('Você pressionou a tecla Enter!');
    }
});

// Manipulando atributos de elementos
titulo.setAttribute('title', 'Passe o mouse sobre este título');
