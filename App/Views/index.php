<!DOCTYPE html>

<style>
body{
	font-size: 15px;
	font-family: sans-serif;
	color: #333;
}
.question{
	font-weight: 600;
}
.answers {
  margin-bottom: 20px;
}
.answers label{
  display: block;
}
#submit{
	font-family: sans-serif;
	font-size: 20px;
	background-color: #279;
	color: #fff;
	border: 0px;
	border-radius: 3px;
	padding: 20px;
	cursor: pointer;
	margin-bottom: 20px;
}
#submit:hover{
	background-color: #38a;
}
</style>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Quiz - Covid 19</title>
  <link rel="stylesheet" href="<?php BASEURL ?>/quiz/app/views/css/style.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous">
</head>
<body>
<!-- partial:index.partial.html -->
<h1>Quiz - Covid 19</h1>
<div id="quiz"></div>

<div class="iniciar">
    <span id="spnJogador">Nome:</span>
    <span id="message" style="color: red"></span>
    <input type="text" id="jogador" class="form-control" name="jogador">
    <span class="btn btn-success" id="start">iniciar jogo</span>
    <span class="btn btn-info" id="verRanking"  data-bs-toggle="modal" data-bs-target="#exampleModal">Ranking</span>
</div>

<button id="submit"  data-bs-toggle="modal" data-bs-target="#exampleModal">Ver resultado.</button>
<!--<div id="results"></div>-->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ranking</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div id="results"></div>


                <div class="panel-body">
                    <div style="margin-left: 10px; margin-right: 10px; ">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">Posição</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Pontuação</th>
                            </tr>
                            </thead>
                            <tbody id="tbody">
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<!-- partial -->
  <script  src="<?php BASEURL ?>/quiz/app/views/js/script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</body>
</html>
