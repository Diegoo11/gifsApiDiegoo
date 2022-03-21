/* eslint-disable no-console */
const merry = () => {
    console.log('gatita bonita');
};
merry();
const imgGif = document.getElementById('imgGif');
const form = document.querySelector('form');
const text = document.querySelector('input');

function askGif(busqueda) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=JkHEEFcPelmB7FkjO1QLrNAMn9NV61Vy&s=${busqueda}`, { mode: 'cors' })
        .then((x) => x.json()).then((y) => { imgGif.src = y.data.images.original.url; });
}
askGif();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const search = text.value;
    askGif(search);
    form.reset();
});
