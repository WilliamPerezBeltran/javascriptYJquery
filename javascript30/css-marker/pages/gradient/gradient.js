//show by default the table with class's name 'selected-radial-gradient'
const showGradient = document.querySelector('.selected-radial-gradient');
const showGradientBox = document.querySelector('.box-modificada-radial-gradient');
const showSetValueGradient = document.querySelector('.setValue-radial-gradient');
showGradient.style.setProperty('display', 'block');
showGradientBox.style.setProperty('display', 'block');
showSetValueGradient.style.setProperty('display', 'block');

 //selecte the inputs into the class 'selected-radial-gradient'
        const inputs = document.querySelectorAll('.selected-radial-gradient input');
        inputs.forEach(input => input.addEventListener('change', updateInput));
        inputs.forEach(input => input.addEventListener('mousemove', updateInput));

        function updateInput() {
            const suffix = this.dataset.sizing || '';
            document.documentElement.style.setProperty(`--${this.name}`, this.value);
            const setValue = document.querySelector(`.${this.name}`);
            setValue.innerHTML = this.value + suffix;
        }


//select the tag select to determinate wich is going to be show 
const selectRadialGradient = document.getElementById('gradientStyle');
selectRadialGradient.addEventListener('click', selectGradient);

function selectGradient() {
    var selectedGradient = document.querySelector('.selected-radial-gradient');
    var boxGradient = document.querySelector('.box-modificada-radial-gradient');
    var setValueGradient = document.querySelector('.setValue-radial-gradient');

    var selectedGradientLinear = document.querySelector('.selected-linear-gradient');
    var boxGradientLinear = document.querySelector('.box-modificada-linear-gradient');
    var setValueGradientLinear = document.querySelector('.setValue-linear-gradient');

    var selectedGradientRadial = document.querySelector('.selected-repeating-radial-gradient');
    var boxGradientRadial = document.querySelector('.box-modificada-repeating-radial-gradient');
    var setValueGradientRadial = document.querySelector('.setValue-repeating-radial-gradient');
    if (this.value == 'radialGradient') {
        //muestra todos los que tenga que ver con 'radial-gradient' del select
        selectedGradient.style.setProperty('display', 'block');
        boxGradient.style.setProperty('display', 'block');
        setValueGradient.style.setProperty('display', 'block');
        //esconde todos los que tenga que ver con gradient radial
        selectedGradientLinear.style.setProperty('display', 'none');
        boxGradientLinear.style.setProperty('display', 'none');
        setValueGradientLinear.style.setProperty('display', 'none');
        //esconde todos los que tenga que ver con gradient radial
        selectedGradientRadial.style.setProperty('display', 'none');
        boxGradientRadial.style.setProperty('display', 'none');
        setValueGradientRadial.style.setProperty('display', 'none');


        //selecte the inputs into the class 'selected-radial-gradient'
        const inputs = document.querySelectorAll('.selected-radial-gradient input');
        inputs.forEach(input => input.addEventListener('change', updateInput));
        inputs.forEach(input => input.addEventListener('mousemove', updateInput));

        function updateInput() {
            const suffix = this.dataset.sizing || '';
            document.documentElement.style.setProperty(`--${this.name}`, this.value);
            const setValue = document.querySelector(`.${this.name}`);
            setValue.innerHTML = this.value + suffix;
        }
    } else if (this.value == 'linearGradient') {
        //esconde todos los que tenga que ver con 'linear-gradient' del select
        selectedGradient.style.setProperty('display', 'none');
        boxGradient.style.setProperty('display', 'none');
        setValueGradient.style.setProperty('display', 'none');
        //muestra todos los que tenga que ver con gradient radial
        selectedGradientLinear.style.setProperty('display', 'block');
        boxGradientLinear.style.setProperty('display', 'block');
        setValueGradientLinear.style.setProperty('display', 'block');
        //esconde todos los que tenga que ver con gradient radial
        selectedGradientRadial.style.setProperty('display', 'none');
        boxGradientRadial.style.setProperty('display', 'none');
        setValueGradientRadial.style.setProperty('display', 'none');
        //capture the element related to the div with class 'selected-linear-gradient input'
        const inputs=document.querySelectorAll('.selected-linear-gradient input');
        inputs.forEach(input=>input.addEventListener('change',updateInput));
        inputs.forEach(input=>input.addEventListener('mousemove',updateInput));
        function updateInput(){
        	const suffix=this.dataset.sizing ||'';
        	document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
        	const setValue=document.querySelector(`.${this.name}`);
        	setValue.innerHTML=this.value+suffix;


        }


    } else if (this.value == 'repeatingRadialGradien') {
        //esconde todos los que tenga que ver con 'repearting-linear-gradient' del select
        selectedGradient.style.setProperty('display', 'none');
        boxGradient.style.setProperty('display', 'none');
        setValueGradient.style.setProperty('display', 'none');
        //esconde todos los que tenga que ver con 'repearting-linear-gradient'
        selectedGradientLinear.style.setProperty('display', 'none');
        boxGradientLinear.style.setProperty('display', 'none');
        setValueGradientLinear.style.setProperty('display', 'none');
        //muestra todos los que tenga que ver con gradient radial
        selectedGradientRadial.style.setProperty('display', 'block');
        boxGradientRadial.style.setProperty('display', 'block');
        setValueGradientRadial.style.setProperty('display', 'block');
        //capture the element related to the div with class 'selected-linear-gradient input'
        const inputs=document.querySelectorAll('.selected-repeating-radial-gradient input');
        console.log(inputs);
        inputs.forEach(input=>input.addEventListener('change',updateInput));
        inputs.forEach(input=>input.addEventListener('mousemove',updateInput));
        function updateInput(){
        	const suffix=this.dataset.sizing ||'';
        	console.log(this.name);
        	document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
        	const setValue=document.querySelector(`.${this.name}`);
        	setValue.innerHTML=this.value+suffix;


        }


    }







}