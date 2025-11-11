const player = document.getElementById('radioPlayer');
const title = document.getElementById('songTitle');
const cover = document.getElementById('cover');
const volumeSlider = document.getElementById('volumeSlider');

function playSong(src, name, image) {
  player.src = src;
  player.play();
  title.textContent = name;
  cover.src = image;
}

volumeSlider.addEventListener('input', () => {
  player.volume = volumeSlider.value;
});
