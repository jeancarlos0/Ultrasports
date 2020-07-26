import { MediaPlayer } from 'dashjs';

const players1 = document.querySelectorAll('.player1');
const players2 = document.querySelectorAll('.player2');

//Videos processados e armazenados na plataforma Cloudinary

let url = "https://res.cloudinary.com/dpwq6mdmq/video/upload/sp_full_hd/v1595788336/video2.mpd";
let url2 = "http://res.cloudinary.com/dpwq6mdmq/video/upload/sp_full_hd/v1595787463/video1.mpd";

players1.forEach(player => {
    let newPlayer = MediaPlayer().create();
    newPlayer.initialize(player, url, false)
});

players2.forEach(player => {
    let newPlayer = MediaPlayer().create();
    newPlayer.initialize(player, url2, false)
});
