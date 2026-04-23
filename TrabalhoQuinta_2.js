let quantidade = 0;
let total = 0;
let maisCaro = 0;

let preco = parseFloat(prompt("Preço do produto:"));

while (preco !== -1) {

    if (preco > 0) {
        quantidade++;
        total += preco;

        if (preco > maisCaro) {
            maisCaro = preco;
        }
    } else {
        console.log("Valor inválido!");
    }

    preco = parseFloat(prompt("Preço do produto:"));
}

console.log("\n--- CAIXA REGISTRADORA ---");
console.log(`Produtos: ${quantidade}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Produto mais caro: R$ ${maisCaro.toFixed(2)}`);