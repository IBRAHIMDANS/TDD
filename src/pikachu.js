export const pikachu = function (number) {
  if (number === null || number === undefined) {
    throw new Error("Please number can not undefined");
  }
  if (typeof number === "number") {
    let mod3 = number % 3 === 0;
    let mod5 = number % 5 === 0;
    if (mod3 && mod5) {
      return "PikaChu";
    } else if (mod5) {
      return "Chu";
    } else {
      return "Pika";
    }
    // return f ? (b ? "PikaChu" : "Pika") : b ? "Chu" : number;
  }
  throw new Error("Please number must be a number");
};

// f prend number si number est divisible par 3
//b prend number si  number est divisible par 5
// ternaire test ? oui : non

// test1 ? oui test2 ? ouitest2 : nontest2: nontest1 ? test3 ? ouitest3 : nontest3
// Si le nombre est divisible par 3 et  5 alors il ecrit pikachu sinon
// si le nombre est divisible par 5 seulement ça ecrit pika
//si il est divisible par 3 seulement ça ecrit chu
// sinon c'est qu'il n'est ni divisible par 3 et 5
// nb le modulo est le reste de la division
