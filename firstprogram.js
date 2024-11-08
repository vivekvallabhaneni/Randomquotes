const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "What you do speaks so loudly that I cannot hear what you say.",
    "Believe you can and you're halfway there.",
    "Do not wait for the perfect moment. Take the moment and make it perfect.",
    "In the end, we only regret the chances we didn't take.",
    "Yesterday is past, tomorrow is future  but today is happiness.",
    "Your limitation—it's only your imagination.",
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}
