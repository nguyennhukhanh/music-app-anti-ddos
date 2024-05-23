const songs = [
  {
    id: '1',
    title: 'Em Hát Ai Nghe',
    artist: 'Orange',
    artwork:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e5777b3-f466-41f0-9cfd-4e078da8592c/dgv1tks-39a6df02-a290-4b17-8198-371eb77b1b4e.png/v1/fit/w_800,h_1206,q_70,strp/catgirl_21_by_aseve18_dgv1tks-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwNiIsInBhdGgiOiJcL2ZcLzBlNTc3N2IzLWY0NjYtNDFmMC05Y2ZkLTRlMDc4ZGE4NTkyY1wvZGd2MXRrcy0zOWE2ZGYwMi1hMjkwLTRiMTctODE5OC0zNzFlYjc3YjFiNGUucG5nIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5KLSfNrFGecU9w--Qw427zmIObzY4LHLeEGHoXlMFEI',
    url: 'https://firebasestorage.googleapis.com/v0/b/schedule-5555.appspot.com/o/Y2meta.app%20-%20Em%20H%C3%A1t%20Ai%20Nghe%20-%20VD%20_%202Ao%20Muzic%20_%20Nh%C6%B0ng%20t%C3%B4i%20cho%20nhi%E1%BB%81u%20violin%20h%C6%A1n%20_%20XoX%20Music%20(256%20kbps).mp3?alt=media&token=7b6346fa-87ff-45ce-9f64-37de4e93ca0f',
    category: '1',
  },

  {
    id: '2',
    title: 'Buông Đôi Tay Nhau Ra',
    artist: 'MTP',
    artwork:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9ad322c-d320-48ab-8a6b-f22b3fe5ace1/dgf6wt4-3cf7ab7d-5ff1-4dd3-879f-a709cc94f7a8.png/v1/fill/w_1194,h_669,q_70,strp/rikka_by_furukawa_rikka_dgf6wt4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzE4IiwicGF0aCI6IlwvZlwvYzlhZDMyMmMtZDMyMC00OGFiLThhNmItZjIyYjNmZTVhY2UxXC9kZ2Y2d3Q0LTNjZjdhYjdkLTVmZjEtNGRkMy04NzlmLWE3MDljYzk0ZjdhOC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JIoZhlbykWFZ5mNDlNZ6UYOj4FHQmFvJA4vGgLu7gbI',
    url: 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FBuongDoiTayNhauRa.mp3?alt=media&token=176b65b3-9b78-4d2d-93d3-a438838157aa',
    category: '1',
  },
  {
    id: '3',
    title: 'Vây Giữ',
    artist: '王靖雯不胖',
    artwork:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e512089-0948-420a-ad1e-3f38d42e45cb/dg5f0tp-bb5faeda-38d0-4dfd-b5e7-d7768487cc03.jpg/v1/fit/w_828,h_1182,q_70,strp/cold_heart_by_paranormal_ghouls_dg5f0tp-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzVlNTEyMDg5LTA5NDgtNDIwYS1hZDFlLTNmMzhkNDJlNDVjYlwvZGc1ZjB0cC1iYjVmYWVkYS0zOGQwLTRkZmQtYjVlNy1kNzc2ODQ4N2NjMDMuanBnIiwid2lkdGgiOiI8PTg5NiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.mybrf_f9PtLUbTr12MxxItMNpfvtvJJk052-u5boOYg',
    url: 'https://firebasestorage.googleapis.com/v0/b/schedule-5555.appspot.com/o/Y2meta.app%20-%20%5BVietsub%5D%20V%C3%A2y%20Gi%E1%BB%AF%20-%20V%C6%B0%C6%A1ng%20T%C4%A9nh%20V%C4%83n%20Kh%C3%B4ng%20M%E1%BA%ADp%20_%20%E6%B2%A6%E9%99%B7%20-%20%E7%8E%8B%E9%9D%96%E9%9B%AF%E4%B8%8D%E8%83%96%20(256%20kbps).mp3?alt=media&token=e31f689f-a004-4579-8945-67f360bf523c',
    category: '1',
  },
  {
    id: '4',
    title: 'So Far Away',
    artist: 'Martin Garrix',
    artwork:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/60e491ec-1b9e-40d3-9c70-7ed73a48fea4/dfb61ti-78f6da16-e593-4ab3-9b49-418ed4f326f7.png/v1/fill/w_894,h_894,q_70,strp/ai_art_by_adellanuki_dfb61ti-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzYwZTQ5MWVjLTFiOWUtNDBkMy05YzcwLTdlZDczYTQ4ZmVhNFwvZGZiNjF0aS03OGY2ZGExNi1lNTkzLTRhYjMtOWI0OS00MThlZDRmMzI2ZjcucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.D1b_ZLguqJ_eENPuBs9EYoHFIWSxX7sxM56_Xr12SBk',
    url: 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FSoFarAway-MartinGarrixDavidGuettaJamieScottRomyDya-5298615.mp3?alt=media&token=c33dd135-b0e9-4961-a728-3ff3e8f1d3e4',
    category: '2',
  },
  {
    id: '5',
    title: 'Vacation',
    artist: 'Damon Empero ft. Veronica',
    artwork:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06ddd246-6c9d-43e4-a170-cf8bfa893b62/dgnjm56-b3ba8b30-9dc1-47c6-b341-ed57c53a7cbf.jpg/v1/fill/w_900,h_540,q_75,strp/space_jellyfish_galaxy_wallpaper_by_rebelsfantasyworld_dgnjm56-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA2ZGRkMjQ2LTZjOWQtNDNlNC1hMTcwLWNmOGJmYTg5M2I2MlwvZGduam01Ni1iM2JhOGIzMC05ZGMxLTQ3YzYtYjM0MS1lZDU3YzUzYTdjYmYuanBnIiwiaGVpZ2h0IjoiPD01NDAiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzA2ZGRkMjQ2LTZjOWQtNDNlNC1hMTcwLWNmOGJmYTg5M2I2MlwvcmViZWxzZmFudGFzeXdvcmxkLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.s9BHAjEp394Ta1FzfPDOLCw4dvK3KNxGGcnvdd3OErY',
    url: 'https://firebasestorage.googleapis.com/v0/b/schedule-5555.appspot.com/o/Y2meta.app%20-%20Damon%20Empero%20ft.%20Veronica%20-%20%20Vacation%20_%20Tropical%20House%20_%20(256%20kbps).mp3?alt=media&token=c7871254-0368-43ff-9f16-9eb19fc91098',
    category: '2',
  },
  {
    id: '6',
    title: 'Nụ Hồng Mong Manh',
    artist: 'Bích Phương',
    artwork:
      'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fnuhongmongmanh.jpg?alt=media&token=1ef25309-2a2b-4efe-bec4-a40674ae8a3c',
    url: 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FN%E1%BB%A5%20H%E1%BB%93ng%20Mong%20Manh.mp3?alt=media&token=324cd97f-4dc0-49d7-87fd-f02bbb0b5d69',
    category: '4',
  },
  {
    id: '7',
    title: 'Em Của Ngày Hôm Qua',
    artist: 'MTP',
    artwork:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99d81a61-4db2-4378-aef3-f2db4fda0687/dhf7ukd-6fd8db88-f96e-492c-9291-fe9306e74fe7.jpg/v1/fit/w_828,h_1486,q_70,strp/high_quality_detailed_illustration_of_a_fantastic__by_stunningimages_dhf7ukd-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjI5OCIsInBhdGgiOiJcL2ZcLzk5ZDgxYTYxLTRkYjItNDM3OC1hZWYzLWYyZGI0ZmRhMDY4N1wvZGhmN3VrZC02ZmQ4ZGI4OC1mOTZlLTQ5MmMtOTI5MS1mZTkzMDZlNzRmZTcuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZWQA940Rzy5TxNm-2t-8YqsdfKlLZ78ktWYDscm1F34',
    url: 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FEmCuaNgayHomQua.mp3?alt=media&token=6cb1c7bd-8434-4bc7-9988-7f3eca1e28f4',
    category: '1',
  },
  {
    id: '8',
    title: 'Bạch Xà Nhi',
    artist: 'PHAN ANN X BẢO JEN',
    artwork:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb16875d-c1a3-4ada-aea3-91fd19d997ef/dg8034m-40258ea8-0f55-4c4f-b3c3-afe62e8073f3.jpg/v1/fit/w_828,h_1472,q_70,strp/_m07d2__ganyu_x_rain_by_namakxin_dg8034m-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcL2NiMTY4NzVkLWMxYTMtNGFkYS1hZWEzLTkxZmQxOWQ5OTdlZlwvZGc4MDM0bS00MDI1OGVhOC0wZjU1LTRjNGYtYjNjMy1hZmU2MmU4MDczZjMuanBnIiwid2lkdGgiOiI8PTEwODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.fcTuNv4s8_pJGhhch1v1wRKcnuvf4OiAfNWQxRz7YwI',
    url: 'https://firebasestorage.googleapis.com/v0/b/schedule-5555.appspot.com/o/Y2meta.app%20-%20B%E1%BA%A0CH%20X%C3%80%20NHI%20(PHI%C3%8AN%20B%E1%BA%A2N%20NH%E1%BA%B8)%20_%20PHAN%20ANN%20X%20B%E1%BA%A2O%20JEN%20_%20G5R%20(256%20kbps).mp3?alt=media&token=258d2d13-d42e-433b-8053-c9e311ae4d22',
    category: '1',
  },
  {
    id: '9',
    title: 'Vở Kịch Của Em',
    artist: 'Tất Cả Nghệ Sĩ',
    artwork:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6782c1d8-7c4d-474e-a863-8b1acd9c3307/dgeccor-68d23bdb-9baa-4b69-829d-79b18daedc4d.png/v1/fit/w_720,h_680,q_70,strp/hi__by_toradoromon_dgeccor-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgwIiwicGF0aCI6IlwvZlwvNjc4MmMxZDgtN2M0ZC00NzRlLWE4NjMtOGIxYWNkOWMzMzA3XC9kZ2VjY29yLTY4ZDIzYmRiLTliYWEtNGI2OS04MjlkLTc5YjE4ZGFlZGM0ZC5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.JlEeIBqoTjrvEbHGQ6J2C_MLVL94mAqCyMlT0lkgj6Y',
    url: 'https://firebasestorage.googleapis.com/v0/b/schedule-5555.appspot.com/o/Y2meta.app%20-%20V%E1%BB%9F%20K%E1%BB%8Bch%20C%E1%BB%A7a%20Em%20ft%20V%C3%A2y%20Gi%E1%BB%AF%20Remix%20-%20(%20HuyN%20x%20Tr%C6%B0%E1%BB%9Dng%20Alex%20)%20%F0%9F%8D%91%20Th%E1%BA%ADt%20qu%C3%A1%20kh%C3%B3%20%C4%91%E1%BB%83%20anh%20qu%C3%AAn%20ng%C6%B0%E1%BB%9Di%20remix%20(256%20kbps).mp3?alt=media&token=6bc5f4c4-4729-4c65-b73b-1fd1a4250e13',
    category: '1',
  },
  {
    id: '10',
    title: 'Futari No Kimochi',
    artist: 'Inuyasha Remix',
    artwork:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb16875d-c1a3-4ada-aea3-91fd19d997ef/dg0iiwk-087e59a8-1394-4b24-b2be-c7ed6ba506c5.jpg/v1/fit/w_828,h_466,q_70,strp/_p02b4__yelan_by_namakxin_dg0iiwk-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2NiMTY4NzVkLWMxYTMtNGFkYS1hZWEzLTkxZmQxOWQ5OTdlZlwvZGcwaWl3ay0wODdlNTlhOC0xMzk0LTRiMjQtYjJiZS1jN2VkNmJhNTA2YzUuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.RwgWhuxruObWSb4CvWlmyVVOCblnsDoIZ1mDv5JYCmE',
    url: 'https://firebasestorage.googleapis.com/v0/b/schedule-5555.appspot.com/o/Y2meta.app%20-%20Inuyasha%20Remix%20-%20Futari%20No%20Kimochi%20(256%20kbps).mp3?alt=media&token=b4fc8b34-3504-484d-8972-338fbd2da1ee',
    category: '1',
  },
];

