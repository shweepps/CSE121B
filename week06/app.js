// Load the content from HTML to javascript
document.addEventListener('DOMContentLoaded', function(){

  // Get HTML elements
  const themeSelect = document.getElementById('theme-select');
  const toneSelect = document.getElementById('tone-select');
  const lengthSlider = document.getElementById('length-slider');
  const generateBtn = document.getElementById('generate-btn');
  const sentence = document.getElementById('sentence');
  const saveBtn = document.getElementById('save-btn');
  const favoritesList = document.getElementById('favorites-list');

  // Add event listeners to the generate and save buttons
  generateBtn.addEventListener('click', generateSentence);
  saveBtn.addEventListener('click', saveFavorite);

  // Initialize variables
  let themes = null;
  let tones = null;
  let selectedTheme = 'general';
  let selectedTone = 'neutral';
  let selectedLength = 5;
  let favorites = [];

  // Define functions

  // Fetch themes and tones data from API
  async function fetchData() {
    const response = await fetch('https://run.mocky.io/v3/21aad9c4-29e8-44fa-aec4-a936223b7c5c');
    const data = await response.json();
    themes = data.themes;
    tones = data.tones;
  }

  // Generate sentence based on user input
  function generateSentence() {
    // Update selected theme, tone, and length based on user input
    selectedTheme = themeSelect.value;
    selectedTone = toneSelect.value;
    selectedLength = lengthSlider.value;

    const theme = themes[selectedTheme];
    const tone = tones[selectedTone];
    const themeLength = theme.length;
    const toneLength = tone.length;
    let sentenceText = '';

    // Generate a sentence by selecting random sentences from themes and tones arrays
    for (let i = 0; i < selectedLength; i++) {
      const themeIndex = Math.floor(Math.random() * themeLength);
      const toneIndex = Math.floor(Math.random() * toneLength);
      const themeSentence = theme[themeIndex];
      const toneSentence = tone[toneIndex];
      const fullSentence = `${themeSentence} ${toneSentence}. `;
      sentenceText += fullSentence;
    }

    sentence.textContent = sentenceText;
  }

  // Save the generated sentence as a favorite
  function saveFavorite() {
    const sentenceText = sentence.textContent;

    // Check if sentence is empty
    if (!sentenceText) {
      alert("Cannot save an empty sentence.");
    } 
    // Check if sentence is already saved as a favorite
    else if (favorites.includes(sentenceText)) {
      alert("You have already saved this one.");
    } 
    // Save the sentence as a favorite
    else {
      const favorite = document.createElement('li');
      favorite.textContent = sentenceText;
      favoritesList.appendChild(favorite);
      favorites.push(sentenceText);
    }
  }

  // Fetch data and initialize the app
  fetchData();

});
