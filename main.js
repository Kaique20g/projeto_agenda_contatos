const form = document.getElementById('form-agenda')
const Nome = [];
const Telefone = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha()
    atualizaTabela()
})

function adicionarLinha() {
    const inputNome = document.getElementById('Nome')
    const inputTelefone = document.getElementById('Telefone')

        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputTelefone.value}</td>`
        linha += '</tr>'

        linhas += linha
    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoDaTabela = document.querySelector('tbody')
    corpoDaTabela.innerHTML = linhas
}