// Iteration 2: Generate 2 random number and display it on the screen

let number1 = Math.floor(Math.random()*100)
const number1Box = document.getElementById('number1');
number1Box.innerHTML = number1;

let number2 = Math.floor(Math.random()*100)
const number2Box = document.getElementById('number2');
number2Box.innerHTML = number2;

// Iteration 3: Make the options button functional 
const greaterThan = document.getElementById('greater-than');
const equalTo = document.getElementById('equal-to');
const lesserThan = document.getElementById('lesser-than');

var score = 0;

greaterThan.onclick = () => {
    if(number1 > number2){
        score++;
        resetTime(timerId);
        console.log(timerId)
    }else{
        location.href='./gameover.html';
    }
    number1= Math.floor(Math.random()*100);
    number1Box.innerHTML = number1;
    number2= Math.floor(Math.random()*100);
    number2Box.innerHTML = number2;   
};

equalTo.onclick = () => {
    if(number1 == number2){
        score++;
        resetTime(timerId);
        console.log(timerId)
    }else{
        location.href='./gameover.html';
    }
    number1= Math.floor(Math.random()*100);
    number1Box.innerHTML = number1;
    number2= Math.floor(Math.random()*100);
    number2Box.innerHTML = number2;   
};

lesserThan.onclick = () => {
    if(number1 < number2){
        score++;
        resetTime(timerId);
        console.log(timerId)
    }else{
        location.href='./gameover.html';
    }
    number1= Math.floor(Math.random()*100);
    number1Box.innerHTML = number1;
    number2= Math.floor(Math.random()*100);
    number2Box.innerHTML = number2;   
};

// Iteration 4: Build a timer for the game
let timer = document.getElementById("timer");
var timerId;        
var t=5;
  function startTimer(){
    t=5;
    timer.innerHTML = t;
    timerId = setInterval(() => {
        t--;
     if(t==0){
        location.href = "./gameover.html";
     }
     timer.innerHTML = t;
    },1000);
localStorage.setItem("score",score)
  }
  function resetTime(intervalId){
    console.log("sdd")
    clearInterval(intervalId);
    startTimer();
  }
  startTimer();