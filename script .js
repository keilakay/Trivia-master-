let score = 0;
let timer;
let timeLeft = 30;
let current;

// ----------------------
// TRIVIA DATA
// ----------------------
const data = {
  Continents: [
    {q:"Which is the largest continent?",a:["Asia","Africa","Europe"],c:"Asia"},
    {q:"Which continent has the Sahara Desert?",a:["Africa","Asia","Australia"],c:"Africa"},
    {q:"Which continent is Antarctica?",a:["Southern","Northern","Eastern"],c:"Southern"},
    {q:"Which continent is known as the 'Dark Continent'?",a:["Africa","Asia","Europe"],c:"Africa"},
    {q:"Which continent has the most countries?",a:["Africa","Asia","Europe"],c:"Africa"},
    {q:"Which continent has the highest population?",a:["Asia","Africa","Europe"],c:"Asia"},
    {q:"Which continent has the least population?",a:["Antarctica","Oceania","Europe"],c:"Antarctica"},
    {q:"Which continent contains Russia?",a:["Europe & Asia","North America","Africa"],c:"Europe & Asia"},
    {q:"Which continent has Japan?",a:["Asia","Europe","Oceania"],c:"Asia"},
    {q:"Which continent has Brazil?",a:["South America","Africa","Asia"],c:"South America"}
  ],

  Food: [
    {q:"Which fruit is known as the 'king of fruits'?",a:["Durian","Mango","Banana"],c:"Durian"},
    {q:"Which is a popular Italian pasta?",a:["Spaghetti","Fried Rice","Burger"],c:"Spaghetti"},
    {q:"Sushi originates from which country?",a:["Japan","China","Korea"],c:"Japan"},
    {q:"Which food is made from fermented milk?",a:["Yogurt","Cheese","Ice Cream"],c:"Yogurt"},
    {q:"Which is a staple food in Mexico?",a:["Tortilla","Rice","Bread"],c:"Tortilla"},
    {q:"Which nut is used to make peanut butter?",a:["Peanuts","Almonds","Cashews"],c:"Peanuts"},
    {q:"Which vegetable is green and shaped like a tree?",a:["Broccoli","Spinach","Cabbage"],c:"Broccoli"},
    {q:"Which fruit is yellow and curved?",a:["Banana","Lemon","Pineapple"],c:"Banana"},
    {q:"Which is used to make guacamole?",a:["Avocado","Tomato","Potato"],c:"Avocado"},
    {q:"Which dessert is made with chocolate and cream?",a:["Mousse","Ice Cream","Pudding"],c:"Mousse"}
  ],

  Brands: [
    {q:"Which company makes the iPhone?",a:["Apple","Samsung","Huawei"],c:"Apple"},
    {q:"Which company makes Galaxy phones?",a:["Samsung","Apple","Sony"],c:"Samsung"},
    {q:"Which is a popular search engine?",a:["Google","Bing","Yahoo"],c:"Google"},
    {q:"Which company makes PlayStation?",a:["Sony","Microsoft","Nintendo"],c:"Sony"},
    {q:"Which company owns Instagram?",a:["Meta","Google","Snap"],c:"Meta"},
    {q:"Which brand makes Nike shoes?",a:["Nike","Adidas","Puma"],c:"Nike"},
    {q:"Which brand is known for the golden arches?",a:["McDonald's","Burger King","KFC"],c:"McDonald's"},
    {q:"Which brand makes the Air Jordan sneakers?",a:["Nike","Reebok","Adidas"],c:"Nike"},
    {q:"Which brand makes the 'ThinkPad' laptops?",a:["Lenovo","HP","Dell"],c:"Lenovo"},
    {q:"Which brand makes the 'Galaxy Tab' tablet?",a:["Samsung","Apple","Microsoft"],c:"Samsung"}
  ],

  ClothesBrands: [
    {q:"Which brand uses a swoosh logo?",a:["Nike","Adidas","Puma"],c:"Nike"},
    {q:"Which brand has three stripes?",a:["Adidas","Nike","Reebok"],c:"Adidas"},
    {q:"Which brand is known for luxury leather bags?",a:["Gucci","Nike","Puma"],c:"Gucci"},
    {q:"Which brand makes jeans called '501'?",a:["Levi's","Wrangler","Lee"],c:"Levi's"},
    {q:"Which brand makes the Air Force 1 shoes?",a:["Nike","Adidas","Puma"],c:"Nike"},
    {q:"Which brand is famous for polo shirts?",a:["Ralph Lauren","Tommy Hilfiger","Calvin Klein"],c:"Ralph Lauren"},
    {q:"Which brand has the red tab on jeans?",a:["Levi's","Wrangler","Diesel"],c:"Levi's"},
    {q:"Which brand makes sneakers called 'Stan Smith'?",a:["Adidas","Nike","Puma"],c:"Adidas"},
    {q:"Which luxury brand has an interlocking 'CC' logo?",a:["Chanel","Gucci","Prada"],c:"Chanel"},
    {q:"Which brand makes flip-flops called 'Havaianas'?",a:["Havaianas","Nike","Adidas"],c:"Havaianas"}
  ],

  FoodBrands: [
    {q:"Which company makes Nutella?",a:["Ferrero","Nestle","Kraft"],c:"Ferrero"},
    {q:"Which company makes Oreo cookies?",a:["Nabisco","Kraft","Mondelez"],c:"Nabisco"},
    {q:"Which company makes KitKat?",a:["Nestle","Mars","Hershey"],c:"Nestle"},
    {q:"Which company makes Coca-Cola?",a:["Coca-Cola","Pepsi","Dr Pepper"],c:"Coca-Cola"},
    {q:"Which company makes Pepsi?",a:["Pepsi","Coca-Cola","7UP"],c:"Pepsi"},
    {q:"Which company makes Pringles?",a:["Kellogg's","Procter & Gamble","PepsiCo"],c:"Pringles"},
    {q:"Which company makes Lay’s chips?",a:["PepsiCo","Nestle","Kraft"],c:"PepsiCo"},
    {q:"Which company makes Red Bull?",a:["Red Bull","Monster","Coca-Cola"],c:"Red Bull"},
    {q:"Which company makes Ben & Jerry's ice cream?",a:["Unilever","Nestle","Kraft"],c:"Unilever"},
    {q:"Which company makes Doritos?",a:["PepsiCo","Nestle","Kraft"],c:"PepsiCo"}
  ],

  Restaurants: [
    {q:"Which fast-food chain has golden arches?",a:["McDonald's","Burger King","KFC"],c:"McDonald's"},
    {q:"Which restaurant is famous for the Whopper?",a:["Burger King","McDonald's","Wendy's"],c:"Burger King"},
    {q:"Which chain is known for fried chicken?",a:["KFC","Popeyes","Church's Chicken"],c:"KFC"},
    {q:"Which chain is famous for burgers and shakes?",a:["Shake Shack","McDonald's","In-N-Out"],c:"Shake Shack"},
    {q:"Which chain is famous for coffee and pastries?",a:["Starbucks","Dunkin'","Costa"],c:"Starbucks"},
    {q:"Which chain sells tacos?",a:["Taco Bell","Chipotle","Qdoba"],c:"Taco Bell"},
    {q:"Which chain is famous for sandwiches?",a:["Subway","Jimmy John's","Panera"],c:"Subway"},
    {q:"Which restaurant chain has a red and white striped logo?",a:["KFC","Chick-fil-A","Popeyes"],c:"KFC"},
    {q:"Which chain is famous for donuts?",a:["Dunkin'","Krispy Kreme","Tim Hortons"],c:"Dunkin'"},
    {q:"Which chain sells wings and buffalo sauce?",a:["Buffalo Wild Wings","Wingstop","Hooters"],c:"Buffalo Wild Wings"}
  ]
};

