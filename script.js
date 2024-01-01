
// script.js

// ... (unchanged functions)

function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('main > section, main > div.container').forEach(section => {
      section.style.display = 'none';
  });
  var selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
      selectedSection.style.display = 'flex';
  }
  var aboutUsSection = document.getElementById('aboutUsSection');
  var contactSection = document.getElementById('contactSection');
  if (aboutUsSection && contactSection) {
      aboutUsSection.style.display = 'none';
      contactSection.style.display = 'none';
  }
  // Additional actions based on the section
  if (sectionId === 'userDetailsContainer') {
      displayUserDetails();
  } else if (sectionId === 'registrationFormContainer') {
      resetRegistrationForm();
  } else if (sectionId === 'aboutUsSection') {
      // Add logic to display content for the 'About Us' section
      document.getElementById('aboutUsSection').style.display = 'block';
      window.scrollTo(0, 0); // Scroll to the top
      
  }
  else if (sectionId === 'testContainer') {
    // Additional logic for the test container
    displayQuestionWithTimer();
}

  // Display the selected section
  document.getElementById(sectionId).style.display = 'block';
}


function handleRegistration() {
    // Capture entered email and username
    var enteredEmail = document.getElementById('newEmail').value;
    var enteredUsername = document.getElementById('newUsername').value;

    // Display email and username in User Details
    var userDetails = document.getElementById('userDetails');
    userDetails.innerText = 'Username: ' + enteredUsername + ', Email: ' + enteredEmail;

    // Display the User Details section
    showSection('userDetailsContainer');

    // Display the success message
    document.getElementById('registrationSuccessMessage').style.display = 'block';

    // Prevent the form from submitting (for demonstration purposes)
    return false;
}
function startQuestionTimer() {
  let timerSeconds = 30;
  const timerElement = document.getElementById('timer');

  function updateTimer() {
      timerElement.innerText = timerSeconds;
      if (timerSeconds > 0) {
          timerSeconds--;
          setTimeout(updateTimer, 1000);
      } else {
          // Handle timeout (e.g., move to the next question)
          submitTest();
      }
  }

  // Start the timer
  updateTimer();
}

function displayUserDetails() {
    // Check if the user is registered
    var userDetailsMessage = document.getElementById('userMessage');
    var userDetails = document.getElementById('userDetails');
    if (userDetails.innerText.trim() !== '') {
        userDetailsMessage.style.display = 'none';
    } else {
        userDetailsMessage.style.display = 'block';
    }
}

function logout() {
    // Clear user details
    var userDetails = document.getElementById('userDetails');
    userDetails.innerText = '';

    // Hide the success message
    document.getElementById('registrationSuccessMessage').style.display = 'none';

    // Show the registration form
    showSection('registrationFormContainer');
}

function resetRegistrationForm() {
    // Reset the registration form
    document.getElementById('registrationForm').reset();

    // Hide the success message
    document.getElementById('registrationSuccessMessage').style.display = 'none';
}

function selectTopic(topic) {
    // Handle topic selection (you can add your logic here)
    alert('Selected Topic: ' + topic);
}

