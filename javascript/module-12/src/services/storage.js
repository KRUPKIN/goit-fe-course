export const set = value => {
    localStorage.setItem('url-fider-app', JSON.stringify(value));
};

export const get = () => {
    const data = localStorage.getItem('url-fider-app');

    return data ? JSON.parse(data) : null;
};