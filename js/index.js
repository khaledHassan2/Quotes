
var quote= [
            `“Be yourself; everyone else is already taken.”
            <br/> ― Oscar Wilde`,

            `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
            <br/> ― J.K. Rowling, Harry Potter and the Goblet of Fire`,

            `“In three words I can sum up everything I've learned about life: it goes on.”
            <br/> ― Robert Frost`,

            `“Be the change that you wish to see in the world.”
            <br/>― Mahatma Gandhi`,

            `“You only live once, but if you do it right, once is enough.”
            <br/>― Mae West`,

            `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
            <br/> ― Dr. Seuss`,

            `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
            <br/> ― Bernard M. Baruch`,

            `“A room without books is like a body without a soul.”
            <br/> ― Marcus Tullius Cicero`,

            `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
            <br/> ― Albert Einstein`,
            
            `“So many books, so little time.”
            <br/> ― Frank Zappa`

];
function addRandom(){
    var random = Math.floor(Math.random()*quote.length);
    document.getElementById('demo').innerHTML=quote[random];
    
}
