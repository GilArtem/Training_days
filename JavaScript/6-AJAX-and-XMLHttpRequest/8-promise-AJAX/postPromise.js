function post(url, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.addEventListener("load", () => {
            if (xhr.status >= 200 && xhr.status < 400) resolve(xhr.response);
            else reject(new Error(`Request failed: ${xhr.statusText}`));
        });
        xhr.addEventListener("error", () => fail(new Error("Network error")));
        xhr.send(data);
  });
}
post("http://localhost:3000/user", "Tom")
    .then(response =>  console.log(response))
    .catch(error => console.error(error));