
function openPopup() {
  document.getElementById("popup").classList.add("active");
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
}

const video = document.getElementById("bg-video");
const videos = ["video1.mp4", "video2.mp4"]; 
let currentVideo = 0;

video.src = videos[currentVideo];
video.play();

video.addEventListener("ended", function () {
  currentVideo = (currentVideo + 1) % videos.length;
  video.src = videos[currentVideo];
  video.play();
});


const heartImages = ["heart1.png", "heart2.png", "heart3.png", "heart4.png", "heart5.png"]; // add more if you want
let currentHeart = 0;
const heartImg = document.getElementById("heart-img");

setInterval(() => {
  currentHeart = (currentHeart + 1) % heartImages.length;
  heartImg.src = heartImages[currentHeart];
}, 3000);
