function inserir(data) {
    document.querySelector('#display').value += data;
}

function limpar() {
    document.querySelector('#display').value = '';
}

function voltar(){
    const display = document.querySelector('#display');
    display.value = display.value.slice(0, -1);
}

function calcular() {
    const display = document.querySelector('#display');
    try {
        let resultado = eval(display.value).toFixed(3);
        if (resultado.endsWith('.000')) {
            resultado = resultado.replace('.000', '');
        }
        display.value = resultado;
    } catch {
        display.value = 'Erro';
    }
}