console.log("sup world");

const newObject = {
  number: 0,
  adjective: "",
  pluralNoun: "",
  adverb: "",
  anotherAdjective: "",
};

const askWords = () => {
  newObject.number = prompt("gimme a number");
  newObject.adjective = prompt("gimme an adjective");
  newObject.pluralNoun = prompt("gimme a plural noun");
  newObject.adverb = prompt("gimme an adverb");
  newObject.anotherAdjective = prompt("last question, gimme another adjective");
};

const assembly = () => {
  alert(`Once upon a time a group of ${newObject.number} General Assembly graduates
  got together and made a startup called ${newObject.adjective} Technologies.
  Their goal was to create smart ${newObject.pluralNoun}.
  They approached the challenge ${newObject.adverb}
  which ultimately lead them to ${newObject.anotherAdjective} fame;`);
};

askWords();
assembly();
