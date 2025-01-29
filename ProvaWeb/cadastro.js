document.getElementById('salvar').addEventListener('click', function () {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const celular = document.getElementById('celular').value.trim();

    if (nome && email && telefone && celular) {
        alert('Cadastro realizado com sucesso!');
        document.getElementById('formCadastro').reset();
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

document.getElementById('limpar').addEventListener('click', function () {
    document.getElementById('formCadastro').reset();
});