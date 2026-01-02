
let movieName = document.querySelector("#movie");
let btn = document.querySelector("button");
let output = document.querySelector(".output");

btn.addEventListener("click", async () =>{
    let movie = movieName.value;
    let apikey = "6ef53f59";

    if(movie == ""){
        output.innerHTML = "<p> Please Enter Your Movie <p>";
        return;
    }

    let URL = `https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=${apikey}`;

    try{
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    if(data.Response === "False"){
        output.innerHTML = `<p>${data.Error}</p>`;
        return;

    }

    output.innerHTML =`
     <img src="${data.Poster}" width="100px"></img>
    <h3>${data.Title}</h3>
    <p> Plot : ${data.Plot} </p>
    <P> Year : ${data.Year}</P>
    <p> Actors: ${data.Actors}</p>
    <p>Director : ${data.Director}</p>
    <p>Rated : ${data.Rated}</p>
    <p>Genre : ${data.Genre}</p>
    <p>imdb Ratings:${data.imdbRating}</p>
    <p> BoxOffice-Collection : ${data.BoxOffice}</p>
    `;
}
    catch(error) {
        output.innerHTML = `<p>Somthing went Wrong</p>`;
        return ;

    }

});
