const greeting = function () {
  const num = Math.floor(Math.random() * 5);
  console.log(num);
  if (num === 0) {
    return `Afternoon my lord`;
  } else if (num === 1) {
    return `How do you do?`;
  } else if (num === 2) {
    return `Wish you a nice day`;
  } else if (num === 3) {
    return `Good day`;
  } else if (num === 4) {
    return `Have a swell day`;
  }
};

module.exports = greeting;
