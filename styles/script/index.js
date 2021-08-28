
//marvel questions//
const StartButton = document.getElementById('start-btn');
const NextButton = document.getElementById('next-btn');
StartButton.addEventListener('click',startGame);
NextButton.addEventListener('click',nextquest2);

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer buttons');
let shuffledQuestions = 0;
let currentQuestionIndex;
let arr = [];
const category = document.getElementById('category');
const frontimg = document.getElementById('front');
const start = document.getElementById('start1-btn');
const body = document.getElementsByTagName('body');
const back = document.getElementById('back-btn');
const title = document.getElementById('title');
const heading = document.getElementById('heading');
const marvel = document.getElementById('marvel');
const anime = document.getElementById('anime');
const db = document.getElementById('dbz');
const naruto = document.getElementById('nar');
const choose = document.getElementById('choose-btn');
choose.addEventListener('click', Begin);
back.addEventListener('click', goback);
start.addEventListener('click', Menu);

function Menu() {
        
frontimg.classList.add('hide');
start.classList.add('hide');
marvel.classList.remove('hide');
anime.classList.remove('hide');

category.classList.remove('hide');
}

function Begin() {
    choose.classList.add('hide');
    marvel.classList.remove('hide');
    anime.classList.remove('hide');
    
    marvel.classList.add('hide');
    anime.classList.add('hide');
    db.classList.remove('hide');
    naruto.classList.remove('hide');
    db.style.display = "block";
    naruto.style.display = "block";
    back.classList.remove('hide');
}

function goback() {
    category.classList.remove('hide');
    back.classList.add('hide');
    marvel.classList.remove('hide');
    anime.classList.remove('hide');
    back.classList.add('hide');
    
    choose.classList.remove('hide');
    title.classList.remove('hide');
    db.style.display = "none";
    naruto.style.display = "none";
    db.classList.remove('fitpagedb');
    db.classList.add('dbcontainer');
    naruto.classList.remove('fitpagenaruto');
    naruto.classList.add('narutocontainer');
    questionContainerElement1.classList.add('hide');
    questionContainerElement2.classList.add('hide');
    questionContainerElement.classList.add('hide');
    StartButton1.classList.remove('hide');
    StartButton2.classList.remove('hide');
    StartButton.classList.remove('hide');
    StartButton.innerText = 'Start';  
    StartButton1.innerText = 'Start';
    StartButton2.innerText = 'Start'; 
    NextButton.classList.add('hide');
    NextButton1.classList.add('hide');
    NextButton2.classList.add('hide');
    marvel.classList.add('container');
    marvel.classList.remove('fitpagemarvel');
}

function startGame() {
    category.classList.add('hide');
    console.log('started');
    back.classList.remove('hide');
    StartButton.classList.add('hide');
    StartButton1.classList.add('hide');
    category.classList.add('hide');
    naruto.style.display = "none";
    title.classList.add('hide');
    anime.classList.add('hide');
    marvel.classList.remove('container');
    marvel.classList.add('fitpagemarvel');
    shuffledQuestions = questions.sort(() =>
        Math.random() - .5);

    currentQuestionIndex= 0;
    questionContainerElement.classList.remove('hide');
    correctPoint = 0;
    incorrectPoint = 0;
    setNextQuestion();
}

 function shuffle()
 {
     arr = questions.slice(0);
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    setNextQuestion();
 }


function nextquest2() {
    currentQuestionIndex++;
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    resetState();
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}





function resetState() {
NextButton.classList.add('hide');
while (answerButtonsElement.firstChild)
{
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
}
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct; 
  if (correct) {
    correctPoint++;
} else {
    incorrectPoint++;
}

  setstatusClass(document.body, correct); 
  Array.from(answerButtonsElement.children).forEach(button =>
    {
        setstatusClass(button, button.dataset.correct);
    }) 
    NextButton.classList.remove('hide');

    if (currentQuestionIndex <= 10) {
      NextButton.classList.remove('hide');  
    }
    else{
        StartButton.innerText = 'Restart';
        StartButton.classList.remove('hide');
        NextButton.classList.add('hide');
        score = correctPoint/7 *100;
        round = Math.round(score * 10) / 10;
        questionElement.innerHTML = 'Correct : ' + correctPoint + '<br>' +
         'Incorrect : ' + incorrectPoint + '<br>' + 'Score : ' + round + '%';
    }
}

function setstatusClass(element, correct)
{
   clearStatusClass(element);
   if (correct) {
      element.classList.add('correct'); 
   }
   else {
       element.classList.add('wrong');
   }
}

function clearStatusClass(element)
{
    element.classList.remove('correct'); 
    element.classList.remove('wrong'); 
}

