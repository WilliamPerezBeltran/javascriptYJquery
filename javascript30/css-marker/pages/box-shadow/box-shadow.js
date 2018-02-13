const showBoxNoInset1=document.querySelector('.noInset');
		const showBoxNoInsetSetValue1=document.querySelector('.setValueNoInset');
		showBoxNoInset1.style.setProperty('display','block');
		showBoxNoInsetSetValue1.style.setProperty('display','block');

var inset=document.getElementById('selectInset');
inset.addEventListener('click',updateInset);
function updateInset(){
	if (this.value=='No') {
		const showBoxNoInset1=document.querySelector('.noInset');
		const showBoxNoInsetSetValue1=document.querySelector('.setValueNoInset');
		showBoxNoInset1.style.setProperty('display','block');
		showBoxNoInsetSetValue1.style.setProperty('display','block');

		const showBoxNoInset2=document.querySelector('.Inset');
		const showBoxNoInsetSetValue2=document.querySelector('.setValueInset');
		showBoxNoInset2.style.setProperty('display','none');
		showBoxNoInsetSetValue2.style.setProperty('display','none');
		
	}else{
		const showBoxNoInset1=document.querySelector('.noInset');
		const showBoxNoInsetSetValue1=document.querySelector('.setValueNoInset');
		showBoxNoInset1.style.setProperty('display','none');
		showBoxNoInsetSetValue1.style.setProperty('display','none');

		const showBoxNoInset2=document.querySelector('.Inset');
		const showBoxNoInsetSetValue2=document.querySelector('.setValueInset');
		showBoxNoInset2.style.setProperty('display','block');
		showBoxNoInsetSetValue2.style.setProperty('display','block');

	}
}
const inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}` + suffix);
    var setValue = document.querySelectorAll(`.${this.name}`);
    setValue.forEach(value=>value.innerHTML = this.value + suffix)
    // console.log(setValue);
    // setValue.innerHTML = this.value + suffix;
}
