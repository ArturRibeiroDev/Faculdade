let saldo = 1000;
let operacoes = 0;
let opcao;

while (true) {

    opcao = parseInt(prompt("=== MENU === \n 1 - Depósito \n 2 - Saque \n 3 - Consultar saldo \n 0 - Sair \n Escolha do usuário: "));

    if (opcao === 1) {
        let valor = parseFloat(prompt("Valor do depósito: "));

        if (valor > 0) {
            saldo += valor;
            operacoes++;
            console.log(`Depósito realizado. Saldo: R$ ${saldo.toFixed(2)}`);
        } else {
            console.log("Valor deve ser Positivo!");
        }

    } else if (opcao === 2) {
        let valor = parseFloat(prompt("Valor do saque: "));

        if (valor > saldo) {
            console.log("Saldo insuficiente!");
        } else if (valor > 0) {
            saldo -= valor;
            operacoes++;
            console.log(`Saque realizado. Saldo: R$ ${saldo.toFixed(2)}`);
        } else {
            console.log("Valor deve ser Positivo!");
        }

    } else if (opcao === 3) {
        console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
        operacoes++;

    } else if (opcao === 0) {
        break;

    } else {
        console.log("Opção inválida! Tente novamente..");
    }
}

console.log("\n --- Processo Encerrado ---");
console.log(`Saldo final: R$ ${saldo.toFixed(2)}`);
console.log(`Operações realizadas: ${operacoes}`);