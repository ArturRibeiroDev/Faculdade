let estoque = 500;
let reposicoes = 0;
let vendasParciais = 0;

for (let dia = 1; dia <= 30; dia++) {

    let venda = parseInt(prompt(`Dia ${dia} - Quantidade vendida:`));

    let vendido = venda;

    if (venda > estoque) {
        vendido = estoque;
        vendasParciais++;
        console.log(`VENDA PARCIAL no dia ${dia}: solicitado ${venda}, vendido ${vendido}`);
    }

    estoque -= vendido;

    if (estoque === 0) {
        console.log(`RUPTURA DE ESTOQUE no dia ${dia}`);
        break;
    }

    if (estoque < 80) {
        if (reposicoes < 2) {
            estoque += 200;
            reposicoes++;
            console.log(`Reposição realizada no dia ${dia}. Novo estoque: ${estoque}`);
        } else {
            console.log(`REPOSIÇÃO ESGOTADA no dia ${dia} --- estoque crítico`);
        }
    }
}

console.log("===== RESULTADO FINAL =====");
console.log(`Estoque final: ${estoque}`);
console.log(`Total de reposições: ${reposicoes}`);
console.log(`Total de dias com venda parcial: ${vendasParciais}`);
