// &lang=${lang.value}&country=${country.value}

let lang = document.getElementById('lang')
let country = document.getElementById('country');
let category = document.getElementById('category');


const apiUrl = `https://gnews.io/api/v4/search?q=example&category=${category.value}&apikey=${myApi}`;

const loading = document.getElementById('loading')
const container = document.getElementById('news-container')
console.log(myApi)

async function fetchNews() {
    try{
    let response = await fetch(apiUrl);
    let data = await response.json();
    showNews(data.articles)
    }
    catch(error){
        loading.textContent ="Error loading news...."
    }
}

function showNews(articles){
    loading.style.display ='none'
    if (!articles || articles.length === 0) {
        container.innerHTML = `<p> No news found </p>`
        return;
    }
    articles.forEach(article => {
        container.innerHTML += `
        <div class="newsItem" onclick='window.open("${article.url}")'>
        <img src="${article.image}" class="news-img">
        <div class="news">
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        </div>
        </div>
        `
    });    
}

// fetchNews()