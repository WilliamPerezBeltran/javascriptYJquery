//get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
//build out functions
function togglePlay() {
    // const method=video.paused?'play':'pause';
    // video[method]();

    // lo de arriba es lo mismo que que lo de abajo 

    // if (video.paused) {
    // 	video.play();
    // }else{
    // 	video.pause();
    // }

    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateBotton() {
    // console.log('update botton');
    const icon = this.paused ? '►' : '❚ ❚';
    // console.log(icon);
    toggle.textContent = icon;
}

function skip() {
    // console.log('skipping');
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
    //parseFloat to convet into number
    //Converting Strings to Number in Javascript with parseFloat

}

function handleRangeUpdate() {
    // console.log(this.value);
    // console.log(this.name);
    var willia = this.name
    // console.log(video[willia]);
    video[this.name] = this.value;

}

function handleProgress() {
    // console.log(video.currentTime);
    // console.log(video.duration);
    const percent = (video.currentTime / video.duration) * 100; //le multiplica el 100 para que quede en %
    progressBar.style.flexBasis = `${percent}%`

}

function scrub(e) {
    console.log(e);
    console.log(e.offsetX);
    console.log(progress.offsetWidth);
    console.log(video.duration);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;//update the video
}






//hook up the event listener
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBotton);
video.addEventListener('pause', updateBotton); //pause is the event 
video.addEventListener('timeupdate', handleProgress); //to handleProgress 
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mouseDown=false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e)=>{
	if (e.mousedown) {
		scrub();
	}

});
progress.addEventListener('mousedown', ()=>mousedown=true);
progress.addEventListener('mouseup', ()=>mousedown=false);