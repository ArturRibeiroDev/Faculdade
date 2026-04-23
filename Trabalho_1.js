console.log('=== SISTEMA DE MONITORAMENTO DE ESTOQUE ===');
console.log('Estoque inicial carregado: 500 unidades');
console.log('Regra ativa: reposição automática abaixo de 80 unidades (máx: 2 vezes)\n');

let estoque = 500;
let reposicoes = 0;
let vendasParciais = 0;

for (let dia = 1; dia <= 30; dia++) {

    console.log(`\n--- DIA ${dia} ---`);
    console.log(`Estoque antes da venda: ${estoque}`);
    let venda = parseInt(prompt(`Dia ${dia} - Quantidade vendida:`));

    let vendido = venda;

    if (venda > estoque) {
        vendido = estoque;
        vendasParciais++;
        console.log(`[Dia ${dia}] Venda ajustada: cliente pediu ${venda}, mas só havia ${vendido} em estoque.`);
    }

    estoque -= vendido;

    if (estoque === 0) {
        console.log(`[Dia ${dia}] Estoque zerado! Operações interrompidas.`);
        break;
    }

    if (estoque < 80) {
        if (reposicoes < 2) {
            estoque += 200;
            reposicoes++;
            console.log(`[Dia ${dia}] Reposição automática ativada (+200 unidades). \nEstoque atual: ${estoque}`);
        } else {
            console.log(`[Dia ${dia}] Limite de reposições atingido. Situação crítica!`);
        }
    }
}

console.log("\n===== RELATÓRIO FINAL =====");
console.log(` Estoque restante: ${estoque}`);
console.log(` Reposições realizadas: ${reposicoes}`);
console.log(` Dias com venda parcial: ${vendasParciais}`);
