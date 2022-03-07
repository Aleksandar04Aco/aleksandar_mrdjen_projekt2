let clickCount = 0;
let cpsAmount = 0;
let clickCountText = document.querySelector(".click-count-text");

let clickButton = document.querySelector(".cookie-btn");

clickButton.addEventListener("click", handleClick);

function handleClick() {
  clickCount += 1;
}

setInterval(() =>{ 
  clickCount += cpsAmount/20;

  clickCountText.innerHTML = Math.floor(clickCount);
}, 50);
let upgradeMultiplier = 1.15

let grandmaButton = document.querySelector(".grandma");
let grandmaPrice = document.querySelector(".grandmaPrice");
let grandmaAmount = 0
let grandmaCost = 10
let grandmaCps = 2

grandmaButton.addEventListener("click",grandmaBuy)

function grandmaBuy(){
  if (clickCount >= grandmaCost){
  grandmaAmount ++
  cpsAmount += grandmaCps
  clickCount -= grandmaCost
  grandmaCost = Math.round((grandmaCost*upgradeMultiplier)^(grandmaAmount+1))
  clickCountText.innerHTML = Math.floor(clickCount)
  grandmaPrice.innerHTML = grandmaCost
  }
}

let farmButton = document.querySelector(".farm");
let farmPrice = document.querySelector(".farmPrice");
let farmAmount = 0
let farmCost = 50
let farmCps = 10

farmButton.addEventListener("click",farmBuy)

function farmBuy(){
  if (clickCount >= farmCost){
  farmAmount ++
  cpsAmount += farmCps
  clickCount -= farmCost
  farmCost = Math.round((farmCost*upgradeMultiplier)^(farmAmount+1))
  clickCountText.innerHTML = Math.floor(clickCount)
  farmPrice.innerHTML = farmCost
  }
}

let mineButton = document.querySelector(".mine");
let minePrice = document.querySelector(".minePrice");
let mineAmount = 0
let mineCost = 300
let mineCps = 70

mineButton.addEventListener("click",mineBuy)

function mineBuy(){
  if (clickCount >= mineCost){
  mineAmount ++
  cpsAmount += mineCps
  clickCount -= mineCost
  mineCost = Math.round((mineCost*upgradeMultiplier)^(mineAmount+1))
  clickCountText.innerHTML = Math.floor(clickCount)
  minePrice.innerHTML = mineCost
  }
}

let factoryButton = document.querySelector(".factory");
let factoryPrice = document.querySelector(".factoryPrice");
let factoryAmount = 0
let factoryCost = 4000
let factoryCps = 500

factoryButton.addEventListener("click",factoryBuy)

function factoryBuy(){
  if (clickCount >= factoryCost){
  factoryAmount ++
  cpsAmount += factoryCps
  clickCount -= factoryCost
  factoryCost = Math.round((factoryCost*upgradeMultiplier)^(factoryAmount+1))
  clickCountText.innerHTML = Math.floor(clickCount)
  factoryPrice.innerHTML = factoryCost
  }
}

let bankButton = document.querySelector(".bank");
let bankPrice = document.querySelector(".bankPrice");
let bankAmount = 0
let bankCost = 10000
let bankCps = 800

bankButton.addEventListener("click",bankBuy)

function bankBuy(){
  if (clickCount >= bankCost){
  bankAmount ++
  cpsAmount += bankCps
  clickCount -= bankCost
  bankCost = Math.round((bankCost*upgradeMultiplier)^(bankAmount+1))
  clickCountText.innerHTML = Math.floor(clickCount)
  bankPrice.innerHTML = bankCost
  }
}

let adsButton = document.querySelector(".ads");
let adsPrice = document.querySelector(".adsPrice");
let adsAmount = 0
let adsCost = 100000
let adsCps = 1000

adsButton.addEventListener("click",adsBuy)

function adsBuy(){
  if (clickCount >= adsCost){
  adsAmount ++
  cpsAmount += adsCps
  clickCount -= adsCost
  adsCost = Math.round((adsCost*upgradeMultiplier)^(adsAmount+1))
  clickCountText.innerHTML = Math.floor(clickCount)
  adsPrice.innerHTML = adsCost
  }
}