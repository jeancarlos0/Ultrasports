import { MediaPlayer } from 'dashjs';

const players = document.querySelectorAll('.player');

let url = "https://dash.akamaized.net/envivio/Envivio-dash2/manifest.mpd";
//let url = "videos/video1/manifest.mpd"
//let url2 = "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd";
//let player = MediaPlayer().create();
//let player2 = MediaPlayer().create();

players.forEach(player => {
    let newPlayer = MediaPlayer().create();
    newPlayer.initialize(player, url, false)
});

//player.initialize(document.querySelector('#player1'), url, false);
//player2.initialize(document.querySelector('#player2'), url2, false); 