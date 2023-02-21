
const randomQuotes = [
    {quote: "\"If you don't take risks, you can't create a future!\"",
    author: "- Monkey D. Luffy"},
    {quote: "\"All we can do is live until the day we die. Control what we can and fly free.\"",
    author: "- Deneil Young"},
    {quote: "\"Whatever you lose, you'll find it again. But what you throw away you'll never get back.\"",
    author: "- Himura Kenshin"},
    {quote: "\"I'll leave tomorrow's problems to tomorrow's me.\"",
    author: "- Saitama"},
    {quote: "\"The difference between a novice and a master is that a master has failed more times than a novice had tried.\"",
    author: "- Koro"},
    {quote: "\"I hate perfection. To be perfect is to be unable to improve any further.\"",
    author: "- Kurotsuchi Mayuri"},
    {quote: "\"Every journey begins with a single step. We just have to have patience.\"",
    author: "- Milly Thompson"},
    {quote: "\"Life is not a game of luck. If you wanna win, work hard.\"",
    author: "- Sora"},
    {quote: "\"The ticket to the future is always open.\"",
    author: "- Vash"},
    {quote: "\"We have to live a life of no regrets.\"",
    author: "- Portgas D. Ace"},
    {quote: "\"You need to accept the fact that you're not the best and have all the will to strive to be better than anyone you face.\"",
    author: "- Roronoa Zoro"},
    {quote: "\"No matter how hard or impossible it is, never lose sight of your goal.\"",
    author: "- Monkey D Luffy"},
    {quote: "\"You can deceive everyone but yourself.\"",
    author: "- Mab"}
]

function generate() {
    let i = Math.floor(Math.random() * randomQuotes.length);
    document.getElementById("quote").innerHTML = randomQuotes[i].quote;
    document.getElementById("author").innerHTML = randomQuotes[i].author;
}


