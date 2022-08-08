let mode1 = "Self_Introduction";
let mode2 = "User_Enter_Name";
let mode3 = "Question";
let mode = mode1;

var main = function (input) {
  let myOutputValue = "";

  // Called the randomNum function to generate a random index using the length of the array.
  let randomIndex = randomNum(questionAndAnswerSets.length);

  // Self introduction and request the user to enter username before the questionaire.
  if (mode == mode1) {
    mode = mode2;
    return (myOutputValue = `Hey! I am RoboQ. What's your name?<br>Please enter your name in the input box and click the submit button.`);
  }

  // the input will be username
  if (mode == mode2) {
    let userName = input;
    mode = mode3;
    return (myOutputValue = `${userName}, what a cool name! <br>Click the submit button to proceed to the questionaires.`);
  }

  // First question displayed after user clicked submit button.
  if (mode == mode3) {
    myOutputValue = questionAndAnswerSets[randomIndex].question;
  }

  if (input == "yes" || input == "no" || input == "maybe") {
    myOutputValue = questionAndAnswerSets[0].answers[input];
  }
  if (input == "day" || input == "night" || input == "both") {
    myOutputValue = questionAndAnswerSets[1].answers[input];
  }
  if (input == "sun" || input == "rain") {
    myOutputValue = questionAndAnswerSets[2].answers[input];
  }

  return myOutputValue;
};

// Array of set questions and answers
let questionAndAnswerSets = [
  {
    question: "You seem happy today! Have you been coding? (yes/no/maybe)",
    answers: {
      yes: `Wow! Me too! I've been working on the Blackjack project. Makes my day!`,
      no: "Oh ok, just normally happy ;)",
      maybe: "It seems the very thought of coding makes people happy!",
    },
  },
  {
    question:
      "Do you enjoy coding most during the day, night, or both? (day/night/both)",
    answers: {
      day: "Ah yes, when the sun is high in the sky, I can feel its energy too.",
      night: "Under the calm and gentle moon, I also find my focus.",
      both: "Indeed, I could code 24/7 if I didn't have to sleep!",
    },
  },
  {
    question: "Are you most productive when it's sunny or raining? (sun/rain)",
    answers: {
      sun: "The sun warms my heart and powers me to code.",
      rain: "The rain washes away my distractions and allows me to focus.",
    },
  },
];

// Helper function to generate random Index
function randomNum(size) {
  console.log("size in random", size);
  randomIndex = Math.floor(Math.random() * size);
  console.log("random index", randomIndex);
  return randomIndex;
}
