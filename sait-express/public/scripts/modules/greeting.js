const greetings = [`morning`, `afternoon`, `evening`, `night`];

const greeting = function () {
  return greetings[Math.floor(Math.random() * greetings.length)];
};

module.exports = greeting;
