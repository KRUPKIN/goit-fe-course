const API_KEY = '9980802-b2da01a4f96ab441a50650705';

export const fetchImages = ({ query, count, page }) => {

    const url = `https://pixabay.com/api/?image_type=photo&q=${query}&per_page=${count}&page=${page}&key=${API_KEY}&orientation=horizontal`;

    return fetch(url)
        .then(response => {
            if (response.ok) return response.json();

        throw new Error('error: ' + response.statusText);
        })
    .then(data => data.hits)
    .catch(err => console.log(err));
};

