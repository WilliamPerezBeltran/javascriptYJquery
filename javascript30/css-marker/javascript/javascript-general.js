var globalVariableRedirect = 'http://localhost/javascriptyjquery/javascript30/css-marker/'

const redirect = document.querySelectorAll('.header-container ul li');
redirect.forEach(tagRedirect => tagRedirect.addEventListener('click', redirectToPage));

function redirectToPage() {
    var getclass = this.getAttribute('class')
    console.log(globalVariableRedirect);
    switch (getclass) {
        case 'home':
            window.location = globalVariableRedirect + "index.html";
            break;
        case 'borderRadius':
            window.location = globalVariableRedirect + "pages/border-radius/borderRadius.html";
            break;
        case 'gradient':
            window.location = globalVariableRedirect + "pages/gradient/gradient.html";
            break;
        case 'css-transform':
            window.location = globalVariableRedirect + "pages/transform/transform.html";
            break;
        case 'css-animation':
            window.location = globalVariableRedirect + "pages/animation/animation.html";
            break;
        case 'rgba':
            window.location = globalVariableRedirect + "pages/rgba/rgba.html";
            break;
        case 'text-shadow':
            window.location = globalVariableRedirect + "pages/text-shadow/text-shadow.html";
            break;
        case 'box-shadow':
            window.location = globalVariableRedirect + "pages/box-shadow/box-shadow.html";
            break;
        case 'text-rotation':
            window.location = globalVariableRedirect + "pages/text-rotation/text-rotation.html";
            break;
        case 'font-face':
            break;
    }

}

const animateDivs = document.querySelector('.abajo');
animateDivs.addEventListener('mousemove', divAnimated)
animateDivs.addEventListener('transitionend', removeTransition)

function divAnimated() {
    const top = document.querySelector('.circleTop');
    const left = document.querySelector('.circleLeft');
    const right = document.querySelector('.circleRight');
    top.classList.add('circleTopAnimate');
    left.classList.add('circleLeftAnimate');
    right.classList.add('circleRightAnimate');

}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    const top = document.querySelector('.circleTop');
    const left = document.querySelector('.circleLeft');
    const right = document.querySelector('.circleRight');
    top.classList.remove('circleTopAnimate');
    left.classList.remove('circleLeftAnimate');
    right.classList.remove('circleRightAnimate');
}