const questions = [
{
    question: 'Who said "You people are so petty and tiny"?',
    answers: [
        {text: 'Thor', correct: true},
        {text: 'Captain America', correct: false},
        {text: 'Bruce Banner', correct: false},
        {text: 'Nick Fury', correct: false}
    ]
},
{
    question: 'Who said "And Hulk... smash!"?',
    answers: [
        {text: 'Thor', correct: false},
        {text: 'Captain America', correct: true},
        {text: 'Tony Stark', correct: false},
        {text: 'Nick Fury', correct: false}
    ]
},
{
    question: 'Who said "As much as I hate to admit it: if were gonna win this fight, some of us might have to lose it"?',
    answers: [
        {text: 'Bucky Barnes', correct: false},
        {text: 'Captain America', correct: false},
        {text: 'Sam Wilson', correct: false},
        {text: 'Clint Barton', correct: true}
    ]
},
{
    question: 'Who said "Bunch of jackasses standing in a circle!"?',
    answers: [
        {text: 'Drax', correct: false},
        {text: 'Peter Quill', correct: false},
        {text: 'Gamora', correct: false},
        {text: 'Rocket', correct: true}
    ]
},
{
    question: 'Who said "And what did the book say about the dangers of performing that ritual?"',
    answers: [
        {text: 'Wong', correct: true},
        {text: 'The Ancient One', correct: false},
        {text: 'Baron Mordo', correct: false},
        {text: 'Kaecilius', correct: false}
    ]
},
{
    question: 'Who said "This is weird, we got a Sovereign fleet approaching from the rear"?',
    answers: [
        {text: 'Rocket', correct: false},
        {text: 'Peter Quill', correct: true},
        {text: 'Drax', correct: false},
        {text: 'Gamora', correct: false}
    ]
},
{
    question: 'Who said "It is not wise to keep two Infinity Stones so close together"?',
    answers: [
        {text: 'Hogun', correct: false},
        {text: 'Sif', correct: false},
        {text: 'Volstagg', correct: true},
        {text: 'Tony Stark', correct: false}
    ]
},
{
    question: 'Who said "Hes a friend from work!"?',
    answers: [
        {text: 'Thor', correct: true},
        {text: 'Captain America', correct: false},
        {text: 'Tony Stark', correct: false},
        {text: 'Falcon', correct: false}
    ]
},
{
    question: 'Who said "Get this man a shield"?',
    answers: [
        {text: 'Tony Stark', correct: false},
        {text: 'Falcon', correct: false},
        {text: 'Black Panther', correct: true}
    ]
},
{
    question: 'Who said "I am inevitable"?',
    answers: [
        {text: 'Kilmonger', correct: false},
        {text: 'Ultron', correct: false},
        {text: 'Thanos', correct: true},
        {text: 'Red Skull', correct: false}
    ]
},
{
    question: 'Who said "Ive mastered the ability of standing so incredibly still that I become invisible to the eye."?',
    answers: [
        {text: 'Star Lord', correct: false},
        {text: 'Thor', correct: false},
        {text: 'Rocket', correct: false},
        {text: 'Drax', correct: true}
    ]
},
{
    question: 'Who said "The Wi-Fi password. We’re not savages."?',
    answers: [
        {text: 'Black Widow', correct: false},
        {text: 'Mordo', correct: true},
        {text: 'Tony Stark', correct: false},
        {text: 'Drax', correct: false}
    ]
},
{
    question: 'Who said “I live for the simple things… like how much this is gonna hurt.”?',
    answers: [
        {text: 'Kilmonger', correct: false},
        {text: 'Rocket', correct: true},
        {text: 'Gamora', correct: false},
        {text: 'Thor', correct: false}
    ]
},
{
    question: 'Who said "Thank you, sweet rabbit."?',
    answers: [
        {text: 'Thor', correct: true},
        {text: 'Captain America', correct: false},
        {text: 'Drax', correct: false},
        {text: 'Spider-Man', correct: false}
    ]
},
{
    question: 'Who said "Hey guys, have you ever seen that really old movie, Empire Strikes Back?"?',
    answers: [
        {text: 'Ant-Man', correct: false},
        {text: 'Tony Stark', correct: false},
        {text: 'Thor', correct: false},
        {text: 'Spider-Man', correct: true}
    ]
},
{
    question: 'Who said "I have been falling, for thirty minutes!"?',
    answers: [
        {text: 'Drax', correct: false},
        {text: 'Ant-Man', correct: false},
        {text: 'Loki', correct: true},
        {text: 'Thor', correct: false}
    ]
},
{
    question: 'Who said "We have a Hulk"?',
    answers: [
        {text: 'Tony Stark', correct: true},
        {text: 'Captain America', correct: false},
        {text: 'Black Widow', correct: false},
        {text: 'Hawkeye', correct: false}
    ]
},
{
    question: 'Who said "Nothing goes over my head. My reflexes are too fast, I would catch it."?',
    answers: [
        {text: 'Loki', correct: false},
        {text: 'Rocket', correct: false},
        {text: 'Thor', correct: false},
        {text: 'Drax', correct: true}
    ]
},
{
    question: 'Who said "Theres an Ant-Man and a Spider-Man"?',
    answers: [
        {text: 'Doctor Strange', correct: false},
        {text: 'Bruce Banner', correct: true},
        {text: 'Nick Fury', correct: false},
        {text: 'Falcon', correct: false}
    ]
},
{
    question: 'Who said "Uh...genius, billionaire, playboy, philanthropist"?',
    answers: [
        {text: 'War Machine', correct: false},
        {text: 'Hogan', correct: false},
        {text: 'Tony Stark', correct: true},
        {text: 'Spider-Man', correct: false}
    ]
},
{
    question: 'Who said "Why was she up there this whole time"?',
    answers: [
        {text: 'Black Widow', correct: false},
        {text: 'Scarlet Witch', correct: false},
        {text: 'Captain America', correct: false},
        {text: 'Okoye', correct: true}
    ]
},
{
    question: 'Who said "I told you, I dont want to join your super secret boy band."?',
    answers: [
        {text: 'Star-Lord', correct: false},
        {text: 'Tony Stark', correct: true},
        {text: 'Spider-Man', correct: false},
        {text: 'Doctor Strange', correct: false}
    ]
},
{
    question: 'Who said "I had strings but now Im free"?',
    answers: [
        {text: 'Ultron', correct: true},
        {text: 'Thanos', correct: false},
        {text: 'Mordo', correct: false},
        {text: 'Ghost', correct: false}
    ]
},
{
    question: 'Who said "Im always angry"?',
    answers: [
        {text: 'Hawkeye', correct: false},
        {text: 'The Winter Soldier', correct: false},
        {text: 'Bruce Banner', correct: true},
        {text: 'Black Panther', correct: false}
    ]
},
{
    question: 'Who said "You get killed, walk it off"?',
    answers: [
        {text: 'Black Widow', correct: false},
        {text: 'Nick Fury', correct: false},
        {text: 'Captain America', correct: true},
        {text: 'Tony Stark', correct: false}
    ]
},
{
    question: 'What is the alien race Loki sends to invade Earth in The Avengers?',
    answers: [
        {text: 'The Skrulls', correct: false},
        {text: 'The Kree', correct: false},
        {text: 'The Chitauri', correct: true},
        {text: 'The Flerkens', correct: false}
    ]
},
{
    question: 'Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?',

    answers: [
        {text: 'The Collector ', correct: false},
        {text: 'Loki', correct: true},
        {text: 'Captain America', correct: false},
        {text: 'Tony Stark', correct: false}
    ]
},
{
    question: 'About which city do Hawkeye and Black Widow often reminisce?',
    answers: [
        {text: 'Sokovia', correct: false},
        {text: 'Istanbul', correct: false},
        {text: 'Budapest', correct: true},
        {text: 'Prague', correct: false}
    ]
},
{
    question: 'What does the Winter Soldier say after Steve recognizes him for the first time?',
    answers: [
        {text: ' “Who the hell is Bucky?”', correct: true},
        {text: '“He’s gone”', correct: false},
        {text: '“Do I know you?”', correct: false},
        {text: '"What did you say?"', correct: false}
    ]
},
{
    question: 'Who is killed by Loki in the Avengers?',
    answers: [
        {text: 'Maria Hill', correct: false},
        {text: 'Nick Fury', correct: false},
        {text: 'Doctor Erik Selvig', correct: false},
        {text: 'Agent Coulson', correct: true}
    ]
},
{
    question: 'Who is Black Panther’s sister?',
    answers: [
        {text: 'Nakia', correct: false},
        {text: 'Shuri', correct: true},
        {text: 'Okoye', correct: false},
        {text: 'Ramonda', correct: false}
    ]
},
{
    question: 'What type of doctor is Stephen Strange?',
    answers: [
        {text: 'Plastic Surgeon', correct: false},
        {text: 'Trauma Surgeon', correct: false},
        {text: 'Cardiothoracic Surgeon', correct: false},
        {text: 'Neurosurgeon', correct: true}
    ]
},
{
    question: 'What alien race does Ronan the Accuser belong to?',
    answers: [
        {text: 'Jitari', correct: false},
        {text: 'The kree', correct: true},
        {text: 'Badoon', correct: false},
        {text: 'Celestials', correct: false}
    ]
},
{
    question: 'What is the name of Ant-Mans archenemy in the first film?',
    answers: [
        {text: 'Hydra', correct: false},
        {text: 'Valcon', correct: false},
        {text: 'Yellowjacket', correct: true},
        {text: 'Yellowcoat', correct: false}
    ]
},
{
    question: 'What is Deadpools real name?',
    answers: [
        {text: 'Slade wilson', correct: false},
        {text: 'Wade wilson', correct: true},
        {text: 'Wade wilkson', correct: false},
        {text: 'Henry brown', correct: false}
    ]
},
{
    question: 'Complete the quote: "Thats my secret, Cap. Im always..."',
    answers: [
        {text: 'Hungry', correct: false},
        {text: 'Sad', correct: false},
        {text: 'Angry', correct: true},
        {text: 'High', correct: false}
    ]
},
{
    question: 'whats the name of the car that tony chose for the color of his suit?',
    answers: [
        {text: 'red steel', correct: false},
        {text: 'the golden red', correct: false},
        {text: 'red devil', correct: false},
        {text: 'hot rod', correct: true}
    ]
},
{
    question: 'whats the first object steve rogers used as a shield in captain america?',
    answers: [
        {text: 'car door', correct: false},
        {text: 'captain america shield', correct: false},
        {text: 'trash can lid', correct: true},
        {text: 'wood', correct: false}
    ]
},
{
    question: 'which of these  infinity stones was in lokis spear?',
    answers: [
        {text: 'Space sone', correct: false},
        {text: 'mind stone', correct: true},
        {text: 'reality stone', correct: false},
        {text: 'time stone', correct: false}
    ]
},
{
    question: 'In which movie did black widow make her first appearance?',
    answers: [
        {text: 'the avengers', correct: false},
        {text: 'iron man', correct: false},
        {text: 'iron man 2', correct: true},
        {text: 'captain america 2', correct: false}
    ]
},
{
    question: 'which of these was the location of the collector?',
    answers: [
        {text: 'Nidavellir', correct: false},
        {text: 'Earth', correct: false},
        {text: 'Asgard', correct: false},
        {text: 'Nowhere', correct: true}
    ]
},
{
    question: 'Who made Captain America’s shield?',
    answers: [
        {text: 'Nick fury', correct: false},
        {text: 'Tony stark', correct: false},
        {text: 'Bruce banner', correct: false},
        {text: 'Howard Stark', correct: true}
    ]
},
{
    question: 'What is Black Widow’s real name?',
    answers: [
        {text: 'Natasha Romanoff', correct: true},
        {text: 'Natalie winstead', correct: false},
        {text: 'Amander waller', correct: false},
        {text: 'Natasha romof', correct: false}
    ]
},
{
    question: 'In which film’s post-credit scene did Thanos first appear?',
    answers: [
        {text: 'the Avengers 2', correct: false},
        {text: 'The Avengers', correct: true},
        {text: 'Thor 2', correct: false},
        {text: 'Gaurdians of the galaxy', correct: false}
    ]
},
{
    question: 'What is the name of the microscopic universe Ant-Man travels to when he goes sub-atomic?',
    answers: [
        {text: 'Xenatic realm', correct: false},
        {text: 'Folly realm', correct: false},
        {text: 'Quantum Realm', correct: true},
        {text: 'Quantumatic Realm', correct: false}
    ]
},
{
    question: 'What species is Loki revealed to be?',
    answers: [
        {text: 'Asgardian', correct: false},
        {text: 'Human', correct: false},
        {text: 'Xandarian', correct: false},
        {text: 'Frost giant', correct: true}
    ]
},
{
    question: 'Who killed Tony Stark’s parents?',
    answers: [
        {text: 'Hydra', correct: false},
        {text: 'The winter soldier', correct: true},
        {text: 'Red skull', correct: false},
        {text: 'Loki', correct: false}
    ]
},
{
    question: 'How many Infinity Stones are there?',
    answers: [
        {text: 'Five', correct: false},
        {text: 'Seven', correct: false},
        {text: 'Eight', correct: false},
        {text: 'Six', correct: true}
    ]
},
{
    question: 'What is the real name of the Black Panther?',
    answers: [
        {text: 'M’Baku', correct: false},
        {text: 'N’Jobu', correct: false},
        {text: 'T’Challa', correct: true},
        {text: 'N’Jadaka', correct: false}
    ]
},
{
    question: 'which is the first stone thanos found?',
    answers: [
        {text: 'soul stone', correct: false},
        {text: 'power stone', correct: true},
        {text: 'reality stone', correct: false},
        {text: 'space stone', correct: false}

    ]
},
{
    question: 'what is the name of the elite team of thanos?',
    answers: [
        {text: 'dark order', correct: false},
        {text: 'seal team', correct: false},
        {text: 'anti-avengers', correct: false},
        {text: 'black order', correct: true}

    ]
},
{
    question: 'what is the name of iron mans first suit ever made?',
    answers: [
        {text: 'mark v', correct: false},
        {text: 'mark 1', correct: true},
        {text: 'mark 42', correct: false},
        {text: 'mark x', correct: false}

    ]
},
{
    question: 'what is the name of star-lords first  ship?',
    answers: [
        {text: 'Milano', correct: true},
        {text: 'eagle 1', correct: false},
        {text: 'dratios', correct: false},
        {text: 'The Millana', correct: false}

    ]
},
{
    question: 'who killed draxs family?',
    answers: [
        {text: 'Thanos', correct: false},
        {text: 'Ronin', correct: true},
        {text: 'Winter soldier', correct: false},
        {text: 'Loki', correct: false}

    ]
},
{
    question: 'whats is the name of the fire demon in Thor 3?',
    answers: [
        {text: 'vagar', correct: false},
        {text: 'sathur', correct: false},
        {text: 'saldur', correct: false},
        {text: 'surtur', correct: true}

    ]
},
{
    question: 'what type of car does tony stark drive?',
    answers: [
        {text: 'Nissan', correct: false},
        {text: 'Audi', correct: true},
        {text: 'Toyota', correct: false},
        {text: 'Tesla', correct: false}

    ]
},
{
    question: 'what is the name of the character hawkeye becomes in the start of endgame?',
    answers: [
        {text: 'Ronin', correct: true},
        {text: 'Ninja', correct: false},
        {text: 'Black knight', correct: false},
        {text: 'Koslo', correct: false}

    ]
},
{
    question: 'what does Thanos refer to himself as?',
    answers: [
        {text: 'Prophet', correct: false},
        {text: 'Mad titan', correct: false},
        {text: 'Survivor', correct: true},
        {text: 'A god', correct: false}

    ]
},
{
    question: 'what is the name of dwarf that made Thors hammer?',
    answers: [
        {text: 'Aldur', correct: false},
        {text: 'Eitri', correct: true},
        {text: 'Daitrui', correct: false},
        {text: 'Bob', correct: false}

    ]
}
];