// ----------------------
// LOAD RANDOM QUESTION
// ----------------------
function loadCategories(){
  const select=document.getElementById("category");
  for(let cat in data){
    const opt=document.createElement("option");
    opt.value=cat; opt.textContent=cat;
    select.appendChild(opt);
  }
  loadCard();
}

function loadCard(){
  resetTimer();
  const cat=document.getElementById("category").value;
  const questions=data[cat];
  current=questions[Math.floor(Math.random()*questions.length)];
  
  document.getElementById("categoryTitle").innerText=cat;
  document.getElementById("question").innerText=current.q;

  const answersDiv=document.getElementById("answers");
  answersDiv.innerHTML="";
  current.a.sort(()=>Math.random()-0.5).forEach(ans=>{
    const btn=document.createElement("button");
    btn.innerText=ans;
    btn.onclick=()=>checkAnswer(ans);
    answersDiv.appendChild(btn);
  });
}

// ----------------------
// CHECK ANSWER
// ----------------------
function checkAnswer(ans){
  if(ans===current.c) score++;
  document.getElementById("score").innerText="Score: "+score;
  nextCard();
}

// ----------------------
// TIMER FUNCTION
// ----------------------
function resetTimer(){
  clearInterval(timer);
  timeLeft=30;
  document.getElementById("timer").innerText="⏱️ "+timeLeft;
  timer=setInterval(()=>{
    timeLeft--;
    document.getElementById("timer").innerText="⏱️ "+timeLeft;
    if(timeLeft===0) nextCard();
  },1000);
}

// ----------------------
// NEXT CARD
// ----------------------
function nextCard(){
  clearInterval(timer);
  loadCard();
}

// ----------------------
// INIT
// ----------------------
loadCategories();