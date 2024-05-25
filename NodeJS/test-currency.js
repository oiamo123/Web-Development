const currency = require("./currency.js");

console.log(
  `50 Canadian dollars equals ${currency.canadianToUS(50)} US dollars.`
);
console.log(`50 US dollars equals ${currency.USToCanadian(50)} US dollars.`);

console.log(
  `50 Canadian dollars equals ${currency.canadianToBritishPound(
    50
  )} British pounds.`
);
console.log(
  `50 British Pounds equals ${currency.britishPoundToCanadian(50)} US dollars.`
);
