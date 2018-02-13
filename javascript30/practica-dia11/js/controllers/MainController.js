
window.addEventListener("keydown", function(e){
    console.log(e.keyCode);
    //const audio= document.querySelector('audio[data-key=65]');
    const audio = document.querySelector('audio[data-key=65]');


       // const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    console.log(audio);
    console.log(this);
    if (!audio) return;// stop the function from running all together
    audio.play(); 

});