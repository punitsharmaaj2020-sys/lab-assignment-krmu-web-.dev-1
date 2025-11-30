const quizQuestions = [
  { question: "Who is the king of fruits?", answer: "mango" },
  { question: "Which is the best anime according to you?", answer: "Attack of Titans" },
  { question: "Which is the planet where life can survive easily?", answer: "Earth" },
  { question: "What is the capital of Japan?", answer: "Tokyo" },
  { question: "Who is the prime minister of India?", answer: "Narender Modi" },
  { question: "Which is the biggest country by area?", answer: "Russia" },
  { question: "What is the capital of India?", answer: "New Delhi" },
  { question: "Which is the smallest country ?", answer: "Vatican City" },
  { question: "What was the first car company in the world?", answer: "Peugeot" },
  { question: "Which was the first car to be known as the fastest car and got the world record for its speed?", answer: " La Jamais Contente" }
];


function runQuiz() {
  let score = 0; 


  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question); 

    if (userAnswer) {
      userAnswer = userAnswer.toLowerCase().trim();
    }

    
    if (userAnswer === quizQuestions[i].answer) {
      alert(" Correct!");
      score++; 
    } else {
      alert(" Wrong! The correct answer is: " + quizQuestions[i].answer);
    }
  }

  
  alert("Quiz finished! Your score is " + score + " out of " + quizQuestions.length);
}


runQuiz();