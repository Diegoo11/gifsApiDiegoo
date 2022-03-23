/* eslint-disable no-console */
const merry = () => {
    console.log('gatita bonita');
};
merry();
const btnGif = document.getElementById('btnGif');
const imgGif = document.getElementById('imgGif');

function askGif() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=arequipa&appid=bf3845e91d594d20dd852be6dd9e6a9b', { mode: 'cors' })
        .then((x) => x.json()).then((y) => { console.log(y); });
}

btnGif.onclick = askGif;
