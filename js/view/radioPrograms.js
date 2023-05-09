import updateModel from "./../utils/updateModel.js";

function init(getData) {

    const radioButtons = document.querySelectorAll('input[name="program"]')

    const {Base, Fam, IT, Gov, Zero, Cottage, Business, Forign} = getData().programs;

    //установка значений value для ставок
    document.querySelector('#zero-value').value = Zero ;
    document.querySelector('#base-value').value = Base;
    document.querySelector('#it-value').value =  IT;
    document.querySelector('#family-value').value = Fam;
    document.querySelector('#gov-value').value =  Gov;
    document.querySelector('#cottage-value').value = Cottage;
    document.querySelector('#business-value').value = Business;
    document.querySelector('#forigner-value').value = Forign;

    //вывод ставок по ипотеки на экран
    document.querySelector('#zero-text').innerText = Zero *100 
    document.querySelector('#base-text').innerText = Base *100 
    document.querySelector('#it-text').innerText = IT *100 
    document.querySelector('#family-text').innerText = Fam *100 
    document.querySelector('#gov-text').innerText = Gov *100 
    document.querySelector('#cottage-text').innerText = Cottage *100 
    document.querySelector('#business-text').innerText = Business *100 
    document.querySelector('#forigner-text').innerText = Forign *100 

    radioButtons.forEach(function (radioBtn) {
        radioBtn.addEventListener('change', function () {
			updateModel(this, {
				onUpdate: 'radioProgram',
				selectedProgram: parseFloat(this.value),
				id: this.id,
			});
		});
    })
}

export default init;