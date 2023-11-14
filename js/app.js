

let guesses1 = document.getElementById("slider1");
let words1 = document.getElementById("slider2");
let words_count = document.getElementById("slider2");

let playerInput = document.getElementById("player-guess");
let playBtn = document.getElementById("playBtn");
let hintBtn = document.getElementById("show-hint");
let river = document.getElementById("river");
let redBtn = document.getElementById("red");
let yellowBtn = document.getElementById("yellow");
let purpleBtn = document.getElementById("purple");
let normalModeBtn = document.getElementById("normal-mode");
let arcadeModeBtn = document.getElementById("arcade-mode");
let modeBtn = document.getElementById("modeBtn");
let flag=1;

let winNotification = document.getElementById("notification-winner");
let completedNotification = document.getElementById("notification-completed");
let lostNotification = document.getElementById("notification-lost");
let aelNotification = document.getElementById("notification-entered-letter");
let dblNotification = document.getElementById("notification-double-letter");



let speechBubble = document.querySelector("div.speech-bubble");
let trophyBox = document.getElementById("trophyBox");
let trophyTxt = document.getElementById("trophy-txt");
let hintBox = document.getElementById("hint");
let normalModeContainer = document.getElementById("normalInput");
let arcadeContainer = document.getElementById("campaign-container");
let playInfoBox = document.getElementById("playerInfo");
let waterfall = document.getElementById("waterfall");
let playerReset = document.getElementById("player");
let gamemodePopup = document.getElementById("gamemode");
let guessDiv = document.getElementById("guessed");
let playerTile = document.createElement("div");
let player = document.getElementById("player");
let blankWord = document.getElementById("word");









let blankey = document.createElement("div");
let scream = new Audio("sounds/screamfall.mp3");
let unlocked = new Audio("sounds/unlocked.mp3");
let splash = new Audio("sounds/splash.wav");
let blank = " _";




let playerArray = [];
let alreadyentered=[];
let correctAnswerArray = [];
let filledArray = [];
let wordArray = [];
let guessedLetters = [];
let wordChoosen = "";
let i1=30;
let guesses2=0;
let w_c=30;

//<!--Game state-->//
let playerMover = 0;
let playerGuess = [];
let playerLife = wordArray.length;
let wordChooserBrain;
let trophyAchieved = false;
let normalGamesWon = 0;
let normalGamesLost = 0;
let achievementCounter = 0;
let hintCounter = 0;
let arcadeGamesWon = 0;
let arr_flag=0;


//<!--Game database-->//
let hint = {
  0: "the activity of spending a vacation living in a camp, tent, or camper.",
  1: "a portable shelter made of cloth, supported by one or more poles and stretched tight by cords or loops attached to pegs driven into the ground.",
  2: "the rapid oxidation of a material in the exothermic chemical process of combustion, releasing heat, light, and various reaction products.",
  3: "a woody perennial plant, typically having a single stem or trunk growing to a considerable height and bearing lateral branches at some distance from the ground.",
  4: "a small axe with a short handle for use in one hand.",
  5: "a living organism that feeds on organic matter, typically having specialized sense organs and nervous system and able to respond rapidly to stimuli.",
  6: "a country in North America: the second largest country in the world.",
  7: "a narrow, keelless boat with pointed ends, propelled by a paddle or paddles.",
  8: "a large body of water surrounded by land.",
  9: "The scientific study of living organisms.",
  10: "The study of celestial objects, such as stars, planets, and galaxies.",
  11: "A profound change or transformation, often used in the context of insects' life cycles.",
  12: "A system of government where the citizens have the power to make decisions and choose their leaders.",
  13: "The process of businesses, cultures, and economies becoming interconnected on a worldwide scale.",
  14: "The scientific study of the mind and behavior of humans and animals.",
  15: "Open to more than one interpretation or unclear.",
  16: "Dealing with things sensibly and realistically.",
  17: "Lasting for a very short time.",
  18: "Having a harmful effect, especially in a gradual or subtle way.",
  19: "Present, appearing, or found everywhere", 
  20: "Showing great attention to detail; very careful and precise.",
  21: "Well-meaning and kindly",
  22: "Fluent or persuasive in speaking or writing.",
  23: "A sentimental longing or affection for the past",
  24: "Eagerness and willingness to do something.",
  25: "Too great or extreme to be expressed or described in words.",
  26: "Kept secret, especially because it would not be approved of.",
  27: "Wanting or devouring great quantities of food.",
  28: "intended for or understood by only a small number of people with special knowledge.",
  29: "Producing much fruit or foliage or many offspring.",
  30: "Pleasantly smooth and musical to hear.",
  31: "Extremely idealistic; unrealistic and impractical.",
  32: " Make (someone) weak and infirm."

};

