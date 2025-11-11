const player = document.getElementById('radioPlayer');
const title = document.getElementById('songTitle');
const cover = document.getElementById('cover');
const volumeSlider = document.getElementById('volumeSlider');

// playlist (add your songs here)
const playlist = [
      { src: 'IGORS THEME.mp3', title: 'IGORS THEME', cover: 'igor.jpg' },
      { src: 'EARFQUAKE.mp3', title: 'EARFQUAKE', cover: 'igor.jpg' },
      { src: 'I THINK.mp3', title: 'I THINK', cover: 'igor.jpg' },
      { src: 'EXACTLY WHAT YOU RUN FROM YOU END UP CHASING.mp3', title: 'EXACTLY WHAT YOU RUN FROM YOU END UP CHASING', cover: 'igor.jpg' },
      { src: 'RUNNING OUT OF TIME.mp3', title: 'RUNNING OUT OF TIME', cover: 'igor.jpg' },
      { src: 'NEW MAGIC WAND.mp3', title: 'NEW MAGIC WAND', cover: 'igor.jpg' },
      { src: 'A BOY IS A GUN.mp3', title: 'A BOY IS A GUN', cover: 'igor.jpg' },
      { src: 'PUPPET.mp3', title: 'PUPPET', cover: 'igor.jpg' },
      { src: 'WHATS GOOD.mp3', title: "WHAT'S GOOD", cover: 'igor.jpg' },
      { src: 'GONE GONE - THANK YOU.mp3', title: 'GONE GONE / THANK YOU', cover: 'igor.jpg' },
      { src: 'I DONT LOVE YOU ANYMORE.mp3', title: "I DON'T LOVE YOU ANYMORE", cover: 'igor.jpg' },
      { src: 'ARE WE STILL FRIENDS.mp3', title: 'ARE WE STILL FRIENDS?', cover: 'igor.jpg' }
];

let currentSong = 0;

function playSong(src, name, image) {
  player.src = src;
  player.play();
  title.textContent = name;
  cover.src = image;
  currentSong = playlist.findIndex(s => s.src === src);
}

volumeSlider.addEventListener('input', () => {
  player.volume = volumeSlider.value;
});

// autoplay + loop
window.addEventListener('load', () => {
  player.play().catch(() => {
    // show small banner if autoplay is blocked
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

// when a song ends → go to the next, loop when done
player.addEventListener('ended', () => {
  currentSong = (currentSong + 1) % playlist.length;
  const next = playlist[currentSong];
  playSong(next.src, next.title, next.cover);
});
