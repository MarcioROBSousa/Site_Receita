// Solicita ao usuário o seu nome utilizando a função prompt
var userName = prompt("Qual é o seu nome?");

// Se o usuário fornecer um nome, exibe uma mensagem de boas-vindas com alert
if (userName) {
    alert("Olá " + userName + ", seja bem-vindo ao site!");
} else {
    // Caso o usuário não digite nada ou cancele, exibe uma mensagem padrão
    alert("Olá visitante, seja bem-vindo ao site!");
}

// Solicita ao usuário que escolha o tema: "dia" para fundo amarelo e ícone ☀ ou "noite" para fundo preto e ícone 🌙
var themeChoice = prompt("Escolha o tema:\nDigite 'dia' para fundo amarelo e ícone ☀\nDigite 'noite' para fundo preto e ícone 🌙");

// Define as variáveis para o background e o ícone, de acordo com a escolha do usuário
var backgroundColor, textColor, iconText;

if (themeChoice && themeChoice.toLowerCase() === "dia") {
    backgroundColor = "yellow";
    textColor = "black";
    iconText = "☀"; // Ícone do sol para o tema dia
} else if (themeChoice && themeChoice.toLowerCase() === "noite") {
    backgroundColor = "black";
    textColor = "white";
    iconText = "🌙"; // Ícone da lua para o tema noite
} else {
    // Caso o usuário digite uma opção inválida, define um tema padrão (dia)
    backgroundColor = "yellow";
    textColor = "black";
    iconText = "☀";
    alert("Opção inválida. Será aplicado o tema 'dia' por padrão.");
}

// Aplica a cor de fundo escolhida à página
document.body.style.background = backgroundColor;
document.body.style.color = textColor; // Define a cor do texto

// Atualiza o conteúdo e os estilos do elemento de ícone já existente no HTML
var iconDiv = document.getElementById("icon");
if (iconDiv) {
    iconDiv.textContent = iconText;
    // Define estilos diretamente via JavaScript para posicionar o ícone
    iconDiv.style.position = "fixed";
    iconDiv.style.top = "10px";
    iconDiv.style.right = "10px";
    iconDiv.style.fontSize = "40px";
    
    // Adiciona um evento de click ao ícone para alternar o fundo
    iconDiv.addEventListener("click", function() {
        // Verifica a cor de fundo atual e alterna entre os temas
        if (document.body.style.background === "yellow") {
            document.body.style.background = "black";
            document.body.style.color = "white";
            iconDiv.textContent = "🌙"; // Altera o ícone para lua
        } else {
            document.body.style.background = "yellow";
            document.body.style.color = "black"; // Muda o texto para preto
            iconDiv.textContent = "☀"; // Altera o ícone para sol
        }
    });
}