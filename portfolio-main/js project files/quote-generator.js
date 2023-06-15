const quoteButton = document.querySelector(".get-quote");
const quote = document.querySelector(".quote")

const quotes = ['"Be yourself; everyone else is already taken" - Oscar Wilde', 
'“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe" - Albert Einstein',
'“So many books, so little time.” - Frank Zappa', 
'“A room without books is like a body without a soul.” - Marcus Tullius Cicero', 
'“If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.” - J.K Rowling',
'“If you tell the truth, you don\'t have to remember anything.” - Mark Twain',
'“Live as if you were to die tomorrow. Learn as if you were to live forever.” - Mahatma Ghandi',
'“I am so clever that sometimes I don\'t understand a single word of what I am saying.” - Oscar Wilde' ];

quoteButton.addEventListener("click", function(){
    quote.innerText = quotes[Math.floor(Math.random()*7)+1];
});

