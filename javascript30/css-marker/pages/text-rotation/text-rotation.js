
const inputs = document.querySelector('input');
const select=document.getElementById('IE');
select.addEventListener('click',updateSelect);
function updateSelect (){
	document.documentElement.style.setProperty(`--mode`, this.value);
    var getMode = document.querySelector('.mode');
    getMode.innerHTML = this.value

}
inputs.addEventListener('change', handleUpdate);
inputs.addEventListener('mousemove', handleUpdate);

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}` + suffix);
    var setValue = document.querySelectorAll(`.${this.name}`);
    setValue.forEach(value=>value.innerHTML = this.value + suffix)
}