//Anime Questions dbz//
const StartButton1 = document.getElementById('start-btn1');
const NextButton1 = document.getElementById('next-btn1');
StartButton1.addEventListener('click',startGame1);
NextButton1.addEventListener('click',nextquest);

const questionContainerElement1 = document.getElementById('question-container1');
const questionElement1 = document.getElementById('question1');
const answerButtonsElement1 = document.getElementById('answer buttons1');
let shuffledQuestions1 = 0;
let currentQuestionIndex1;
let correctPoint = 0;
let incorrectPoint = 0;
let score = 0;
let round = 0;
let arr1 = [];
function startGame1() {
    category.classList.add('hide');
    naruto.style.display = "none";
    title.classList.add('hide');
    
    db.classList.remove('dbcontainer')
    db.classList.add('fitpagedb');
    StartButton1.classList.add('hide')
    shuffledQuestions1 = questions1.sort(() =>
        Math.random() - .5);
    currentQuestionIndex1= 0;
    questionContainerElement1.classList.remove('hide');
    correctPoint = 0;
    incorrectPoint = 0;
    
    shuffle();
    
}


function nextquest() {
    currentQuestionIndex1++;
    setNextQuestion1();
}
 

function setNextQuestion1() {
    showQuestion1(shuffledQuestions1[currentQuestionIndex1]);
    
}



