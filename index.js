// SCOPE

function vacation() {
  var suitcase = "the biggest suitcase I own";
  let weather = "warm";
  const fun = "the most";
  transportation = "airplane";

  if (true) {
    var suitcase = "just a carry on";
    let weather = "a little chilly";
    const fun = "the bare minimum amount of";
    transportation = "train";
  };

  // What will each statement log to the console?
  console.log("I'm going on vacation and...");
  console.log("I'm bringing", suitcase);
  console.log("The weather should be", weather);
  console.log("I think that I'll have", fun, "fun");
  console.log("I'm taking a/an", transportation, "to get there");
};


// HOISTING

function sayHelloToMyDogs() {
  console.log("Hello", bigBro, "and", littleBro);
  console.log("It's lovely to meet you!")

  var bigBro = "Grampa";
  var littleBro = "Goblin";
};

sayHelloToMyDogs();
// What will log to the console?


function sayHelloToMyDogs() {
  console.log("Hello", bigBro, "and", littleBro);
  console.log("It's lovely to meet you!")

  let bigBro = "Grampa";
  let littleBro = "Goblin";
};

sayHelloToMyDogs();
// What will log to the console?