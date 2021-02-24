// Literal Math Method Exercise

// 1a
let warmHugs = "Hi,I'm Olaf and I like warm hugs.";

// 1b
console.log(warmHugs.toUpperCase());

// 1c
warmHugs.replace("like", "love");
console.log(warmHugs.replace("like", "love"));

// 2a
let beenImpaled = "Oh, look at that, I've been impaled.";

// 2b
console.log(beenImpaled.slice(18));

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
// console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNumber = Math.random();
randomNumber *= 3
randomNumber = Math.floor(randomNumber)
randomNumber += 1
console.log(randomNumber);

// BONUS

// 6
let letItGo = "Let It Go!".repeat();

// 7a
let reindeers = "Reindeers are better than people.";

// 7b
console.log(reindeers.replace(/ /g, "_"));

// 8
console.log(Math.SQRT2);

// 9
let newRandomNumber = Math.random();
newRandomNumber *= 7
newRandomNumber = Math.floor(newRandomNumber)
newRandomNumber += 10
console.log(newRandomNumber);