function showQuestion1(question1) {
    resetState1();
    questionElement1.innerText = question1.question1;
    question1.answers1.forEach(answer1 => {
        const button1 = document.createElement('button');
        button1.innerText = answer1.text;
        button1.classList.add('btn');

        if (answer1.correct) {
            button1.dataset.correct = answer1.correct;
        }
        button1.addEventListener('click',selectAnswer1);
        answerButtonsElement1.appendChild(button1);
    })
    
}





function resetState1() {
NextButton1.classList.add('hide');
while (answerButtonsElement1.firstChild)
{
    answerButtonsElement1.removeChild(answerButtonsElement1.firstChild);
}
}

function selectAnswer1(e) {
  const selectedButton1 = e.target;
  const correct1 = selectedButton1.dataset.correct; 
if (correct1) {
    correctPoint++;
} else {
    incorrectPoint++;
}

  setstatusClass1(document.body, correct1); 
  Array.from(answerButtonsElement1.children).forEach(button1 =>
    {
        setstatusClass1(button1, button1.dataset.correct);
    }) 
    NextButton1.classList.remove('hide');
    
    if (currentQuestionIndex1 <= 10) {
      NextButton1.classList.remove('hide');  
    }
    else{
        StartButton1.innerText = 'Restart';
        StartButton1.classList.remove('hide');
        score = correctPoint/shuffledQuestions1.length *100;
        round = Math.round(score * 10) / 10
        questionElement1.innerHTML = 'Correct : ' + correctPoint + '<br>' +
         'Incorrect : ' + incorrectPoint + '<br>' + 'Score : ' + round + '%';
    }
    
}

