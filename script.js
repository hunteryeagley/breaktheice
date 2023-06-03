const topicButtons = document.querySelectorAll('.topic-button');
let selectedTopic = null;

// Add event listeners to the topic buttons
topicButtons.forEach(button => {
  button.addEventListener('click', function() {
    if (button.classList.contains('selected')) {
      // Deselect the button if it is already selected
      button.classList.remove('selected');
      selectedTopic = null;
    } else {
      // Deselect any previously selected button
      topicButtons.forEach(btn => btn.classList.remove('selected'));

      // Select the clicked button
      button.classList.add('selected');
      selectedTopic = button.innerText;
    }
  });
});

// API request function
async function generateIcebreaker() {
  let prompt;

  if (selectedTopic) {
    prompt = `Generate an icebreaker related to the topic: ${selectedTopic}`;
  } else {
    prompt = 'Generate a generic icebreaker';
  }

  // Prepare the API request data
  const apiKey = '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'; // Replace with your actual API key
  const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${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}`
      },
      body: JSON.stringify({
        prompt,
        max_tokens: 32, // Adjust the desired length of the generated icebreaker
        temperature: 0.7, // Adjust the temperature for controlling randomness
        top_p: 1,
        n: 1
      })
    });

    if (!response.ok) {
      // Handle the API response error
      throw new Error('Failed to generate icebreaker');
    }

    const data = await response.json();
    const generatedIcebreaker = data.choices[0].text.trim();

    // Display the generated icebreaker
    const randomSentence = document.getElementById('random-sentence');
    randomSentence.textContent = generatedIcebreaker;
  } catch (error) {
    console.error(error);
    // Handle any error that occurred during the API request
  }
}

// Event listener for the generate button
const generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', generateIcebreaker);
