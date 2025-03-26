import fetchDataApi from "./fetchDataApi.js";
export default async function displayData() {

    const data = await fetchDataApi();
// je dois récupérer les données de l'api quote, author, id, permalink, photo, total_quotes

    //selector 
    // const SELECT_BLOCKQUOTE = document.querySelector('#blockquote-container'); //Select the blockquote
    // console.log("mon block : ", SELECT_BLOCKQUOTE) // debug
    const SELECT_THE_QUOTE = document.querySelector('.the-quote'); //Select the quote
    console.log(SELECT_THE_QUOTE) // debug
    SELECT_THE_QUOTE.innerHTML = data.quote; //Insert the quote

    const SELECT_DIV_IMAGE = document.querySelector('#image-spirit'); //Select the image
    console.log(SELECT_DIV_IMAGE) // debug

    SELECT_DIV_IMAGE.src = data.photo; //Insert the image
    const SELECT_AUTHOR = document.querySelector('#author'); //Select the author
    console.log(SELECT_AUTHOR) // debug

    SELECT_AUTHOR.innerHTML = data.author; //Insert the author
    const SELECT_NUMBER_OF_QUOTES = document.querySelector('.number-quote'); //Select the number of quotes

    console.log(SELECT_NUMBER_OF_QUOTES) // debug
    SELECT_NUMBER_OF_QUOTES.innerHTML = "quote  " + data.total_quotes; //Insert the number of quotes

}