function setstatusClass1(element, correct1)
{
   clearStatusClass1(element);
   if (correct1) {
      element.classList.add('correct'); 
       
   }
   else {
       element.classList.add('wrong');
       
   }
   
  
}

function clearStatusClass1(element)
{
    element.classList.remove('correct'); 
    element.classList.remove('wrong'); 
}

const questions1 = [
{
    question1: 'What race is Goku?',
    answers1: [
        {text: 'Namekian', correct: false},
        {text: 'Earthling', correct: false},
        {text: 'Saiyan', correct: true},
        {text: 'Android', correct: false}
    ]
}, 
{ question1: 'Who is Gokus brother?',
    answers1: [
    {text: 'Vegeta', correct: false},
    {text: 'Gohan', correct: false},
    {text: 'Nappa', correct: false},
    {text: 'Raditz', correct: true}
] 
}, 
{ question1: 'Where does Goku live?',
answers1: [
{text: 'Earth', correct: true},
{text: 'Namek', correct: false},
{text: 'Planet Vegeta', correct: false},
{text: 'Alpha', correct: false}
] 
},
{ question1: 'Who teams up with Goku to fight Raditz?',
    answers1: [
    {text: 'Vegeta', correct: false},
    {text: 'Piccolo', correct: true},
    {text: 'Tien', correct: false},
    {text: 'Krillin', correct: false}
] 
},
{ question1: 'Who does Goku train with in Other World before fighting the Saiyans?',
    answers1: [
    {text: 'Pikkon', correct: false},
    {text: 'Supreme Kai', correct: false},
    {text: 'Grand Kai', correct: false},
    {text: 'King Kai', correct: true}
] 
},
{ question1: 'What move does King Kai teach Goku?',
    answers1: [
    {text: 'Kamehameha', correct: false},
    {text: 'Triple Beam Cannon ', correct: true},
    {text: 'Spirit Bomb', correct: false},
    {text: 'Destructo Disc', correct: false}
] 
},
{ question1: 'Which move damages Gokus body?',
    answers1: [
    {text: 'Spirit Bomb ', correct: false},
    {text: 'Triple Beam Cannon ', correct: false},
    {text: 'Kaioken', correct: true},
    {text: 'Destructo Disc', correct: false}
] 
},
{ question1: 'How many forms does Frieza have?',
    answers1: [
    {text: '1 ', correct: false},
    {text: '2 ', correct: false},
    {text: '3', correct: false},
    {text: '4', correct: true}
] 
},
{ question1: 'Who cuts Frieza in half?',
    answers1: [
    {text: 'Goku ', correct: false},
    {text: 'Krillin', correct: false},
    {text: 'Frieza', correct: true},
    {text: 'Vegeta', correct: false}
] 
},
{ question1: 'Who comes from the future to warn the Z warriors?',
    answers1: [
    {text: 'Trunks ', correct: true},
    {text: 'Gohan', correct: false},
    {text: 'Bulma', correct: false},
    {text: 'Goten', correct: false}
] 
},
{ question1: 'Who does Piccolo fuse with to fight the Androids?',
    answers1: [
    {text: 'Tein', correct: false},
    {text: 'Kami', correct: true},
    {text: 'Vegeta', correct: false},
    {text: 'Goku', correct: false}
] 
},
{ question1: 'What does Trunks sacrifice to get stronger in the fight with Cell?',
    answers1: [
    {text: 'Hearing', correct: false},
    {text: 'Eye Sight', correct: false},
    {text: 'Ki Blasts', correct: false},
    {text: 'Speed', correct: true}
] 
},
{ question1: 'Who is the first Z warrior to go Super Saiyan 2?',
    answers1: [
    {text: 'Goku ', correct: false},
    {text: 'Trunks', correct: false},
    {text: 'Gohan', correct: true},
    {text: 'Vegeta', correct: false}
] 
},
{ question1: 'What move does Goku use to defeat Buu?',
    answers1: [
    {text: 'Kamehameha', correct: false},
    {text: 'The Spirit Bomb', correct: true},
    {text: 'Kaioken', correct: false},
    {text: 'Destructo Disc', correct: false}
] 
},
{
    question1: 'Whats the highest Super Saiyan level attained by Vegeta in DBZ?',
    answers1: [
        {text: 'Super Saiyan 1', correct: false},
        {text: 'Super Saiyan 2', correct: true},
        {text: 'Super Saiyan 3', correct: false},
        {text: 'Super Saiyan 4', correct: false}
    ]
}, 
{ question1: 'Why does Vegeta allow himself to be possessed by Babidi?',
    answers1: [
    {text: 'In order to fight Goku', correct: true},
    {text: 'In order to discover Babidis true plan ', correct: false},
    {text: 'In order to win the World Martial Arts Tournament', correct: false},
    {text: 'In order to fight Dabora', correct: false}
] 
},
{ question1: 'Which of the following attacks is Vegeta known to perform?',
    answers1: [
    {text: 'Kamehameha', correct: false},
    {text: 'Masenko ', correct: false},
    {text: 'Big Bang Attack', correct: true},
    {text: 'Special Beam Cannon', correct: false}
] 
},
{ question1: 'When Frieza is in his second form, whats his power level?',
    answers1: [
    {text: '500,000 ', correct: false},
    {text: '1,000,000', correct: true},
    {text: '350,000', correct: false},
    {text: '100,000', correct: false}
] 
},
{ question1: 'Who does Cell absorb in order to achieve his second transformation?',
    answers1: [
    {text: 'Android 17', correct: true},
    {text: 'Android 18', correct: false},
    {text: 'Android 16', correct: false},
    {text: 'Android 19', correct: false}
] 
},
{ question1: 'How has Dr. Gero been collecting data on the Z fighters after all these years?',
    answers1: [
    {text: 'Theres a rat among the Z fighters', correct: false},
    {text: 'He used Babas crystal ball', correct: false},
    {text: 'A mechanical fly has been following the Z fighters constantly', correct: true},
    {text: 'He had Android 19 observe them from afar', correct: false}
] 
},
{ question1: 'How does Super Buu destroy the entire human race?',
    answers1: [
    {text: 'He takes his time hunting each human down personally', correct: false},
    {text: 'He turns all humans to candy and eats them ', correct: false},
    {text: 'He uses the Dragon Balls to wish them dead', correct: false},
    {text: 'From Kamis lookout, he sends a stream of beams targeting each individual human ', correct: true}
] 
},
{ question1: 'During the Saiyan Saga, what does the scouter say about Gokus power level? ',
    answers1: [
    {text: 'Its just under 10000!', correct: false},
    {text: 'Its about 500!', correct: false},
    {text: 'Its almost at 2000!', correct: false},
    {text: 'Its over 9000!', correct: true}
] 
},
{ question1: 'Do you know the name of the elite mercenary group that came to Namek to help Frieza?',
    answers1: [
    {text: 'Frieza Force', correct: false},
    {text: 'Ginyu Force', correct: true},
    {text: 'Kai Force', correct: false},
    {text: 'Elite Force', correct: false}
] 
},
{ question1: 'Captain Ginyu had which ability that he could use if he was outclassed in a fight?',
    answers1: [
    {text: 'Teleportation', correct: false},
    {text: 'Self destruct', correct: false},
    {text: 'Revival', correct: false},
    {text: 'Body switch', correct: true}
] 
},

{ question1: 'Before King Kai would train Goku, he had to do what?',
    answers1: [
    {text: 'Fight him', correct: false},
    {text: 'Make him laugh', correct: true},
    {text: 'Shine his shoes', correct: false},
    {text: 'Bring him food', correct: false}
] 
},
{ question1: 'Why is Goku taken out of commission during the fight with the Androids?',
    answers1: [
    {text: 'He is outmatched in battle.', correct: false},
    {text: 'His power is stolen.', correct: false},
    {text: 'He gets a heart virus.', correct: true},
    {text: 'He is wished away.', correct: false}
] 
},
{ question1: 'What move does Goku use to defeat Buu?',
    answers1: [
    {text: 'Kamehameha', correct: false},
    {text: 'The Spirit Bomb', correct: false},
    {text: 'Kaioken', correct: false},
    {text: 'Destructo Disc', correct: true}
] 
},
{ question1: 'Who kills Nappa?',
    answers1: [
    {text: 'Goku', correct: false},
    {text: 'Vegeta', correct: true},
    {text: 'Piccolo', correct: false},
    {text: 'Tien', correct: false}
] 
},
{ question1: 'Who gets defeated by Android18?',
    answers1: [
    {text: 'Goku', correct: false},
    {text: 'Vegeta', correct: true},
    {text: 'Piccolo', correct: false},
    {text: 'Trunks', correct: false}
] 
},
{ question1: 'Who cuts off the tail of Vegeta, while he is in his Great Ape form?',
    answers1: [
    {text: 'Gohan', correct: false},
    {text: 'Krillin', correct: false},
    {text: 'Yajirobe', correct: true},
    {text: 'Goku', correct: false}
] 
},
{ question1: 'Who did Super Buu absorb first?',
    answers1: [
    {text: 'Gotenks', correct: true},
    {text: 'Vegeta', correct: true},
    {text: 'Piccolo', correct: false},
    {text: 'Gohan', correct: false}
] 
}
]




