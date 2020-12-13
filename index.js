var readLineSync=require('readline-sync')
var chalk=require('chalk')


const right=chalk.bold.green;

const wrong=chalk.bold.red;

const questionDisplay=chalk.bold.whiteBright

const scoreDisplay=chalk.bold.cyanBright

const result=chalk.bold.yellowBright


var score=0;

const options=["Delhi","Managlore","Dog","Tiger"]

var userName=readLineSync.question(questionDisplay("what is  your name ?  "))


console.log("Welcome "+chalk.bold.blue(userName)+", Lets quiz about India");


//play function
function play (question,answer){
  var userAns=readLineSync.keyInSelect(options,questionDisplay( question));

  if(options[userAns]===answer){
    console.log(right("You are correct !!!"));
  score++
  
  }else{
    console.log(wrong("You are wrong :) "));

  }
  console.log(scoreDisplay("Current score :"+score));
  console.log("-----------");
}


var questionOne={
  question:"which is the capital of India ? :",
  answer:"Delhi"
}
var questionTwo={
  question:"Indian national animal ? : ",
  answer:"Tiger"
}

var questions=[questionOne,questionTwo];

for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer);
}

console.log(result("Yayy!! You answered "+ score +" right!."))