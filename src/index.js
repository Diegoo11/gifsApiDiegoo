/* eslint-disable no-console */
const merry = () => {
    console.log('gatita bonita');
};
merry();
const btnGif = document.getElementById('btnGif');
const imgGif = document.getElementById('imgGif');

function askGif() {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=JkHEEFcPelmB7FkjO1QLrNAMn9NV61Vy&s=cats', { mode: 'cors' })
        .then((x) => x.json()).then((y) => { imgGif.src = y.data.images.original.url; });
}

btnGif.onclick = askGif;