const $ = document.querySelector.bind(document);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const $$ = document.querySelectorAll.bind(document);

const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('.progress');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const playlist = $('.playlist');

var isPlaying = false;
var isRandom = false;
var isRepeat = false;

var currentIndex = 0;

function start() {
  showPlaylist();
  theSongIsPlaying();
  handleMusicPlayback();
  timer();
  changeTime();
  nextSong();
  prevSong();
  randomSong();
  repeatSong();
  clickSong();
}
start();

// // Render song list
function showPlaylist() {
  const htmls = songs.map((song, index) => {
    return `<div class="song${index === currentIndex ? ' active' : ''}" data-index=${index}>
            <div class="thumb"
                style="background-image: url('${song.artwork}')">
            </div>
            <div class="body">
                <h3 class="title">${song.title}</h3>
                <p class="author">${song.artist}</p>
            </div>
            <div class="option">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>`;
  });
  playlist.innerHTML = htmls.join('');
}

// Render the first song playing
function theSongIsPlaying() {
  var currentSong = songs[currentIndex];
  heading.textContent = currentSong.title;
  cdThumb.style.backgroundImage = `url('${currentSong.artwork}')`;
  audio.src = currentSong.url;
}

// Handle music playback + spin music discs
function handleMusicPlayback() {
  // Handle spinning music discs
  const cdThumbAnimate = cdThumb.animate([{ transform: 'rotate(360deg)' }], {
    duration: 10000,
    iterations: Infinity,
  });
  cdThumbAnimate.pause();

  // Handle music playback
  playBtn.onclick = function () {
    isPlaying ? audio.pause() : audio.play();
  };

  audio.onplay = function () {
    isPlaying = true;
    player.classList.add('playing');
    cdThumbAnimate.play();
    showPlaylist();
  };
  audio.onpause = function () {
    isPlaying = false;
    player.classList.remove('playing');
    cdThumbAnimate.pause();
  };
}

