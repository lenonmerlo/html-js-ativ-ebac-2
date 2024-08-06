const form = document.getElementById('form-contato');
const tabelaContatos = document.getElementById('tabela-contatos');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    const nome = inputNomeContato.value;
    const telefone = inputTelefoneContato.value;

    let linha = `<tr>`;
    linha += `<td>${nome}</td>`;
    linha += `<td>${telefone}</td>`;
    linha += `<td><button class="excluir" onclick="excluirLinha(this)">Excluir</button></td>`;
    linha += `</tr>`;

    tabelaContatos.innerHTML += linha;

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function excluirLinha(button) {
    const linha = button.parentElement.parentElement;
    linha.remove();
}


