const jokes =  document.querySelector(".jokes");
const btn =  document.querySelector("button");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";


let getjoke =  ( ()=>{
    fetch(url)
    .then(data => data.json())
    .then(item  => 
        jokes.innerHTML = `${item.joke}`,
    )
//     fetch(url): This line initiates a fetch request to the API endpoint defined in url.

// .then(data => data.json()): This part of the fetch promise chain processes the fetched response as JSON data.

// .then(item => jokes.innerHTML =${item.joke},): This part accesses the joke property from the parsed JSON data and sets the inner HTML content of the jokes element to the joke text.

});

btn.addEventListener('click',getjoke);
getjoke();
// The first call to getjoke() outside the event listener ensures a joke is displayed on page load without needing a button click.