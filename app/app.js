// Variables
const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

getQuote(apiUrl);

// Functions

// Calls the API and returns the data
async function getQuote(url){
    const response = await fetch(url);
    const data = await response.json();
    // return data;
    // console.log(data);

    quote.textContent = data.content;
    author.textContent = data.author;
}

function postQuote(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.textContent + " — by " + author.textContent, "Post Quote on X", "width=600, height=300");
}