let arrayWords = [
  "camping",
  "tent",
  "fire",
  "trees",
  "hatchet",
  "animals",
  "canada",
  "canoe",
  "lakes",
  "biology",
  "astronomy",
  "metamorphosis",
  "democracy",
  "globalization",
  "psychology",
  "ambiguous",
  "pragmatic",
  "ephemeral",
  "pernicious",
  "ubiquitous",
  "meticulous",
  "benevolent",
  "eloquent",
  "nostalgia",
  "alacrity",
  "ineffable",
  "surreptitious",
  "voracious",
  "esoteric",
  "prolific",
  "mellifluous",
  "quixotic",
  "debilitate"
];

let dummy_arr=[];


let playerOptions = {
  c1: '<img src="img/boat.png">'
  };

playBtn.addEventListener("click", playBt1);
hintBtn.addEventListener("click", showHint);
normalModeBtn.addEventListener("click", playBt1);
const openModalButton = document.getElementById("okdok");
const closeModalButton = document.getElementById("close-modal-button");
const modal = document.getElementById("modal");

modeBtn.addEventListener("click", function() {
    modal.style.display = "block";
    slider1.addEventListener("input", function() {
    Guesses.textContent = slider1.value;
});
slider2.addEventListener("input", function() {
    Words.textContent = slider2.value;
});
});
    

openModalButton.addEventListener("click", function(){
  guesses1 = document.getElementById("slider1");
  words1 = document.getElementById("slider2");
  modal.style.display = "none";
  playBt1();
});
closeModalButton.addEventListener("click", function() {
    modal.style.display = "none";
    
});

playerInput.addEventListener("keyup", function (e) {
  if (/^[a-zA-Z]+$/.test(playerInput.value)) {
    if (e.keyCode === 13) {
      inputCheck();
    }
  }
});

function playBt1()
{
   w_c=words1.value;
   i1=words1.value;
   dummy_arr=[];
   wordcount.textContent=w_c;
   playButton();
 
}
function playButton() {
  gamemode.style.display = "none";
  normalModeContainer.style.display = "flex";
  firstTimeLogin = true;
  guesses2=guesses1.value;
  gameReset();
  wordChooser();
  tileMaker();
  blankey.innerHTML = filledArray.join("");
  word.append(blankey);
  setTimeout(function () {
    player.className = "";
  }, 600);
}

function gameReset() {
  player.innerHTML = playerOptions.c1;
  player.style.removeProperty("margin-left");
  player.className = "slide-in-left";
  guessedLetters = [];
  guessDiv.textContent = "";
  alreadyentered=[];
  playerMover = 0;
  speechBubble.innerText = "Need a hint? Click me!";
  playerArray = [];
}


function wordChooser() {
  arr_flag=0;

  while(arr_flag===0)
  {
  wordChooserBrain = Math.floor(Math.random()*arrayWords.length );
  waterfall.style.display = "block";
  river.textContent = "";
  wordChoosen = arrayWords[wordChooserBrain];
  if((dummy_arr.includes(wordChoosen))!==true)
  {
   dummy_arr.push(wordChoosen);
   arr_flag=1;
   //alert(wordChoosen)
   
  }
}
  playerLife = wordChoosen.length;
  wordArray = wordChoosen.split("");
  return wordChoosen;
}


