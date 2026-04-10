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

// Part 3: Generate story function
function generateStory() {
  const storyTemplate =
    'It was 94 Fahrenheit outside, so :insertx: went for a walk. ' +
    'When they got to :inserty:, they stared in horror for a few moments, ' +
    'then :insertz:. Bob saw the whole thing, but was not surprised — ' +
    ':insertx: weighs 300 pounds, and it was a hot day.';

  let newStory = storyTemplate;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById('uk').checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature = `${Math.round((94 - 32) * (5 / 9))} Celsius`;
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 Fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

// Part 6: Attach event listener to the button
generateBtn.addEventListener('click', generateStory);