var readlinesync = require("readline-sync");

var score = 0;

var username = readlinesync.question("hello! may i know your name?");

console.log("hai"+ username+ " welcome to general knoweledge quiz?");


function play(question, answer) {
  var useranswer = readlinesync.question(question);

  if (useranswer===answer)  {

    console.log("right");
    score = score +1;

  }else{
    console.log("wrong!")
    
  }
   
    console.log("current score:",score);
    console.log("------------")

}





var questions = [{
   question:"who is the cheif minister of andhra Pradesh?",
  answer: "ys jaganmohanreddy"
} , {
    
    question:"which is my favorite netflix series?",
  answer:"stranger things"
}, {

  question:"who is david attenborough?",
  answer:"natural historian and authour"

}];

for (var i=0; i<questions.length; i++)  {

  var currentquestion = questions[i];
  play(currentquestion.question, currentquestion.answer)
}