// Handle music playback time
function timer() {
  audio.ontimeupdate = function () {
    progress.value = (Math.floor(audio.currentTime) * 100) / audio.duration;
  };
}

// Handle rewinding the song based on the number of seconds changed
function changeTime() {
  progress.oninput = function (e) {
    let desiredTime = e.target.value;
    audio.currentTime = (audio.duration / 100) * desiredTime;
  };
}

// Go forward one song
function nextSong() {
  nextBtn.onclick = function () {
    if (isRandom) {
      playRandomSong();
    } else {
      currentIndex++;
      currentIndex >= songs.length ? (currentIndex = 0) : false;
    }
    theSongIsPlaying();
    audio.play();
    scrollToActiveSong();
  };
}

// Backward 1 song
function prevSong() {
  prevBtn.onclick = function () {
    if (isRandom) {
      playRandomSong();
    } else {
      currentIndex--;
      currentIndex < 0 ? (currentIndex = songs.length - 1) : false;
    }
    theSongIsPlaying();
    audio.play();
    scrollToActiveSong();
  };
}

// Change color when Random a song
function randomSong() {
  randomBtn.onclick = function () {
    isRandom = !isRandom;
    randomBtn.classList.toggle('active', isRandom);
  };
}

// Random a song
function playRandomSong() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * songs.length);
  } while (newIndex === songs.currentIndex);
  currentIndex = newIndex;
}

// Repeat a song
function repeatSong() {
  repeatBtn.onclick = function () {
    if (isRepeat) {
      isRepeat = false;
      repeatBtn.classList.remove('active');
    } else {
      isRepeat = true;
      repeatBtn.classList.add('active');
      audio.loop = true;
      audio.play();
    }
  };
}

// Move the frame according to the song being played
function scrollToActiveSong() {
  setTimeout(() => {
    $('.song.active').scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, 500);
}

function clickSong() {
  playlist.onclick = function (e) {
    // If it cannot find itself, it will return its parent or child: e.target.closest(element)
    let notSongActive = e.target.closest('.song:not(.active)');
    let notSongOption = e.target.closest('.option');
    if (notSongActive || notSongOption) {
      if (notSongActive) {
        currentIndex = Number(notSongActive.dataset.index);
        theSongIsPlaying();
        audio.play();
      }
      if (notSongOption) {
      }
    }
  };
}
