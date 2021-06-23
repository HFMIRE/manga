// manga - create  update and edit and delete - manga recomedation - list npm
const title = document.getElementById(".title");
const poster = document.getElementById(".poster");

// picture + name
function getMangaData() {
  // anime?page[limit]=20&page[offset]=0
  axios
    .get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0`)
    .then(({ data }) => {
      console.log(data.data);
      const html = data.data
        .map((item) => {
          return `
            <div class="item">
            <img src=${item.attributes.posterImage.small}/> 
            <div class="item-">
            <h2>${item.attributes.titles.en_jp}</h2>
            <h5>${item.attributes.titles.ja_jp}</h5>
            <p>${item.attributes.description}</p> 
            </div>
            </div>
            `;
        })
        .join(" ");
      document.querySelector("#app").insertAdjacentHTML("afterend", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

getMangaData();
