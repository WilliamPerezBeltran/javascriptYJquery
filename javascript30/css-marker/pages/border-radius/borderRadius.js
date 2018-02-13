document.getElementById("borderStyle").addEventListener('change', changeOption);

function changeOption() {
    document.documentElement.style.setProperty(`--borderStyle`, this.value);
    var getTag = document.querySelector('.borderStyle');
    getTag.innerHTML = this.value
}
const inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}` + suffix);
    var setValue = document.querySelector(`.${this.name}`);
    setValue.innerHTML = this.value + suffix;
}
