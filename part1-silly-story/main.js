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
  // Story template with placeholders
  const storyTemplate =
    'It was 94 Fahrenheit outside, so :insertx: went for a walk. ' +
    'When they got to :inserty:, they stared in horror for a few moments, ' +
    'then :insertz:. Bob saw the whole thing, but was not surprised — ' +
    ':insertx: weighs 300 pounds, and it was a hot day.';

  // Pick random values for each placeholder
  let newStory = storyTemplate;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // Replace all placeholders with random values
  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // Part 4: Replace Bob with custom name if provided
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  // Part 5: Convert to UK units if UK radio is selected
  if (document.getElementById('uk').checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature = `${Math.round((94 - 32) * (5 / 9))} Celsius`;
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 Fahrenheit', temperature);
  }

  // Display the story
  story.textContent = newStory;
  story.style.visibility = 'visible';
}

