// Part 1: Variable definitions and helper function
const customName = document.getElementById('custom-name');
const generateBtn = document.querySelector('.generate');
const story = document.querySelector('.story');

// Returns a random item from any array passed to it
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Part 2: Raw text string arrays
const insertX = [
  'Willy the Goblin',
  'Big Daddy',
  'Father Christmas'
];

const insertY = [
  'the soup kitchen',
  'Disneyland',
  'the White House'
];

const insertZ = [
  'spontaneously combusted',
  'melted into a puddle on the sidewalk',
  'turned into a slug and slithered away'
];