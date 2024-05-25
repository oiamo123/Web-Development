const canadianDollar = 0.73;
const britishPound = 0.57;

const roundTwo = function (amount) {
  return Math.round(amount * 100) / 100;
};

exports.canadianToUS = (canadian) => roundTwo(canadian * canadianDollar);
exports.USToCanadian = (us) => roundTwo(us / canadianDollar);
exports.canadianToBritishPound = (canadian) =>
  roundTwo(canadian * britishPound);
exports.britishPoundToCanadian = (british) => roundTwo(british / britishPound);
