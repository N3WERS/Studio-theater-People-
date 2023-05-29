function openNews(clickElem) { 
    const allNews = Array.from(document.getElementsByClassName("news-card"));
    const numberNews = allNews.indexOf(clickElem);
    const newsText = Array.from(document.getElementsByClassName("about-wrapper"));
    if (newsText[numberNews].classList.contains("about-wrapper-active")){
        newsText[numberNews].className = "about-wrapper about-wrapper-disactive";
    }
    else{
        newsText[numberNews].className = "about-wrapper about-wrapper-active";
    }
}