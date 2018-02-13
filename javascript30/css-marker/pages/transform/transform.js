var all = document.querySelector('.all');
var allTransform = document.querySelector('.allTransform');
var setValueAll = document.querySelector('.setValueAll');
all.style.setProperty('display', 'block');
allTransform.style.setProperty('display', 'block');
setValueAll.style.setProperty('display', 'block');

const input = document.querySelectorAll('.all input');
input.forEach(input => input.addEventListener('change', updateInput));
input.forEach(input => input.addEventListener('mousemove', updateInput));

function updateInput() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    if (this.name == 'translate') {
        const changeValue = document.querySelector('.setValueAllTranslate');
        changeValue.innerHTML = this.value + suffix;

    } else if (this.name == 'rotate') {
        const changeValue = document.querySelector('.setValueAllRotate');
        changeValue.innerHTML = this.value + suffix;

    } else if (this.name == 'scale') {
        const changeValue = document.querySelector('.setValueAllScale');
        changeValue.innerHTML = this.value + suffix;

    } else if (this.name == 'skew') {
        const changeValue = document.querySelector('.setValueAllSkew');
        changeValue.innerHTML = this.value + suffix;

    }
}

var transform = document.getElementById('transform');
transform.addEventListener('click', selectTransform);

function selectTransform() {
    var all = document.querySelector('.all');
    var allTransform = document.querySelector('.allTransform');
    var setValueAll = document.querySelector('.setValueAll');

    var translate = document.querySelector('.translate');
    var translateTransform = document.querySelector('.translateTransform');
    var setValueTranslate = document.querySelector('.setValueTranslate');

    var rotate = document.querySelector('.rotate');
    var rotateTransform = document.querySelector('.rotateTransform');
    var setValueRotate = document.querySelector('.setValueRotate');

    var scale = document.querySelector('.scale');
    var scaleTransform = document.querySelector('.scaleTransform');
    var setValueScale = document.querySelector('.setValueScale');

    var skew = document.querySelector('.skew');
    var skewTransform = document.querySelector('.skewTransform');
    var setValueSkew = document.querySelector('.setValueSkew');

    if (transform.value == 'all') {
        //show the Divs according its features

        all.style.setProperty('display', 'block');
        allTransform.style.setProperty('display', 'block');
        setValueAll.style.setProperty('display', 'block');

        translate.style.setProperty('display', 'none');
        translateTransform.style.setProperty('display', 'none');
        setValueTranslate.style.setProperty('display', 'none');

        rotate.style.setProperty('display', 'none');
        rotateTransform.style.setProperty('display', 'none');
        setValueRotate.style.setProperty('display', 'none');

        scale.style.setProperty('display', 'none');
        scaleTransform.style.setProperty('display', 'none');
        setValueScale.style.setProperty('display', 'none');

        skew.style.setProperty('display', 'none');
        skewTransform.style.setProperty('display', 'none');
        setValueSkew.style.setProperty('display', 'none');

    } else if (transform.value == 'translate') {
        all.style.setProperty('display', 'none');
        allTransform.style.setProperty('display', 'none');
        setValueAll.style.setProperty('display', 'none');

        translate.style.setProperty('display', 'block');
        translateTransform.style.setProperty('display', 'block');
        setValueTranslate.style.setProperty('display', 'block');

        rotate.style.setProperty('display', 'none');
        rotateTransform.style.setProperty('display', 'none');
        setValueRotate.style.setProperty('display', 'none');

        scale.style.setProperty('display', 'none');
        scaleTransform.style.setProperty('display', 'none');
        setValueScale.style.setProperty('display', 'none');

        skew.style.setProperty('display', 'none');
        skewTransform.style.setProperty('display', 'none');
        setValueSkew.style.setProperty('display', 'none');

        const input = document.querySelectorAll('.translate input');
        input.forEach(input => input.addEventListener('change', updateInput));
        input.forEach(input => input.addEventListener('mousemove', updateInput));

        function updateInput() {
            const suffix = this.dataset.sizing || '';
            document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
            if (this.name == 'translateX') {
                const setValueTranslateX = document.querySelector('.setValueTranslateX');
                setValueTranslateX.innerHTML = this.value + suffix;

            } else if (this.name == 'translateY') {
                const setValueTranslateY = document.querySelector('.setValueTranslateY');
                setValueTranslateY.innerHTML = this.value + suffix;

            }
        }

    } else if (transform.value == 'rotate') {
        //show the Divs according its features
        all.style.setProperty('display', 'none');
        allTransform.style.setProperty('display', 'none');
        setValueAll.style.setProperty('display', 'none');

        translate.style.setProperty('display', 'none');
        translateTransform.style.setProperty('display', 'none');
        setValueTranslate.style.setProperty('display', 'none');

        rotate.style.setProperty('display', 'block');
        rotateTransform.style.setProperty('display', 'block');
        setValueRotate.style.setProperty('display', 'block');

        scale.style.setProperty('display', 'none');
        scaleTransform.style.setProperty('display', 'none');
        setValueScale.style.setProperty('display', 'none');

        skew.style.setProperty('display', 'none');
        skewTransform.style.setProperty('display', 'none');
        setValueSkew.style.setProperty('display', 'none');
        const input = document.querySelectorAll('.rotate input');
        input.forEach(input => input.addEventListener('change', updateInput));
        input.forEach(input => input.addEventListener('mousemove', updateInput));

        function updateInput() {
            const suffix = this.dataset.sizing || '';
            document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
            const setValueRotateR = document.querySelector('.setValueRotateR');
            setValueRotateR.innerHTML = this.value + suffix;
        }

    } else if (transform.value == 'scale') {
        //show the Divs according its features
        all.style.setProperty('display', 'none');
        allTransform.style.setProperty('display', 'none');
        setValueAll.style.setProperty('display', 'none');

        translate.style.setProperty('display', 'none');
        translateTransform.style.setProperty('display', 'none');
        setValueTranslate.style.setProperty('display', 'none');

        rotate.style.setProperty('display', 'none');
        rotateTransform.style.setProperty('display', 'none');
        setValueRotate.style.setProperty('display', 'none');

        scale.style.setProperty('display', 'block');
        scaleTransform.style.setProperty('display', 'block');
        setValueScale.style.setProperty('display', 'block');

        skew.style.setProperty('display', 'none');
        skewTransform.style.setProperty('display', 'none');
        setValueSkew.style.setProperty('display', 'none');
        const input = document.querySelectorAll('.scale input');
        input.forEach(input => input.addEventListener('change', updateInput));
        input.forEach(input => input.addEventListener('mousemove', updateInput));

        function updateInput() {
            const suffix = this.dataset.sizing || '';
            document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
            if (this.name == 'scaleX') {
                const scaleX = document.querySelector(`.${this.name}`);
                scaleX.innerHTML = this.value + suffix;
            } else {
                const scaleY = document.querySelector(`.${this.name}`);
                scaleY.innerHTML = this.value + suffix;
            }
        }
    } else if (transform.value == 'skew') {
        //show the Divs according its features
        all.style.setProperty('display', 'none');
        allTransform.style.setProperty('display', 'none');
        setValueAll.style.setProperty('display', 'none');

        translate.style.setProperty('display', 'none');
        translateTransform.style.setProperty('display', 'none');
        setValueTranslate.style.setProperty('display', 'none');

        rotate.style.setProperty('display', 'none');
        rotateTransform.style.setProperty('display', 'none');
        setValueRotate.style.setProperty('display', 'none');

        scale.style.setProperty('display', 'none');
        scaleTransform.style.setProperty('display', 'none');
        setValueScale.style.setProperty('display', 'none');

        skew.style.setProperty('display', 'block');
        skewTransform.style.setProperty('display', 'block');
        setValueSkew.style.setProperty('display', 'block');
        const input = document.querySelectorAll('.skew input');
        input.forEach(input => input.addEventListener('change', updateInput));
        input.forEach(input => input.addEventListener('mousemove', updateInput));

        function updateInput() {
            const suffix = this.dataset.sizing || '';
            document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
            if (this.name == 'skewX') {
                const skewX = document.querySelector(`.${this.name}`);
                skewX.innerHTML = this.value + suffix;
            } else {
                const skewY = document.querySelector(`.${this.name}`);
                skewY.innerHTML = this.value + suffix;
            }
        }
    }
s
}