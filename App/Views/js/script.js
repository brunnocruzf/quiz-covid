(function(){
  function buildQuiz(){
    $('#submit').show();
    $('#jogador').hide();
    $('#start').hide();
    $('#verRanking').hide();
    $('#message').hide();
    $('.iniciar').hide();

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
          <div class="answers"> ${answers.join('')} </div>
            <p class="correct"></p><p class="fonte"></p>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
    const correct = quizContainer.querySelectorAll('.correct');
    const fonte = quizContainer.querySelectorAll('.fonte');
    // keep track of user's answers
    let numCorrect = 0;
    let ranking = 0;
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

        correct[questionNumber].innerHTML = "";
        fonte[questionNumber].innerHTML = "";
        fonte[questionNumber].append('Fonte e mais informa????es em: '+currentQuestion.fonte);
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';

        correct[questionNumber].innerHTML = "";
        fonte[questionNumber].innerHTML = "";
        correct[questionNumber].append('Resposta correta ?? : '+currentQuestion.correctAnswer);
        fonte[questionNumber].append('Fonte e mais informa????es em: '+currentQuestion.fonte);
        //answerContainers[questionNumber]>p.prepend('Resposta correta ?? : '+currentQuestion.correctAnswer);
        //answerContainers[questionNumber].append('Resposta correta ?? : '+currentQuestion.correctAnswer, document.createElement("b"));
      }
    });
    const nome = $('#jogador').val();
    ranking = (numCorrect * 100);

    // show number of correct answers out of total

		resultsContainer.innerHTML = `${nome} - Voc?? acertou ${numCorrect} de ${myQuestions.length}, Sua pontua????o ?? ${ranking}`;
        console.log(nome);

      $.ajax({
        url: BASEURL+'addRanking/'+nome+'/'+ranking,
        type: "get",
        scriptCharset: 'UTF-8',
        crossDomain: true,
        //dataType: 'JSON',
        success: function (data) {
          $.ajax({
            url: BASEURL+'ranking',
            type: "get",
            scriptCharset: 'UTF-8',
            crossDomain: true,
            dataType: 'JSON',
            success: function (data) {
              //var dados  = new Array();
              var dados = data
              console.log(dados[0]);

              for (var i = 0; i < 5; i++) {
                $('#tbody').append('<tr>' +
                    '<td><span>' + (parseInt(i) + 1) + '</span></td>' +
                    '<td><span>' + data[i].nome + '</span></td>' +
                    '<td><span>' + data[i].pontos + '</span></td>' +
                    '</tr>');
              }
            }
          });
        }
      });
  }



  const BASEURL = 'http://localhost/quiz/'

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1)Qual o tempo de incuba????o da COVID-19?.",
      answers: {
        a: "A transmiss??o ocorre, principalmente, de pessoa para pessoa e seu per??odo de incuba????o, que ?? o tempo para que os primeiros sintomas apare??am, pode ser de 2 a 14 dias.",
        b: "A transmiss??o ocorre, principalmente, de pessoa para pessoa e seu per??odo de incuba????o, que ?? o tempo para que os primeiros sintomas apare??am, pode ser de 1 a 10 dias.",
        c: "A transmiss??o ocorre, principalmente, de pessoa para pessoa e seu per??odo de incuba????o, que ?? o tempo para que os primeiros sintomas apare??am, pode ser de 0 a 14 dias."
      },
      correctAnswer: "a",
      fonte: "teste 1"
    },
	{
      question: "2)Quem est?? mais vulner??vel ?? COVID-19?.",
      answers: {
        a: "Todos est??o igualmente vulner??veis??.",
        b: "Somente pessoas com condi????es m??dicas pr??-existentes (como press??o alta, doen??as card??acas, doen??as pulmonares, c??ncer ou diabete) est??o mais suscet??veis a desenvolver casos mais severos de COVID-19.",
        c: "Pessoas idosas e pessoas com condi????es m??dicas pr??-existentes (como press??o alta, doen??as card??acas, doen??as pulmonares, c??ncer ou diabete) est??o mais suscet??veis a desenvolver casos mais severos de COVID-19."
      },
      correctAnswer: "c",
      fonte: "teste 2"
    },
    {
      question: "3)Devo usar uma m??scara para me proteger?.",
      answers: {
        a: "Somente quem n??o est?? vacinado deve utilizar m??scaras.",
        b: "Sim, as m??scaras devem ser feitas nas medidas corretas para cobrir totalmente a boca ou o nariz.",
        c: "Sim, a utiliza????o de m??scaras impede a dissemina????o de got??culas expelidas do nariz ou da boca do usu??rio no ambiente, garantindo uma barreira f??sica que vem auxiliando na mudan??a de comportamento da popula????o e diminui????o de casos. "
      },
      correctAnswer: "c",
      fonte: "teste 3"
    }
  ];

  // Kick things off

  $( "#verRanking" ).on( "click", function() {
    $.ajax({
      url: BASEURL+'ranking',
      type: "get",
      scriptCharset: 'UTF-8',
      crossDomain: true,
      dataType: 'JSON',
      success: function (data) {
        //var dados  = new Array();
        var dados = data
        console.log(dados[0]);

        for (var i = 0; i < 5; i++) {
          $('#tbody').append('<tr>' +
              '<td><span>' + (parseInt(i) + 1) + '</span></td>' +
              '<td><span>' + data[i].nome + '</span></td>' +
              '<td><span>' + data[i].pontos + '</span></td>' +
              '</tr>');
        }
      }
    });
  });


  $( "#start" ).on( "click", function() {
    var nome = $('#jogador').val();
    if(nome){
      buildQuiz();
    }else {
        document.getElementById('message').innerHTML = 'PREENCHER NOME!!!';
      //console.log('preencher nome');
    }
  });

  $('#submit').hide()

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();