//anime questions naruto//
const StartButton2 = document.getElementById('start-btn2');
const NextButton2 = document.getElementById('next-btn2');
StartButton2.addEventListener('click',startGame2);
NextButton2.addEventListener('click',nextquest1);

const questionContainerElement2 = document.getElementById('question-container2');
const questionElement2 = document.getElementById('question2');
const answerButtonsElement2 = document.getElementById('answer buttons2');
let currentQuestionIndex2;
let shuffledQuestions2;
let correctPoint1 = 0;
let incorrectPoint1 = 0;
let score1 = 0;
let round1 = 0;


function startGame2() {
    category.classList.add('hide');
    console.log('started');
    db.style.display = "none";
    title.classList.add('hide');
    
    naruto.classList.remove('narutocontainer')
    naruto.classList.add('fitpagenaruto');
    StartButton2.classList.add('hide')
   shuffledQuestions2 = questions2.sort(() =>
        Math.random() - .5);
    currentQuestionIndex2= 0;
    questionContainerElement2.classList.remove('hide');
    correctPoint1 = 0;
    incorrectPoint1 = 0;
    setNextQuestion2();
    
}

function nextquest1() {
    currentQuestionIndex2++;
    setNextQuestion2();
}
 

function setNextQuestion2() {
    showQuestion2(shuffledQuestions2[currentQuestionIndex2]);
    
}