// Remaining Scripts
const topics = [
    {
     name: 'Parts of speech',
        questions: [
 
        // Question 1
{
    question:' (Q)   Identify the part of speech that represents the action or state of being in a sentence.',
    choices: [
      ' Noun, such as "tree" or "apple"',
      ' Verb, such as "run" or "exist"',
      ' Adjective, like "beautiful" or "smart"',
      ' Preposition, as in "under" or "between"',
    ],
    correctAnswer: 1
  },
  
  // Question 2
  {
    question: ' (Q)  Select the option that contains a word functioning as an adverb.',
    choices: [
      ' The cat is on the roof.',
      ' Flowers bloom in the spring.',
      ' The house has a red door.',
      ' She read a fascinating book.',
    ],
    correctAnswer: 0
  },
  
  // Question 3
  {
    question: ' (Q)        Choose the sentence in which a pronoun is used correctly.',
    choices: [
      ' Me and my friend are going to the movies.',
      ' She gave the gift to he and I.',
      ' They invited her and me to the party.',
      ' John and him went to the store.',
    ],
    correctAnswer: 2
  },
  
  // Question 4
  {
    question: 'Identify the option containing a conjunction connecting two independent clauses.',
    choices: [
      ' I love coffee; I dislike tea.',
      ' The cat sat on the mat.',
      ' Running is my favorite exercise.',
      ' The book is on the shelf.',
    ],
    correctAnswer: 0
  },
  
  // Question 5
  {
    question: 'Select the sentence with an interjection expressing strong emotion.',
    choices: [
      ' She carefully painted the landscape.',
      ' Wow, that was an amazing performance!',
      ' The car raced down the street.',
      ' The sun sets behind the mountains.',
    ],
    correctAnswer: 1
  },
  
  // Question 6
  {
    question: 'Choose the option with a word functioning as an article.',
    choices: [
      ' I have an idea.',
      ' Dogs play in the park.',
      ' He gave me that beautiful flower.',
      ' She quickly ran to catch the bus.',
    ],
    correctAnswer: 0
  },
  
  // Question 7
  {
    question: 'Identify the sentence in which an adjective modifies a noun.',
    choices: [
      ' The rain fell steadily.',
      ' She sang a beautiful song.',
      ' They walked through the forest.',
      ' The sun rises in the east.',
    ],
    correctAnswer: 1
  },
  
  // Question 8
  {
    question: 'Choose the sentence with a preposition indicating a relationship between words.',
    choices: [
      ' I slept for eight hours.',
      ' Birds fly high in the sky.',
      ' The cat chased the mouse.',
      ' He walked along the narrow path.',
    ],
    correctAnswer: 3
  },
  
  // Question 9
  {
    question: 'Select the option containing a verb in the present progressive tense.',
    choices: [
      ' They will go to the beach tomorrow.',
      ' She has already finished her homework.',
      ' I am reading an interesting book.',
      ' The sun sets every evening.',
    ],
    correctAnswer: 2
  },
  
  // Question 10
  {
    question: 'Identify the sentence with a gerund functioning as a noun.',
    choices: [
      ' Running is my favorite hobby.',
      ' The dog barked loudly.',
      ' The sky is clear and blue.',
      ' She quickly solved the puzzle.',
    ],
    correctAnswer: 0
  },
  // quiz.js (add these questions to the 'Parts of Speech' section)

{
  question: 'What is the function of the word "quickly" in the sentence: "She ran quickly to catch the bus."?',
  choices: ['Noun', 'Verb', 'Adjective', 'Adverb'],
  correctAnswer: 3
},
{
  question: 'Identify the adverb in the sentence: "The students answered the questions correctly."',
  choices: ['Students', 'answered', 'questions', 'correctly'],
  correctAnswer: 3
},
{
  question: 'In the sentence "The mysterious stranger vanished silently," what part of speech is "silently"?',
  choices: ['Noun', 'Verb', 'Adjective', 'Adverb'],
  correctAnswer: 3
},
{
  question: 'Choose the correct sentence: "She is a talented artist." or "She is a talent artist."',
  choices: ['She is a talented artist.', 'She is a talent artist.'],
  correctAnswer: 0
},
{
  question: 'What is the adjective in the sentence: "The brave firefighter rescued the trapped kitten."',
  choices: ['Brave', 'Firefighter', 'Rescued', 'Trapped'],
  correctAnswer: 0
},
{
  question: 'Identify the preposition in the sentence: "The cat climbed up the tall tree."',
  choices: ['Cat', 'Climbed', 'Up', 'Tall'],
  correctAnswer: 2
},
{
  question: 'Choose the correct form: "She speaks English fluently." or "She speaks English fluent."',
  choices: ['She speaks English fluently.', 'She speaks English fluent.'],
  correctAnswer: 0
},
{
  question: 'What is the conjunction in the sentence: "He likes both coffee and tea."',
  choices: ['He', 'Likes', 'Both', 'And'],
  correctAnswer: 3
},
{
  question: 'Identify the pronoun in the sentence: "She gave him a thoughtful gift."',
  choices: ['She', 'Gave', 'Him', 'Thoughtful'],
  correctAnswer: 2
},
{
  question: 'What is the superlative form of the adjective "intelligent"?',
  choices: ['More intelligent', 'Intelligent', 'Intelligenter', 'Most intelligent'],
  correctAnswer: 3
},
{
  question: 'In the phrase "The incredibly talented musician," what part of speech is "talented"?',
  choices: ['Noun', 'Verb', 'Adjective', 'Adverb'],
  correctAnswer: 2
},
{
  question: 'In the phrase "The cat gracefully leaped over the fence," what part of speech is "gracefully"?',
  choices: ['Noun', 'Verb', 'Adjective', 'Adverb'],
  correctAnswer: 3
},
{
  question: 'What is the function of the word "enthusiastically" in the sentence: "She applauded the performance enthusiastically."?',
  choices: ['Noun', 'Verb', 'Adjective', 'Adverb'],
  correctAnswer: 3
},
{
  question: 'Identify the participial phrase in the sentence: "Torn by the storm, the old barn needed extensive repairs."',
  choices: [
      'Torn by the storm',
      'The old barn',
      'Needed extensive repairs',
      'The storm',
  ],
  correctAnswer: 0
},
  
  
                 
        ]
    },
    {
        name: 'Word Formation',
        questions: [
          // quiz.js (add these questions to the 'Word Formation' section)

{
  question: 'What is the noun form of the verb "celebrate"?',
  choices: ['Celebration', 'Celebrating', 'Celebrated', 'Celebrateful'],
  correctAnswer: 0
},
{
  question: 'Choose the correct prefix for the word "happen."',
  choices: ['Re-', 'Un-', 'Pre-', 'Dis-'],
  correctAnswer: 1
},
{
  question: 'What is the adjective form of the noun "education"?',
  choices: ['Educate', 'Educational', 'Educated', 'Educator'],
  correctAnswer: 1
},
{
  question: 'Select the correct word formation for "create."',
  choices: ['Creation', 'Creating', 'Created', 'Createful'],
  correctAnswer: 2
},
{
  question: 'What is the prefix in the word "misunderstand"?',
  choices: ['Mis-', 'Un-', 'Under-', 'Dis-'],
  correctAnswer: 0
},
{
  question: 'Which suffix can be added to the word "act" to form a noun?',
  choices: ['-ly', '-ness', '-ful', '-ing'],
  correctAnswer: 3
},
{
  question: 'Choose the correct word formation for "decide."',
  choices: ['Decision', 'Deciding', 'Decided', 'Decideful'],
  correctAnswer: 0
},
{
  question: 'What is the adjective form of the noun "nature"?',
  choices: ['Natural', 'Naturally', 'Natured', 'Natureful'],
  correctAnswer: 0
},
{
  question: 'Select the correct prefix for the word "connect."',
  choices: ['Re-', 'Un-', 'Pre-', 'In-'],
  correctAnswer: 0
},
{
  question: 'What is the noun form of the verb "analyze"?',
  choices: ['Analyzing', 'Analyst', 'Analytical', 'Analyzeful'],
  correctAnswer: 1
},
{
  question: 'Choose the correct word formation for "discover."',
  choices: ['Discovery', 'Discovering', 'Discovered', 'Discoverful'],
  correctAnswer: 0
},
{
  question: 'What is the suffix in the word "helpful"?',
  choices: ['-ly', '-ness', '-ful', '-ing'],
  correctAnswer: 2
},
{
  question: 'Select the correct prefix for the word "approve."',
  choices: ['Re-', 'Un-', 'Pre-', 'Dis-'],
  correctAnswer: 3
},
{
  question: 'What is the adjective form of the noun "danger"?',
  choices: ['Dangerous', 'Dangering', 'Dangered', 'Dangery'],
  correctAnswer: 0
},
{
  question: 'Choose the correct word formation for "organize."',
  choices: ['Organizer', 'Organizing', 'Organized', 'Organizeful'],
  correctAnswer: 2
},
// quiz.js (add these questions to the 'Word Formation' section)

{
  question: 'What is the process of forming a word by imitating natural sounds called?',
  choices: ['Neologism', 'Onomatopoeia', 'Portmanteau', 'Anagram'],
  correctAnswer: 1
},
{
  question: 'Which word formation involves combining parts of two words to create a new one?',
  choices: ['Acronym', 'Blending', 'Derivation', 'Compounding'],
  correctAnswer: 3
},
{
  question: 'What is the term for creating a new word through the rearrangement of letters in another word?',
  choices: ['Back-formation', 'Anagram', 'Clipping', 'Coinage'],
  correctAnswer: 1
},
{
  question: 'Which word formation results from shortening a longer word without changing its meaning?',
  choices: ['Acronym', 'Abbreviation', 'Derivation', 'Compounding'],
  correctAnswer: 1
},
{
  question: 'In linguistics, what is the process of creating a new word through the combination of sounds?',
  choices: ['Morphology', 'Phonology', 'Lexicon', 'Phonaesthetics'],
  correctAnswer: 3
},
{
  question: 'What is the adverb form of the adjective "quick"?',
  choices: ['Quickly', 'Quicken', 'Quickest', 'Quickness'],
  correctAnswer: 0
},

]
 },
 ///////////////////////////////////////////////////
    {
        name: 'Tenses',
        questions: [
          {
            question: 'What is the present simple tense of the verb "to eat"?',
            choices: ['Eat', 'Eats', 'Ate', 'Eaten'],
            correctAnswer: 0,
        },
        {
            question: 'Which sentence is in the past continuous tense?',
            choices: [
                'She will bake a cake tomorrow.',
                'They are playing basketball now.',
                'I was studying when the phone rang.',
                'He has already finished his homework.',
            ],
            correctAnswer: 2,
        },
        {
            question: 'What is the future perfect tense of the verb "to write"?',
            choices: ['Will write', 'Writes', 'Has written', 'Will have written'],
            correctAnswer: 3,
        },
        {
            question: 'Identify the sentence in the present perfect continuous tense.',
            choices: [
                'They will have arrived by noon.',
                'She is dancing at the party.',
                'I have been waiting for an hour.',
                'We played soccer yesterday.',
            ],
            correctAnswer: 2,
        },
        {
            question: 'Choose the correct form: "She had already left." or "She already left."',
            choices: ['She had already left.', 'She already left.'],
            correctAnswer: 0,
        },
        {
            question: 'What is the past perfect continuous tense of the verb "to study"?',
            choices: [
                'Had studied',
                'Was studying',
                'Had been studying',
                'Will have studied',
            ],
            correctAnswer: 2,
        },
        {
            question: 'Which sentence is in the future continuous tense?',
            choices: [
                'I have visited that museum.',
                'They will be eating dinner at 7 PM.',
                'He sings beautifully.',
                'We were playing cards last night.',
            ],
            correctAnswer: 1,
        },
        {
            question: 'What is the present perfect tense of the verb "to travel"?',
            choices: [
                'Will travel',
                'Travels',
                'Has traveled',
                'Is traveling',
            ],
            correctAnswer: 2,
        },
        {
            question: 'Identify the sentence in the past simple tense.',
            choices: [
                'She has read that book already.',
                'They were singing at the concert.',
                'I am going to the store.',
                'We will be arriving shortly.',
            ],
            correctAnswer: 1,
        },
        {
            question: 'Choose the correct form: "I will finish my work." or "I will finished my work."',
            choices: ['I will finish my work.', 'I will finished my work.'],
            correctAnswer: 0,
        },
        // quiz.js (add these questions to the 'Tenses' section)

// Average difficulty
{
  question: 'Choose the sentence in the past perfect tense:',
  choices: [
      'She will finish her work by 5 PM.',
      'They are playing basketball.',
      'He had already eaten when I arrived.',
      'I will visit the museum tomorrow.',
  ],
  correctAnswer: 2
},

{
  question: 'Identify the correct sentence in the present continuous tense:',
  choices: [
      'She reads a book every night.',
      'They will visit us next week.',
      'I am studying for my exam at the moment.',
      'He had completed the task by noon.',
  ],
  correctAnswer: 2
},

{
  question: 'What is the future perfect tense of the verb "eat"?',
  choices: [
      'Will eat',
      'Has eaten',
      'Will have eaten',
      'Eating',
  ],
  correctAnswer: 2
},

{
  question: 'Choose the sentence in the past continuous tense:',
  choices: [
      'They visit the zoo every summer.',
      'I have already finished my homework.',
      'She was reading a novel yesterday.',
      'He will go to the party tomorrow.',
  ],
  correctAnswer: 2
},

{
  question: 'Identify the sentence in the present perfect continuous tense:',
  choices: [
      'I will cook dinner tonight.',
      'She has visited that museum.',
      'We have been waiting for an hour.',
      'He sings beautifully.',
  ],
  correctAnswer: 2
},

// Difficult difficulty
{
  question: 'What is the future perfect continuous tense of the verb "run"?',
  choices: [
      'Will run',
      'Will be running',
      'Will have run',
      'Running',
  ],
  correctAnswer: 2
},

{
  question: 'Choose the sentence in the past perfect continuous tense:',
  choices: [
      'She has lived here for ten years.',
      'He has completed the project.',
      'They had been working on the assignment.',
      'I will be studying tomorrow.',
  ],
  correctAnswer: 2
},

{
  question: 'Identify the correct sentence in the present perfect continuous tense:',
  choices: [
      'They have arrived just now.',
      'I am going to the store.',
      'We have been watching a movie for two hours.',
      'She had painted the wall.',
  ],
  correctAnswer: 2
},

{
  question: 'What is the past perfect continuous tense of the verb "swim"?',
  choices: [
      'Had swam',
      'Had been swimming',
      'Swam',
      'Swimming',
  ],
  correctAnswer: 1
},

{
  question: 'Choose the sentence in the future continuous tense:',
  choices: [
      'He played the guitar yesterday.',
      'I will be sleeping at 10 PM.',
      'She has written a novel.',
      'They are singing a song.',
  ],
  correctAnswer: 1
},

        ]
    },
  //////  /////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      name: 'Adjectives and Adverbs',
      questions: [
          { question: 'What is an adjective?', choices: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
          // Add more questions for this topic
      ]
  },
    
    // Add more topics with questions
];

