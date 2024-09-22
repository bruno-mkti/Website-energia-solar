function calcularEconomia() {
    const monthlyBill = document.getElementById('monthlyBill').value;
    const yearlyBill = monthlyBill * 12;

    const startDiscount = 19/100;
    const premiumDiscount = 26/100;
    const goldDiscount = 31/100;

    const startSavings = yearlyBill * startDiscount;
    const premiumSavings = yearlyBill * premiumDiscount;
    const goldSavings = yearlyBill * goldDiscount;

    const startCost = yearlyBill - startSavings;
    const premiumCost = yearlyBill - premiumSavings;
    const goldCost = yearlyBill - goldSavings;

    const resultElement = document.getElementById('resultado');
    resultElement.innerHTML = `
        <p><strong>Plano Start:</strong> Você gastará em média por ano: R$ ${startCost.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}. <br>Nesse plano você terá um desconto de: R$ ${startSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        <br><p><strong>Plano Premium:</strong> Você gastará em média por ano: R$ ${premiumCost.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}. <br>Nesse plano você terá um desconto de: R$ ${premiumSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        <br><p><strong>Plano Gold:</strong> Você gastará em média por ano: R$ ${goldCost.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}. <br>Nesse plano você terá um desconto de: R$ ${goldSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
    `;
}