function tileMaker() {
  for(i=0;i<guesses2;i++) {
    let newTile = document.createElement("div");
    newTile.className = "water";
    newTile.id = i;
    newTile.innerHTML = "<img src='img/watertile.png'>";
    filledArray = new Array(playerLife).fill("_ ");
    river.append(newTile);
  }
}

function winChecker() {
  var wordString = wordArray.toString();
  var playerString = filledArray.toString();
  if (wordString === playerString && i!=1) {
    normalGamesWon = normalGamesWon + 1;
    winNotification.className = "slide-in-bottom";
    winNotification.style.display = "block";
    setTimeout(function () {
      winNotification.className = "slide-out-bottom";
    }, 1250);
    if(i1===1){
      completedNotification.className = "slide-in-bottom";
      completedNotification.style.display = "block";
          setTimeout(function () {
            completedNotification.className = "slide-out-bottom";
          }, 1250);
        }
        wordcount.textContent=i1-1;
  if(i1!=1)
   {
  i1--;
  playButton();
     }
 

    
  } else {
    return;
  }
}

function inputCheck() {
  let playerGuess = playerInput.value;
  if (playerArray.includes(playerGuess)) {
    playerInput.value = "";
    dblNotification.className = "slide-in-bottom";
    dblNotification.style.display = "block";
    setTimeout(function () {
      dblNotification.className = "slide-out-bottom";
    }, 1250);
  }
  if (wordArray.includes(playerGuess)) {
    wordArray.forEach(function (letter, position) {
      if (letter === playerGuess) {
        guessedLetters.push(playerGuess);
        guessDiv.innerHTML = guessedLetters;
        playerArray.splice(position, 0, playerGuess);
        filledArray.splice(position, 1, playerGuess);
        blankey.innerHTML = filledArray.join("");
        word.append(blankey);
        winChecker();
      }
    });
    playerInput.value = "";
  } else {

    if(!alreadyentered.includes(playerGuess))
    {
      guessedLetters.push(playerGuess);
      alreadyentered.push(playerGuess);
      guessDiv.innerHTML = guessedLetters;
    }
    else{
      playerInput.value = "";
      aelNotification.className = "slide-in-bottom";
      aelNotification.style.display = "block";
    setTimeout(function () {
      aelNotification.className = "slide-out-bottom";
    }, 1250);
    return;
    }
    splash.play();
    playerMover = playerMover += 45;
    player.style.marginLeft = playerMover + "px";
    playerInput.value = "";
    guesses2= guesses2- 1;
    if (guesses2 === 0) {
      normalGamesLost = normalGamesLost + 1;
      lostNotification.className = "slide-in-bottom";
      lostNotification.style.display = "block";
      player.className = "scale-out-right";
      setTimeout(function () {
        lostNotification.className = "slide-out-bottom";
      }, 1250);
      flag=0;
      scream.play();
    }
  }
}

function showPopup() {
  if (gamemodePopup.style.display === "none") {
    arcadeContainer.style.display = "none";
    normalModeContainer.style.display = "none";
    gamemodePopup.className = "fade-in-fwd";
    gamemodePopup.style.display === "flex";
  }
  if (gamemodePopup.style.display === "flex") {
    gamemodePopup.style.display = "none";
    gamemode.style.display = "none";
    gamemodePopup.className = "fade-out-bck";
    normalModeContainer.style.display = "none";
  } else {
    gamemodePopup.style.display = "flex";
  }
}

function showHint() {
  if (speechBubble.className === "speech-bubble") {
    speechBubble.innerHTML = hint[wordChooserBrain];
    speechBubble.className === "active speech-bubble";
    hintCounter = hintCounter + 1;
  }
  if (speechBubble.className === "active speech-bubble") {
    speechBubble.className === "speech-bubble";
    speechBubble.innerHTML = "click me for hints!";
  }
  if (speechBubble.innerHTML === "undefined") {
    speechBubble.innerHTML = "You have to start a game to get hints!";
    hintCounter = hintCounter + 1;
  }
}