let currentTopic = null;
let currentQuestionIndex = 0;
let userScore = 0;

function selectTopic(topicName) {
    // Check if the user is registered
    
    const userDetails = document.getElementById('userDetails');
    if (userDetails.innerText.trim() === '') {
        // User is not registered, display a message or take appropriate action
        alert('Not registered. Please register to take the test.');
        return;
    }

    // Find the selected topic
    currentTopic = topics.find(topic => topic.name === topicName);

    // Generate a random order for the questions and choices
    currentTopic.questions = generateRandomTestOrder(currentTopic);

    // Set up initial test state
    currentQuestionIndex = 0;
    userScore = 0;

    // Show the test container
    showSection('testContainer');

    // Display the first question
    displayQuestion();
}


function displayQuestion() {
  // Display the current question and choices
  const questionContainer = document.getElementById('questionContainer');
  const currentQuestion = currentTopic.questions[currentQuestionIndex];

  questionContainer.innerHTML = `
      <p>${currentQuestion.question}</p>
      <div id="timer">30</div> <!-- Timer display -->
      <ul>
          ${currentQuestion.choices.map((choice, index) => `
              <li>
                  <input type="radio" name="choice" value="${index}" id="choice${index}">
                  <label for="choice${index}">${choice}</label>
              </li>
          `).join('')}
      </ul>
  `;

  // Start the question timer
  startQuestionTimer();
}
let timer; // Variable to store the timer
  function startQuestionTimer() {
    let timerSeconds = 30;
    const timerButton = document.getElementById('timerButton');

    function updateTimer() {
        timerButton.innerText = `Submit Answer (${timerSeconds}s)`;
        if (timerSeconds > 0) {
            timerSeconds--;
            setTimeout(updateTimer, 1000);
        } else {
            // Move to the next question after 30 seconds
            submitTest();
        }
    }

    // Start the timer
    updateTimer();
}

