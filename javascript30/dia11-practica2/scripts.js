//get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
console.log(progress);
const ranges = player.querySelectorAll('.player__slider');
/////////////////////////////////////////////////////////////////////////////////////////////
video.addEventListener('click',elputoclick)
toggle.addEventListener('click',elputoclick)
// toggle.addEventListener('click',elputotoggle)
function elputoclick(){
	(video.paused)?video.play():video.pause();
}
/////////////////////////////////////////////////////////////////////////////////////////////
video.addEventListener('click',elputotoggle)
toggle.addEventListener('click',elputotoggle)
function elputotoggle(){
	(video.paused)?toggle.textContent='play':toggle.textContent='Perro';
}
/////////////////////////////////////////////////////////////////////////////////////////////
ranges.forEach(range=>range.addEventListener('change',handlethis));
ranges.forEach(range=>range.addEventListener('mousemove',handlethis));
function handlethis(){
	video[this.name]=this.value;
}
/////////////////////////////////////////////////////////////////////////////////////////////
skipButtons.forEach(skip=>skip.addEventListener('click',handlethose));
function handlethose(){
	video.currentTime+=parseFloat(this.dataset.skip);
}
/////////////////////////////////////////////////////////////////////////////////////////////
video.addEventListener('timeupdate',handleProgress);
function handleProgress(){
    // console.log(video.currentTime);
    const percent=(video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}
/////////////////////////////////////////////////////////////////////////////////////////////
progress.addEventListener('click',scrub);
function scrub(e){
	console.log(e);
	console.log(e.offsetX);
	console.log(progress.offsetWidth);
	console.log(video.duration);
	const scrub=(e.offsetX/progress.offsetWidth)*video.duration;
	video.currentTime=scrub;

}