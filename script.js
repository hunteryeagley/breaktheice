window.onload = function() {
    var sentences = [
        "If you could live in any historical period, which would it be and why?",
  "What's the most unusual job you've ever had?",
  "What's the most daring thing you've ever done?",
  "If you had to eat one meal for the rest of your life, what would it be?",
  "What fictional character do you identify with most?",
  "What's your favorite childhood memory?",
  "What's your go-to karaoke song?",
  "If a movie was made about your life, who would play you?",
  "If you could have any superpower, what would it be?",
  "What's the best piece of advice you've ever received?",
  "If you could have dinner with any historical figure, who would it be and why?",
  "If you were to start a YouTube channel, what would it be about?",
  "What's the worst movie you've ever seen and why?",
  "What was the last thing you googled?",
  "If you could teleport to anywhere in the world right now, where would you go?",
  "What's your favorite guilty pleasure?",
  "What's the most beautiful place you've ever been?",
  "What's your favorite hobby outside of work?",
  "What was your favorite subject in school?",
  "If you could learn any language fluently, what would it be?",
  "Who is your celebrity crush and why?",
  "What's the most challenging thing you've ever done?",
  "If you were a superhero, what would be your weakness?",
  "What's your favorite TV show and why?",
  "If you were a book character, who would you be?",
  "If you could be an animal for a day, which one would you choose and why?",
  "What's your favorite family tradition?",
  "If you had the chance to colonize Mars, would you go? Why or why not?",
  "What's your favorite type of music and why?",
  "If you could change one thing about yourself, what would it be?",
  "What's the most embarrassing thing you've ever done?",
  "If you could talk to your younger self, what advice would you give?",
  "If you were stuck on a desert island, what three items would you want with you?",
  "If you could switch lives with someone for a day, who would it be?",
  "What's the weirdest thing you've ever eaten?",
  "If aliens landed on earth tomorrow, what would you do?",
  "What's the worst fashion trend you've ever participated in?",
  "If you had to live in a TV show for a week, which one would you choose?",
  "What's your favorite thing about the city you live in?",
  "If you could invent something, what would it be?",
  "What's the biggest risk you've ever taken?",
  "If you could time travel, where and when would you go?",
  "If you could have any animal as a pet, what would it be and why?",
  "If your house was on fire and you could only save one thing, what would it be?",
  "What's your biggest pet peeve?",
  "If you had to choose a different profession, what would it be and why?",
  "What's your favorite ice cream flavor and why?",
  "If you could choose your own nickname, what would it be?",
  "What's the best gift you've ever received?",
  "If you were a chef, what would be your signature dish?",
  "What's the most interesting documentary you've ever watched?",
"If you had the ability to erase something from your mind, what would it be?",
"What's your favorite board game?",
"If you were a villain in a movie, what would your master plan be?",
"What's your favorite quote and why does it resonate with you?",
"What's the most overrated book you've ever read?",
"If you could witness any event in history, what would it be and why?",
"What's the best concert or live performance you've ever been to?",
"If you had the chance to explore the ocean or outer space, which would you choose and why?",
"What's your favorite holiday and why?",
"If you could start a charity, what would it be for?",
"What's the funniest joke you know?",
"If you could meet any fictional character, who would it be and why?",
"What's your biggest fear?",
"If you were given a one-minute ad slot during the Super Bowl, what would you fill it with?",
"What's your favorite type of weather and why?",
"If you could be famous for a day, what would you do?",
"What's your favorite piece of technology that you own?",
"If you could have dinner with any three people, dead or alive, who would they be and why?",
"What's the best vacation you've ever been on?",
"If you could live in any TV show, which one would it be and why?",
"What's your favorite piece of art?",
"If you were a ghost, where would you haunt and why?",
"What's the best piece of advice you've ever given?",
"If you could have a mythical creature as a pet, what would it be?",
"What's the most important lesson you've learned in life so far?",
"If you could be an Olympic athlete, in what sport would you compete?",
"What's your favorite book series and why?",
"If you could change one law, what would it be and why?",
"What's your earliest memory?",
"If you were trapped in a video game, which one would it be and why?",
"What's your favorite way to relax after a long day?",
"If you could meet any author, who would it be and why?",
"What's the most unusual thing you have in your house?",
"If you were given the opportunity to go into space, would you take it?",
"What's your favorite podcast and why?",
"If you could rewrite the ending of any movie, which one would it be and why?",
"What's the most memorable meal you've ever had?",
"If you could learn to play any musical instrument, which one would you choose?",
"What's your favorite myth or legend?",
"If you were stranded in a foreign country, where would you want it to be?",
"What's the craziest thing you've ever done for love?",
"If you could ask your pet three questions, what would they be?",
"What's the best surprise you've ever received?",
"If you could be any character in a movie, who would you be and why?",
"What's the most challenging project or task you've undertaken?",
"If you had the power to solve one global issue, what would it be?",
"What's the most adventurous thing you've ever done?",
"If you could have a conversation with any animal, which one would it be and why?",
"What's your favorite memory from high school?"
    ];

    var button = document.getElementById('generate-button');
    var sentenceDisplay = document.getElementById('random-sentence');

    button.onclick = function() {
        var randomIndex = Math.floor(Math.random() * sentences.length);
        sentenceDisplay.textContent = sentences[randomIndex];
    };
};

const topicButtons = document.querySelectorAll('.topic-button');
let selectedTopic = null;

// Add event listeners to the topic buttons
topicButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove the 'selected' class from all buttons
    topicButtons.forEach(btn => btn.classList.remove('selected'));

    // Add the 'selected' class to the clicked button
    button.classList.add('selected');

    // Store the selected topic in the selectedTopic variable
    selectedTopic = button.innerText;
  });
});
