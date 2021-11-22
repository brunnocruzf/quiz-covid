<?php

require_once 'vendor\autoload.php';


$route = \PlugRoute\RouteFactory::create();

$route->notFound(function (){
    echo 'Rota não encontrada';
});

$route->get('/', 'App\Controllers\index@jogo');
$route->get('/ranking', 'App\Controllers\Ranking_Controller@ranking');
$route->get('/addRanking/{nome}/{pontos}', 'App\Controllers\Ranking_Controller@addRanking');

$route->on();