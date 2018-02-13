
const inputs = document.querySelectorAll('input');
// console.log(inputs);
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate() {
    // console.log(this.name);
    // console.log(this.value);
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}` + suffix);
    var setValue = document.querySelector(`.${this.name}`);
    setValue.innerHTML = this.value + suffix;
    // console.log(wilima);
    // var html=
}
