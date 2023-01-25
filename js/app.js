// DOM Elements
const quoteCointainer = document.querySelector('#quote-cointainer');
const quoteText = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#author');
const twitterBtn = document.querySelector('twitter');
const newQuoteBtn = document.querySelector('#new-quote');

// Global Variables
let quotes = [];

// Functionality
const showNewQuote = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;
};

const getQuotesFromAPI = (async () => {
  const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

  try {
    const response = await fetch(apiURL);
    quotes = await response.json();
    showNewQuote();
  } catch (error) {
    console.log(error);
  }
})();
