let saldoInicial = parseFloat(prompt('Qual é o seu saldo disponível? '))
let produto = parseFloat(prompt('Insira o valor da compra que você deseja fazer: '))
if (saldoInicial >= produto) { parseFloat(alert(`Compra feita com sucesso! Seu saldo atual é de ${saldoInicial - produto} reais.`))
} else if (saldoInicial < produto) { alert("Você não possui saldo suficiente para realizar essa compra.")
}