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
window.addEventListener('load', () => {
  const player = document.getElementById('radioPlayer');
  // try to play as soon as possible
  player.play().catch(() => {
    // browsers sometimes block autoplay; show a quick hint
    const notice = document.createElement('div');
    notice.textContent = 'click anywhere to start GOLF RADIO 🎵';
    notice.style.position = 'fixed';
    notice.style.top = '0';
    notice.style.left = '0';
    notice.style.right = '0';
    notice.style.background = '#F2AECE';
    notice.style.color = '#000';
    notice.style.padding = '15px';
    document.body.prepend(notice);

    document.body.addEventListener('click', () => {
      player.play();
      notice.remove();
    }, { once: true });
  });
});

