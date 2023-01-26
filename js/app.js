// DOM Elements
const quoteContainer = document.querySelector('#quote-container');
const quoteText = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#author');
const twitterBtn = document.querySelector('#twitter');
const newQuoteBtn = document.querySelector('#new-quote');
const loader = document.querySelector('#loader');
console.log(loader);

// Global Variables
let quotes = [];

// Functionality
const showLoader = () => {
  quoteContainer.classList.add('hidden');
  loader.hidden = false;
  console.log(quoteContainer.hidden);
};

showLoader();

const hideLoader = () => {
  loader.hidden = true;
  quoteContainer.classList.remove('hidden');
};

const showNewQuote = () => {
  showLoader();
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.text.length > 200
    ? quoteText.classList.add('quote__text--long')
    : quoteText.classList.remove('quote__text--long');

  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;
  hideLoader();
};

const getQuotesFromAPI = (async () => {
  showLoader();
  const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

  try {
    const response = await fetch(apiURL);
    quotes = await response.json();
    showNewQuote();
  } catch (error) {
    console.log(error);
  }
})();

const sendToTwitter = () => {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterURL, '_blank');
};

// Event listeners
twitterBtn.addEventListener('click', sendToTwitter);
newQuoteBtn.addEventListener('click', showNewQuote);
