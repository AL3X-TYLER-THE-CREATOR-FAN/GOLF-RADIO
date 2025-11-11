  <script>
    const songs = [
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
    const player = document.getElementById('radioPlayer');
    const title = document.getElementById('songTitle');
    const cover = document.getElementById('cover');
    const volume = document.getElementById('volume');

    function playSong(src, name, img) {
      player.src = src;
      player.play();
      title.textContent = name;
      cover.src = img;
    }

    function loadSong(index) {
      const s = songs[index];
      player.src = s.src;
      title.textContent = s.title;
      cover.src = s.cover;
      player.play();
    }

    player.addEventListener('ended', () => {
      currentSong = (currentSong + 1) % songs.length;
      loadSong(currentSong);
    });

    volume.addEventListener('input', () => {
      player.volume = volume.value;
    });

    window.addEventListener('load', () => {
      loadSong(currentSong);
      player.play().catch(() => {
        document.body.addEventListener('click', () => player.play(), { once: true });
      });
    });
  </script>
