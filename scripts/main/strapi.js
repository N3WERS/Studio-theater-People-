const getNewsFromStrapi = async () => {
    const response = await fetch('http://localhost:1337/api/news/?populate=*');
    return response.json();
}

const myJson = getNewsFromStrapi();

myJson.then(function(value) {
    for (let i = 0; i < value.data.length; i++) {
        console.log(value.data[i]);

        document.getElementById('img-from-js').src = "http://localhost:1337" + value.data[i].attributes.Image.data[0].attributes.formats.large.url;
        document.getElementById('txt-from-js').textContent = value.data[i].attributes.Header;
    } 
});