document.addEventListener('DOMContentLoaded', () => {
    const dadosBalanco = [
        { item: 'Caixa', valor: 15000, tipo: 'Ativo Circulante' },
        { item: 'Imóveis', valor: 30000, tipo: 'Ativo Não Circulante' },
        { item: 'Fornecedores', valor: 10000, tipo: 'Passivo Circulante' },
        { item: 'Empréstimos', valor: 20000, tipo: 'Passivo Não Circulante' },
        { item: 'Capital Social', valor: 15000, tipo: 'Patrimônio Líquido' }
    ];

    const tabela = document.getElementById('balancoPatrimonial').getElementsByTagName('tbody')[0];

    function atualizarTabela() {
        tabela.innerHTML = ''; // Limpar a tabela
        dadosBalanco.forEach(dado => {
            const linha = tabela.insertRow();
            const celulaItem = linha.insertCell(0);
            const celulaValor = linha.insertCell(1);
            const celulaTipo = linha.insertCell(2);

            celulaItem.textContent = dado.item;
            celulaValor.textContent = dado.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            celulaTipo.textContent = dado.tipo;
        });
    }

    document.getElementById('balancoForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const item = event.target.item.value;
        const valor = parseFloat(event.target.valor.value);
        const tipo = event.target.tipo.value;

        dadosBalanco.push({ item, valor, tipo });
        atualizarTabela();
        event.target.reset();
    });

    atualizarTabela();
});
