//get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
video.addEventListener('click',togglePlay);
toggle.addEventListener('click',togglePlay);
function togglePlay(){
    (video.paused)?video.play():video.pause();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
video.addEventListener('pause',updateBotton);
video.addEventListener('play',updateBotton);
function updateBotton(){
    (video.paused)?toggle.textContent='►':toggle.textContent='❚ ❚';
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
skipButtons.forEach(button=>button.addEventListener('click',skip));
function skip(){
    const dataset=parseFloat(this.dataset.skip);
    video.currentTime+=dataset;
    console.log(typeof dataset);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
ranges.forEach(range=>range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range=>range.addEventListener('mousemove',handleRangeUpdate));
function handleRangeUpdate(){
    video[this.name]=this.value;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
video.addEventListener('timeupdate',handleProgress);
function handleProgress(){
    // console.log(video.currentTime);
    const percent=(video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
let mouseDown=false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e)=>{
    if (e.mousedown) {
        scrub();
    }
});
progress.addEventListener('mousedown', ()=>mouseDown=true);
progress.addEventListener('mouseup', ()=>mouseDown=true);
function scrub(e){
    console.log(e);
    const scrubTime=(e.offsetX/progress.offsetWidth)*video.duration;
    //update the video
    video.currentTime=scrubTime;

}



