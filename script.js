const ques = [
  {
    que: "Where in the Human Body can the smallest bone be found?",
    ans: [
      { text: "Toe", correct: false },
      { text: "Finger", correct: false },
      { text: "Brain", correct:false },
      { text: "Ear", correct: true },
    ],
  },
  {
    que: "What does USB stands for?",
    ans: [
      { text: "Universal storages Base", correct: false },
      { text: "Unity Storage Base", correct: false },
      { text: "Universal Serial Bus", correct: true },
      { text: "Universal Series Barrier", correct: false },
    ],
  },
  {
    que: "Which is the main gas that makes up the Earth's atmosphere?",
    ans: [
      { text: "Carbon Dioxide", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Argon", correct: false },
    ],
  },
  {
    que: "What is the unit for measuring the amplitude of a sound?",
    ans: [
      { text: "Weber", correct: false },
      { text: "Amperes", correct: false },
      { text: "Hertz", correct: false },
      { text: "Decibel", correct: true },
    ],
  },
  {
    que: "Which of the following is used as a moderator in nuclear reactor?",
    ans: [
      { text: "Graphite", correct: true },
      { text: "Boron", correct: false },
      { text: "Strontium", correct: false },
      { text: "Zinc", correct: false },
    ],
  },
];
const queElement=document.getElementById("que");
const ansElement = document.getElementById("options");
const nextElement = document.getElementById("next");
let presentQueIndex=0;
let score=0;

function quizStart(){
     presentQueIndex = 0;
     score = 0;
     nextElement.innerHTML="Next";
     showQue();

}

function showQue(){
    restart();
    let currQue = ques[presentQueIndex];
    let queNum= presentQueIndex+1;
    queElement.innerHTML= queNum+'. '+currQue.que;

   currQue.ans.forEach(ans=>{
    const bttn=document.createElement("button");
    bttn.innerHTML=ans.text;
bttn.classList.add("btn");
ansElement.appendChild(bttn);
if(ans.correct){bttn.dataset.correct=ans.correct;}
bttn.addEventListener("click",choose);
   });
}
   function restart(){
    nextElement.style.display="none";
    while(ansElement.firstChild){
ansElement.removeChild(ansElement.firstChild);
    }
   }
function choose(t){
    const chooseAns=t.target;
    const istrue=chooseAns.dataset.correct==="true";
    if(istrue){chooseAns.classList.add("correct");
  score++;}
    else{chooseAns.classList.add("incorrect");}
    Array.from(ansElement.children).forEach(bttn=>{
        if(bttn.dataset.correct==="true"){
bttn.classList.add("correct");
        }
        bttn.disable=true;
    });
    nextElement.style.display="block";
}
function result(){
  restart();
  queElement.innerHTML='Your Score: '+ score+ ' / ' + ques.length;
  nextElement.innerHTML="Play Once More";
nextElement.style.display = "block";
}
 function nextbtnInAction(){
  presentQueIndex++;
  if(presentQueIndex<ques.length){
    showQue();
  }
  else{
    result();
  }
 }
nextElement.addEventListener("click",()=>{
  if(presentQueIndex<ques.length){
    nextbtnInAction();
  }
  else{
    quizStart();
  }

});

quizStart();








