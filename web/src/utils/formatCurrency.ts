export function formatCurrency(value: number){
    const currency = Intl.NumberFormat("pt-BR", {
        style: "currency", // Define o estilo como moeda
        currency: "BRL", // Define a moeda como Real Brasileiro
    })

    return currency.format(value).replace("R$", "") // Formata o valor numérico para o formato de moeda 
}