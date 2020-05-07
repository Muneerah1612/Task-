const options=document.querySelector(".options").children;
const answerCount=document.querySelector(".score-counter");
const question=document.querySelector(".question");
const number=document.querySelector(".question-value");
const totalQuestion=document.querySelector(".total-question")
const correctA=document.querySelector(".correct-answers");
const totalQuestion2=document.querySelector(".total");
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let myArr=[];
let score=0;



const questions=[
    {
        q:'Which city will host the 2028 Olympic games?',
        options:['Paris','Los Angeles','Tokyo','Mumbai'],
        answer:1
    },
    {
        q:'How many sides does a hexagon have?',
        options:['Six','Eight','Five','Seven'],
        answer:0
    },
    {
        q:'How many elements are in the periodic table?',
        options:['121','20','118','79'],
        answer:2
    },
    {
        q:'Which is the highest number used in a sudoku game?',
        options:['9','8','7','6'],
        answer:0
    },
    {
        q:'Which is the first month of the year to have exactly 30 days?',
        options:['March','April','June','August'],
        answer:1
    }
]
totalQuestion.innerHTML=questions.length;
function load(){
    number.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0];
    op2.innerHTML=questions[questionIndex].options[1];
    op3.innerHTML=questions[questionIndex].options[2];
    op4.innerHTML=questions[questionIndex].options[3];
    index++;
}
  function check(element){
       if (element.id==questions[questionIndex].answer) {
           element.classList.add("correct");
           updateTracker("correct");
           score++;
       } else{
        element.classList.add("wrong");
        updateTracker("wrong");
       }
       disabledOptions()
  }
  function disabledOptions(){
      for(let i=0; i<options.length; i++) {
          options[i].classList.add("disabled");
          if(options[i].id==questions[questionIndex].answer){
            options[i].classList.add("correct"); 
          }
      }
  }
  function enabledOptions(){
      for(let i=0; i<options.length; i++){
          options[i].classList.remove("disabled", "correct", "wrong");
      }
  }
  function validate(){
      if (!options[0].classList.contains("disabled")){
          alert("You did not select any option")
      }else {randomN();
        enabledOptions();
             
    
    }
  }
       
      function next(){
          validate();
      }
      function randomN(){
        let randomNumber=Math.floor(Math.random()*questions.length);
        let duplicate=0;  
        if(index==questions.length) {
                //console.log("quiz Qver")
                quizOver();
            }
            else {
                if(myArray.length>0){
                for(let i=0; i<myArray.length; i++) {
                if(myArray[i]==randomNumber){
                    duplicate=1;
                    break;
        //the above is if myArray[item] equals randomNumber then hitDuplicate found and if found then hitDuplicate=1,break for the loop
                }
            }
            if(duplicate==1){
                randomN();
            }
            else{
                questionIndex=randomNumber;
                load();
                myArr.push(questionIndex);
            }
        }
                if(myArray.length==0){
                questionIndex=randomNumber;
                load();
                myArr.push(questionIndex);
                }
            
            myArray.push(randomNumber);
            //console.log("myArray:"+myArray) found out that some num were repeating itself
           
            }
    }
     
     function answerTracker(){
       for(let i=0; i<questions.length; i++){
           const div=document.createElement("div")
           answerCount.appendChild(div);

       }
     }
     function updateTracker(classN){
         answerCount.children[index-1].classList.add(classN);

     }
     function quizOver() { document.querySelector(".quiz-over").classList.add("show");
       correctA.innerHTML=score; 
       totalQuestion2.innerHTML=questions.length;
       load();

     }
     function tryAgain(){
         window.location.reload();
     }
window.onload=function(){
     randomN();
    this.answerTracker();
   }