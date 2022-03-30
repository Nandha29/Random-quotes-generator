const quoteList=[
    {
        quote:"If you want to shine like a sun first burn like a sun"
    },
    {
        quote:"The gentleman always have a standard"
    },
    {
        quote:"Those who fly alone have a strongest wings"
    },
    {
        quote:"Trust your dreams it given to you for a reason"
    },
    {
        quote:"Man Maketh Manners"
    }
];

const previous = document.getElementById("previous");
const random = document.getElementById("random");
const next = document.getElementById("next");
const quote = document.getElementById("quote");
let content = 0;

previous.addEventListener('click',()=>{
    let item=content--;
    let overall=quoteList[item];
    quote.innerHTML=overall.quote;
})

next.addEventListener('click',()=>{
    let item=content++;
    let overall=quoteList[item];
    quote.innerHTML=overall.quote;
})
random.addEventListener('click',()=>{
    let item = Math.floor(Math.random()*quoteList.length)
    let overall=quoteList[item];
    quote.innerHTML=overall.quote;
})