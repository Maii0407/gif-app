
const gifApp = (function() {
    const img = document.querySelector('img');

    async function generateGif(search) {
        search = document.getElementById('search-box');
        const link = `https://api.giphy.com/v1/gifs/translate?api_key=Lyvpyk5DHGij1wVzPJDAldQAJphYOrui&s=${search.value}`

        const response = await fetch(link, {mode: 'cors'});
        const gifData = await response.json();
        img.src = gifData.data.images.original.url;
    };

    generateGif();

    document.getElementById('change-btn').addEventListener('click', function() {
        document.location.reload();
        generateGif();
    });
})();