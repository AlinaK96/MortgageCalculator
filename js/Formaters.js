export const percent = new Intl.NumberFormat('ru-Ru', 
    {
        style: 'percent', 
        maximumFractionDigits: 3
    })

export const price = new Intl.NumberFormat('ru-Ru',
    {
        style: 'currency', 
        currency: 'RUB', 
        maximumFractionDigits: 0
    })

export const priceDecimal = new Intl.NumberFormat('ru-Ru',
    {
        style: 'currency', 
        currency: 'RUB', 
        maximumFractionDigits: 2
    })