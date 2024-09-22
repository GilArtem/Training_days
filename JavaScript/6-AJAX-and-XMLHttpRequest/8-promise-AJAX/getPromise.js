function get(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {
            if(xhr.status >= 200 && xhr.status < 400) resolve(xhr.response);
            else reject(new Error(`Request failed: ${xhr.statusText}`));
        });
        xhr.addEventListener('error', () => reject)
    })
};

get('http://localhost:3000/hello')
    .then(res => console.log(res))
    .catch(err => console.error(error));
