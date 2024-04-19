// Função para validar o formulário

function validarFormulario() {
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let assunto = document.getElementById('assunto').value.trim();
    let mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '' || email === '' || assunto === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return false; 
    }

    // Validar o formato do email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Insira um endereço de email válido.');
        return false; 
    }

    return true; 
}

// Adiciona um ouvinte de evento para o botão do formulário
const botao = document.querySelector('.formcontato__botao');

botao.addEventListener('click', function(event) {
    if (!validarFormulario()) {
        event.preventDefault(); 
    }
});

