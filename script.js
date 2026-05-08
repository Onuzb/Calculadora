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
        display.value = eval(display.value).toFixed(2);
    } catch {
        display.value = 'Erro';
    }
}