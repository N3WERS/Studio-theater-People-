const strapiUrl = "http://localhost:1337"

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

    for (let i = 0; i < value.data.reverse().length; i++) {
        let parentDiv = document.querySelector("div.main_block-news");
        let div = document.createElement("div");
        div.className = "news_card";
        div.innerHTML =
            `
                <img class="news-card_image" src="" alt="#" id="Img">
                    <div class="news-card_text">
                        <span class="name-news" id="Header"></span>
                        <span class="more-news">Читать подробнее...</span>
                </div>
            `;
        parentDiv.insertBefore(div, parentDiv.firstChild);

        document.getElementById('Img').src = strapiUrl + value.data[i].attributes.image.data[0].attributes.url;
        document.getElementById('Header').textContent = value.data[i].attributes.header;
    } 
});