function displayQuestionWithTimer() {
    // Display the current question and choices
    displayQuestion();

    // Start the timer for 30 seconds
    timer = setTimeout(() => {
        // Move to the next question after 30 seconds
        submitTest();
    }, 30000);
}

function submitTest() {
  // Check if the user is registered
  clearTimeout(timer);
  const userDetails = document.getElementById('userDetails');
  if (userDetails.innerText.trim() === '') {
      alert('Not registered. Please register to take the test.');
      return;
  }

  // Check the selected answer
  const selectedChoice = document.querySelector('input[name="choice"]:checked');
  if (selectedChoice) {
      const selectedAnswer = parseInt(selectedChoice.value, 10);

      // Check if the answer is correct
      if (selectedAnswer === currentTopic.questions[currentQuestionIndex].correctAnswer) {
          userScore++;
      }
  }

  // Move to the next question
  currentQuestionIndex++;

  // Check if the test is complete
  if (currentQuestionIndex < currentTopic.questions.length) {
      // Display the next question with a timer
      displayQuestionWithTimer();
  } else {
      // Show the score container
      showSection('scoreContainer');

      // Display the user's score
      document.getElementById('scoreMessage').innerText = `You scored ${userScore} out of ${currentTopic.questions.length}.`;
  }
}

function displayQuestionWithTimer() {
  // Display the current question and choices
  displayQuestion();

  // Start the timer for 30 seconds
  timer = setTimeout(() => {
      // Move to the next question after 30 seconds
      submitTest();
  }, 30000);
}



