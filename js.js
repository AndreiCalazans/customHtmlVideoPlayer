// get our elements
const player = document.querySelector('.player');
const video = player.querySelector(".viewer");
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('progressBarFilled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll('.slider');


//build function
function togglePlay(){
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  // change the play icon when u click play or pause


};

function updateButton(){
  const icon = video.paused ? 'play' : 'pause';
  toggle.innerHTML = `<i class="fa fa-${icon}" aria-hidden="true"></i>`;

}

//hook up the events listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);


toggle.addEventListener("click", togglePlay);
