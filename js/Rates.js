import {percent} from './Formaters.js'


//процентные ставки

const programBase = 0.109
const programFam = 0.053
const programIT = 0.047
const programGov = 0.073
const programZero = 0.12
const programCottage = 0.112
const programBusiness = 0.124
const programForign = 0.10

//вывод ставок в value input-a

document.querySelector('#base-value').value = programBase
document.querySelector('#family-value').value = programFam
document.querySelector('#it-value').value = programIT
document.querySelector('#gov-value').value = programGov
document.querySelector('#zero-value').value = programZero
document.querySelector('#business-value').value = programBusiness
document.querySelector('#cottage-value').value = programCottage
document.querySelector('#forigner-value').value = programForign


//вывод процентной ставки на экран страницы в span радиокнопки
//подключение модуля форматирования процента

document.querySelector('#base-text').innerText = percent.format(programBase) 
document.querySelector('#family-text').innerText = percent.format(programFam) 
document.querySelector('#it-text').innerText = percent.format(programIT)
document.querySelector('#gov-text').innerText = percent.format(programGov)
document.querySelector('#zero-text').innerText = percent.format(programZero)
document.querySelector('#cottage-text').innerText = percent.format(programCottage)
document.querySelector('#business-text').innerText = percent.format(programBusiness)
document.querySelector('#forigner-text').innerText = percent.format(programForign)


//отображение выбранной процентнойстаки справа
const programInputs = document.querySelectorAll('input[name="program"]')
const totalPercent = document.querySelector('#total-percent')

programInputs.forEach((input) => {

    if (input.checked){
        totalPercent.innerText = percent.format(input.value)
    }

    input.addEventListener('click', function (){
        totalPercent.innerText = percent.format(this.value)
    })
})

