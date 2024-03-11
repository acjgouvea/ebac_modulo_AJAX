$(document).ready(function () {
    $('#btn-buscar-cep').click(function () {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        botao.find('i').addClass('d-none');
        botao.find('span').removeClass('d-none');

        fetch(endpoint)
            .then(response => response.json())
            .then(json => {
                const { logradouro, bairro, localidade, uf } = json;
                const endereco = `${logradouro}, ${bairro} - ${localidade} - ${uf}`;
            })
            .catch(error => {
                console.error('Ocorreu um erro:', error);
                alert("Ocorreu um erro ao buscar o CEP. Por favor, tente novamente.");
            })
            .finally(() => {
                setTimeout(() => {
                    botao.find('i').removeClass('d-none');
                    botao.find('span').addClass('d-none');
                }, 4000);
            });
    });

    $('#formulario-pedido').submit(function (evento) {
        evento.preventDefault();

        const nome = $('#nome').val().trim();
        if (nome.length === 0) {
            alert('Por favor, digite o nome.');

            throw new Error('Por favor, digite o nome.');
            return;
        }


    });
});
