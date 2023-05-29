const strapiUrl = "http://localhost:1337"

const getInfoFromStrapi = async () => {
    const response = await fetch(strapiUrl + "/api/o-teatre/?populate=*");
    return response.json();
}

getInfoFromStrapi().then(function(value) {
    let parentDiv = document.querySelector("div.block-info");
    let div = document.createElement("div");
    div.className = "block_info-about-studio";
    div.innerHTML =
        `
            <div class="heading_info-about">
            </div>

            <div class="main-block_info-about">
                <div class="info-about_image">
                    <img src="./src/img/about1.jpg" alt="#">
                    <img src="./src/img/about2.jpg" alt="#">
                </div>

                <div class="info-about_text">
                </div>
            </div>
        `;

    parentDiv.insertBefore(div, parentDiv.lastChild);
    document.querySelector("div.heading_info-about").textContent = value.data.attributes.header;
    document.querySelector("div.info-about_text").textContent = value.data.attributes.text;

    for (let i = 0; i < value.data.attributes.images.data.length; i++) {
        let parentDiv = document.querySelector("info-about_image");
        let img = document.createElement("img");
        img.src = strapiUrl + value.data.attributes.images.data[i].attributes.url
    }
});

const getNewsFromStrapi = async () => {
    const response = await fetch(strapiUrl + "/api/news/?populate=*");
    return response.json();
}

getNewsFromStrapi().then(function(value) {
    if (value.data.length == 0) return 1;

    let parentDiv = document.querySelector("div.block-info");
    let div = document.createElement("div");
    div.className = "block_news";
    div.innerHTML =
        `
            <div class="heading_news">
                НОВОСТИ
            </div>
            <div class="main_block-news">

            </div>
        `;

    parentDiv.insertBefore(div, parentDiv.lastChild);

    for (let i = 0; i < value.data.length; i++) {
        let parentDiv = document.querySelector("div.main_block-news");
        let div = document.createElement("div");
        div.className = "news-card-wrapper";
        div.innerHTML =
            `
                <div class="news-card" onclick="openNews(this)">
                    <img id="Img" class="image-news" src="">
                    <div class="block-text-news">
                        <span class="news-header" id="Header"></span>
                        <span class="news-more">Читать подробнее...</span>
                    </div>
                </div>
                <div class="about-wrapper">
                    <span class="about-news" id="ab-news"></span>
                </div>
            `;
        parentDiv.insertBefore(div, parentDiv.firstChild);

        document.getElementById('Img').src = strapiUrl + value.data[i].attributes.image.data[0].attributes.url;
        document.getElementById('Header').textContent = value.data[i].attributes.header;
        document.getElementById("ab-news").textContent = value.data[i].attributes.text;
    } 
});