# Programa Validação de Compra

# Variáveis
saldo_disponivel = 100
valor_compra = 75

# Estrutura condicional
if saldo_disponivel >= valor_compra:
    saldo_restante = saldo_disponivel - valor_compra
    print("Compra aprovada! Seu novo saldo é:", saldo_restante)
else:
    print("Saldo insuficiente. A compra não pode ser realizada.")
