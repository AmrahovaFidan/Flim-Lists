//DOMS
let movieDetail = document.querySelector("#movieDetail");
let movieSearch = document.querySelector("#movieSearch");



movieSearch.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        const movieTitil = this.value;
        getMovie(movieTitil);
        this.value = "";
    }
});


function getMovie(a) {
    const myPromises = fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=cd6756c7&t=${a}`);

    myPromises
        .then((res) => {
            const dataPromises = res.json();
            return dataPromises;
        })
        .then((data) => {
            render(data);
        })
        .catch((err) => {
            console.log(err);
        });
}


function render(item) {
    movieDetail.innerHTML =
        ` 
        <div id="movieDetail">
                <img src="${item.Poster}" alt="" height="300" style="object-fit: cover;" class="img">
                <h1 class="title">${item.Title}</h1>
                <ul>
                    <li class="liTag">Country: ${item.Country}</li>
                    <li class="liTag">Awards: ${item.Awards}</li>
                    <li class="liTag">Year: ${item.Year}</li>
                    <li class="liTag">Language: ${item.Language}</li>
                    <li class="liTag reytinq">${item.imdbRating}</li>

                </ul>
            </div>
            `

}