function displayQuestion() {
    // Display the current question and choices
    const questionContainer = document.getElementById('questionContainer');
    const currentQuestion = currentTopic.questions[currentQuestionIndex];

    questionContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        <ul>
            ${currentQuestion.choices.map((choice, index) => `
                <li>
                    <input type="radio" name="choice" value="${index}" id="choice${index}">
                    <label for="choice${index}">${choice}</label>
                </li>
            `).join('')}
        </ul>
    `;
}


function goBackToTopics() {
    // Show the topics container
    showSection('topicsContainer');
}
// ... (previous code)

// Function to generate a random order of questions and shuffle choices
function generateRandomTestOrder(topic) {
// Shuffle the order of questions for the selected topic
shuffleArray(topic.questions);

// Shuffle the order of choices for each question
topic.questions.forEach(question => shuffleArray(question.choices));

return topic.questions;
}

function selectTopic(topicName) {
// Find the selected topic
currentTopic = topics.find(topic => topic.name === topicName);

// Generate a random order for the questions and choices
currentTopic.questions = generateRandomTestOrder(currentTopic);

// Set up initial test state
currentQuestionIndex = 0;
userScore = 0;

// Show the test container
showSection('testContainer');

// Display the first question
displayQuestion();
}

// Function to shuffle array elements
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
}

// ... (remaining code)