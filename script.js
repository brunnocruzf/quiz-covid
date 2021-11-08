(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
	if(numCorrect > 3){
		resultsContainer.innerHTML = `Você acertou ${numCorrect} de ${myQuestions.length}, Parabéns!`;
	}else{
		resultsContainer.innerHTML = `Você acertou ${numCorrect} de ${myQuestions.length},</br> Tente novamente.`;
	}
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1)Qual o tempo de incubação da COVID-19?.",
      answers: {
        a: "A transmissão ocorre, principalmente, de pessoa para pessoa e seu período de incubação, que é o tempo para que os primeiros sintomas apareçam, pode ser de 2 a 14 dias.",
        b: "A transmissão ocorre, principalmente, de pessoa para pessoa e seu período de incubação, que é o tempo para que os primeiros sintomas apareçam, pode ser de 1 a 10 dias.",
        c: "A transmissão ocorre, principalmente, de pessoa para pessoa e seu período de incubação, que é o tempo para que os primeiros sintomas apareçam, pode ser de 0 a 14 dias."
      },
      correctAnswer: "a"
    },
	{
      question: "2)Quem está mais vulnerável à COVID-19?.",
      answers: {
        a: "Todos estão igualmente vulneráveis´.",
        b: "Somente pessoas com condições médicas pré-existentes (como pressão alta, doenças cardíacas, doenças pulmonares, câncer ou diabete) estão mais suscetíveis a desenvolver casos mais severos de COVID-19.",
        c: "Pessoas idosas e pessoas com condições médicas pré-existentes (como pressão alta, doenças cardíacas, doenças pulmonares, câncer ou diabete) estão mais suscetíveis a desenvolver casos mais severos de COVID-19."
      },
      correctAnswer: "c"
    },
    {
      question: "3)Devo usar uma máscara para me proteger?.",
      answers: {
        a: "Somente quem não está vacinado deve utilizar máscaras.",
        b: "Sim, as máscaras devem ser feitas nas medidas corretas para cobrir totalmente a boca ou o nariz.",
        c: "Sim, a utilização de máscaras impede a disseminação de gotículas expelidas do nariz ou da boca do usuário no ambiente, garantindo uma barreira física que vem auxiliando na mudança de comportamento da população e diminuição de casos. "
      },
      correctAnswer: "c"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();