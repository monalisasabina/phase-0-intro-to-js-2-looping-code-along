// USING DEBUGGER

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }

//USING FOR WITH ARRAY
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

//ASSIGNMENT USING FOR LOOP

function writeCards(name, eventName) {
    const array = []
    for (let i = 0; i < name.length; i++) {
        array.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
    }
    return array;
}
writeCards(["Charles","Samip","Ali"],"birthday");

//ASSIGNMENT USING WHILE LOOP


function countDown(positveNumber) {
    while (positveNumber> 0) {
        console.log(positveNumber);
        positveNumber -= 1;
    }
    console.log(positveNumber);
}
countDown(40);