function showQuestion2(question2) {
    resetState2();
    questionElement2.innerText = question2.question2;
    question2.answers2.forEach(answer2 => {
        const button2 = document.createElement('button');
        button2.innerText = answer2.text;
        button2.classList.add('btn');

        if (answer2.correct) {
            button2.dataset.correct = answer2.correct;
        }
        button2.addEventListener('click',selectAnswer2);
        answerButtonsElement2.appendChild(button2);
    })
    
}

function resetState2() {
NextButton2.classList.add('hide');
while (answerButtonsElement2.firstChild)
{
    answerButtonsElement2.removeChild(answerButtonsElement2.firstChild);
}
}

function selectAnswer2(e) {
  const selectedButton2 = e.target;
  const correct2 = selectedButton2.dataset.correct; 
if (correct2) {
    correctPoint1++;
} else {
    incorrectPoint1++;
}

  setstatusClass2(document.body, correct2); 
  Array.from(answerButtonsElement2.children).forEach(button2 =>
    {
        setstatusClass2(button2, button2.dataset.correct);
    }) 
    NextButton2.classList.remove('hide');
    
    if (shuffledQuestions2.length > currentQuestionIndex2 + 1) {
      NextButton2.classList.remove('hide');  
    }
    else{
        StartButton2.innerText = 'Restart';
        StartButton2.classList.remove('hide');
        score1 = correctPoint1/shuffledQuestions2.length *100;
        round1 = Math.round(score1 * 10) / 10;
        questionElement2.innerHTML = 'Correct : ' + correctPoint1 + '<br>' +
         'Incorrect : ' + incorrectPoint1 + '<br>' + 'Score : ' + round1 + '%';
    }
    
}

