$(document).ready(function() {
   $("#title1").click(function(){
       $("#content1").show("slide", { direction: "up" }, 1200);
   });

   $("#title2").click(function(){
       $("#content2").show("slide", { direction: "up" }, 1200);
   });

   $("#title3").click(function(){
       $("#content3").show("slide", { direction: "up" }, 1200);
   });

   $("#title4").click(function(){
       $("#content4").show("slide", { direction: "up" }, 1200);
   });

   // Fetch news from an API
   function fetchNews() {
    $.ajax({
        url: 'https://newsapi.org/v2/everything?q=company&apiKey=024585c7091342e5ad248d80374aff1f',
        method: 'GET',
        success: function(response) {
            displayNews(response.articles);
        },
        error: function(error) {
            console.log('Error fetching news:', error);
        }
    });
}

// Display news in the slider
function displayNews(articles) {
    const newsSlider = $('.news-slider');
    articles.forEach(article => {
        const newsItem = `
            <div class="news-item">
                <img src="${article.urlToImage}" alt="${article.title}">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            </div>
        `;
        newsSlider.append(newsItem);
    });
}

// Initialize news fetch
fetchNews();

// Slider functionality
$('#next').click(function() {
    $('.news-slider').animate({ scrollLeft: '+=300' }, 500);
});

$('#prev').click(function() {
    $('.news-slider').animate({ scrollLeft: '-=300' }, 500);
});

});
