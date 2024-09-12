const apiKey = 'lztZEvMWPEx8HCD3SNcv3rgcWjlhR03V';
const limit = 10;
const gifsContainer = document.getElementById('gifsContainer');

//gifs en tendencia 
const fetchTrendingGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayGifs(data.data);
    } catch (error) {
        console.error('Error fetching GIFs:', error);
    }
};

//mostrar gifs en contenedor 
const displayGifs = gifs => {
    gifsContainer.innerHTML = gifs.length 
        ? gifs.map(gif => `
            <div class="card">
                <img src="${gif.images.fixed_height.url}" alt="${gif.title}">
                <p>${gif.title}</p>
            </div>
        `).join('') 
        : '<p>No se encontraron GIFs.</p>';
};


fetchTrendingGifs();