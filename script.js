let quotes = []
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn =document.getElementById('new-quote')

//Get new quote
function randomQuote() {
    const quote = quotes[Math.floor(Math.random()*quotes.length)]
    //Check quote length to determine styling
    if(quote.text.length>120){
        quoteText.classList.add('long-quote')
    }else{
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text
    //Check if author field is blank
    if(!quote.author){
        quoteAuthor.textContent = 'Unknoen'
    }else{
        quoteAuthor.textContent = quote.author
    }
}

//Get quotes from API
async function getQuotes() {
    try{
    const api = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    const response = await fetch(api)
    quotes= await response.json()
    }catch(error){
        console.error('Fail to catch quotes from API')
    }
}

//Tweet quote
function tweetQuote(){
    const tweetUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`
    window.open(tweetUrl,'_blank')
}

//EventListener
twitterBtn.addEventListener('click',tweetQuote)
newQuoteBtn.addEventListener('click',randomQuote)

//On load
getQuotes()