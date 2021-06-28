const app = document.querySelector(".app")


function getMangaData() {
    axios
        .get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0`)
        .then(({ data }) => {
            console.log(data.data);
            const html = data.data
            let htmlString = ""
            const itemInfo = html.forEach((item, index) => {
                htmlString += `
                 <div class="card" style="width:400px">
                 <img src="${item.attributes.posterImage.small}" class="card-img-top" alt="...">
                 <div class="card-body">
                   <h5 class="card-title">${item.attributes.titles.en_jp}</h5>
                   <div class="article">
                   <div class="text short">
                   <p class="card-text">${item.attributes.description}</p>
                 </div>
                 <span class="read-more">read more</span>
                 </div>
                 </div>
                 </div>
              `;
            })
            app.innerHTML = htmlString;
        })
        .catch((error) => {
            console.log(error);
        });
}

getMangaData();

$(document).ready(function() {
    $(".read-more").click(function() {
        var $elem = $(this).parent().find(".text");
        if ($elem.hasClass("short")) {
            $elem.removeClass("short").addClass("full");
        } else {
            $elem.removeClass("full").addClass("short");
        }
    });
});