function setstatusClass2(element, correct2)
{
   clearStatusClass2(element);
   if (correct2) {
      element.classList.add('correct'); 
       
   }
   else {
       element.classList.add('wrong');
       
   }
   
  
}

function clearStatusClass2(element)
{
    element.classList.remove('correct'); 
    element.classList.remove('wrong'); 
}

const questions2 = [
{
    question2: 'Which famed clan was completely massacred?',
    answers2: [
        {text: 'Uchiha', correct: true},
        {text: 'Hyuuga', correct: false},
        {text: 'Uzamaki', correct: false},
        {text: 'Nara', correct: false}
    ]
}, { question2: 'Which friend died during the Fourth Great War?',
    answers2: [
    {text: 'Hinata', correct: false},
    {text: 'Shikamaru', correct: false},
    {text: 'Choji', correct: false},
    {text: 'Neji', correct: true}
] 
}, { question2: 'Which trait is common in the Uzumaki clan?',
answers2: [
{text: 'The ability to use Rasengan', correct: false},
{text: 'Blue eyes', correct: false},
{text: 'Red hair', correct: true},
{text: 'Spunk', correct: false}
] 
},
{
    question2: 'Who is the first enemy Naruto faces?',
    answers2: [
        {text: 'Mizuki', correct: true},
        {text: 'Orochimaru', correct: false},
        {text: 'Zabuza', correct: false},
        {text: 'Kabuto', correct: false}
    ]
},
{
    question2: 'Who was the youngest Jonin?',
    answers2: [
        {text: 'Itachi ', correct: false},
        {text: 'Kakashi ', correct: true},
        {text: 'Sakura', correct: false},
        {text: 'Neji ', correct: false}
    ]
},
{
question2: 'What does Tsunade summon?',
answers2: [
    {text: 'Lizard ', correct: false},
    {text: 'Toad ', correct: false},
    {text: 'Snail', correct: true},
    {text: 'slug', correct: false}
]
},
{
    question2: 'At the beginning of Naruto, what is Sasuke`s goal?',
    answers2: [
        {text: 'Kill his brother ', correct: true},
        {text: 'Take over the world', correct: false},
        {text: 'Become Hokage', correct: false},
        {text: 'Impress Sakura ', correct: false}
    ]
    },

{
question2: 'What is Sasuke`s team called?',
answers2: [
    {text: 'Toku', correct: false},
    {text: 'Tiki ', correct: false},
    {text: 'Toka', correct: false},
    {text: 'Taka', correct: true}
]
},

{
    question2: 'Which Hokage sealed the nine-tailed fox inside Naruto?',
    answers2: [
        {text: 'second Hokage', correct: false},
        {text: 'fourth Hokage', correct: true},
        {text: 'first Hokage', correct: false},
        {text: 'third Hokage', correct: false}
    ]
    },

    {
        question2: 'The Sharingan is what type of jutsu?',
        answers2: [
            {text: 'Genjutsu', correct: true},
            {text: 'Taijutsu', correct: false},
            {text: 'Dojutsu', correct: false},
            {text: 'Ninjutsu', correct: false}
        ]
        }
]

db.classList.add('hide');
    naruto.classList.add('hide');
    db.style.display = "none";
    naruto.style.display = "none";

 
      
      
   
  
   