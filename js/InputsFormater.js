import {price, priceDecimal} from './Formaters.js'

const MaxValue = 100000000
const inputCost = document.querySelector('#input-cost')
const down = document.querySelector('#input-downpayment')

const form = document.querySelector('#form')
const totalCost = document.querySelector('#total-cost')
const totalPayment = document.querySelector('#total-month-payment')
const time = document.querySelector('#input-term')


//настройки клив для форматирования суммы в инпутах
const cleavePriceSettings = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' '
}

const cost = new Cleave ('#input-cost', cleavePriceSettings)
const downpayment = new Cleave ('#input-downpayment', cleavePriceSettings)
const paymentTime = new Cleave ('#input-term', cleavePriceSettings)

//отображение и расчёт суммы кредита
MorgageCalculation()

form.addEventListener('input', function () {
    MorgageCalculation()
})


function MorgageCalculation (){

    //общая сумма кредита
    const totalAmount = +cost.getRawValue() - downpayment.getRawValue()
    totalCost.innerText = price.format(totalAmount)

    //ставка по кредиту
    const rate = parseFloat(document.querySelector('input[name="program"]:checked').value)
    const monthRate = parseFloat(rate / 12)

    //количество месяцев 
    const period =(time.value) * 12
    
    //расчёт месячного платежа

    const monthsPayment = totalAmount*(monthRate + (monthRate / (((1+monthRate)**period)-1)));
    totalPayment.innerText = priceDecimal.format(monthsPayment)
}

//создание слайдера для изменения стоимости недвижимости
const sliderCost = document.querySelector('#slider-cost')

noUiSlider.create(sliderCost, {
    start: 9300000,
    connect: 'lower',
    tooltips: true,
    step: 100000,
    range: {
        'min': 300000,
        '50%': [15000000, 1000000],
        'max': 100000000
    },

    format: wNumb({
        decimals: 0,
        thousand: ' ',
        suffix: ''
    })
})

//связь значений в input и в слайдере
sliderCost.noUiSlider.on('update', function (){

    const sliderValue = parseInt(sliderCost.noUiSlider.get(true))
    inputCost.value = sliderValue
    cost.setRawValue(sliderValue)

    MorgageCalculation()
})

//создание слайдера для изменения первого платежа

const sliderDownpayment = document.querySelector('#downpayment-slider')
noUiSlider.create(sliderDownpayment, {
    start: 1300000,
    connect: 'lower',
    step: 100000,
    range: {
        'min': 300000,
        '50%': [10000000, 500000],
        'max': 25000000
    },
})

sliderDownpayment.noUiSlider.on('update', function (){

    const sliderValue = parseInt(sliderDownpayment.noUiSlider.get(true))
    down.value = sliderValue
    downpayment.setRawValue(sliderValue)

    MorgageCalculation()
})

//создание слайдера для изменения срока кредита

const sliderTerm = document.querySelector('#slider-term')

noUiSlider.create(sliderTerm, {
    start: 9,
    connect: 'lower',
    step: 1,
    range: {
        'min': 1,
        'max': 30
    },
})

sliderTerm.noUiSlider.on('update', function (){

    const sliderValue = parseInt(sliderTerm.noUiSlider.get(true))
    time.value = sliderValue
    paymentTime.setRawValue(sliderValue)

    MorgageCalculation()
})

//форматирование input cost для ограничения максимального вводимого числа

inputCost.addEventListener('input', function (){
    const value = +cost.getRawValue()

    sliderCost.noUiSlider.set(value)

    if (value >= MaxValue){
        inputCost.closest('.param__details').classList.add('param__details--error')
    } else{
        inputCost.closest('.param__details').classList.remove('param__details--error')
    }

    //расчёт минимального и максимального процента для расчёта первоначального взноса
    const minPercent = value * 0.15
    const maxPercent = value * 0.90

    sliderDownpayment.noUiSlider.updateOptions({
        range: {
            'min': minPercent,
            'max': maxPercent
        }
    })

})

inputCost.addEventListener('change', function (){
    const value = +cost.getRawValue()
    if (value >= MaxValue){
        inputCost.closest('.param__details').classList.remove('param__details--error')
        cost.setRawValue(MaxValue)
    }
})