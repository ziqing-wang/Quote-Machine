const newQuoteBtn = document.getElementById('new-quote');
const btns = document.querySelectorAll('.btn');
const quoteText = document.getElementById('text');
const quoteAuthor = document.getElementById('author');
const doubleQuotes = document.querySelectorAll('.quote-text i');

getRandomQuote();
newQuoteBtn.addEventListener('click', getRandomQuote);

function getRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(displayQuote);
}

//why only works in the start? for once ?
function addAnimation(el) {
    el.classList.add('text-animation');
}

function displayQuote(res) {
    // console.log(res);
    quoteText.innerText = res.content;
    quoteAuthor.innerText = res.author;

    //uodate the link for tweet quote
    let twitterURL = document.getElementById('tweet-quote');
    const base = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=';
    const quoteLeft = '"';
    const tags = '#quote';
    twitterURL.href = `${base}"${res.content}"-${res.author}${tags}`;
    
    //change the bg color and text color
    bgColor();
    addAnimation(quoteText);
    addAnimation(quoteAuthor);
}
//change the colors of quote box
function bgColor() {
    var colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
    ];
    //get a num between 0 - 11
    let randomNum = Math.round(Math.random() * colors.length);
    //console.log(randomNum);
    //change the color of quote text and all buttons
    document.body.style.backgroundColor = colors[randomNum];
    quoteText.style.color = colors[randomNum];
    quoteAuthor.style.color = colors[randomNum];
    btns.forEach(btn => {
        btn.style.backgroundColor = colors[randomNum];
    });
    doubleQuotes.forEach(i => {
        i.style.color = colors[randomNum];
    });
}