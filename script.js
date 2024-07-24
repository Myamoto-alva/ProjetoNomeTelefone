const form = document.getElementById('form-contato');
const tabelaContatos = document.getElementById('tabela-contatos');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nomeContato = document.getElementById('nome-contato').value;
    const telefoneContato = document.getElementById('telefone-contato').value;

    if (nomeContato && telefoneContato) {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${nomeContato}</td>
            <td>${telefoneContato}</td>
        `;
        tabelaContatos.appendChild(novaLinha);

        form.reset();
    }
});
