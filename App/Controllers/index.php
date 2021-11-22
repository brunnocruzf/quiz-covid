<?php

namespace App\controllers;
use \Core\Controller;
use \PlugRoute\Http\Request;

class index extends Controller
{
    function teste(Request $request){
        $nome = $request->parameter('a');
        $sobrenome = $request->parameter('b');
        $this->view('index',['nome'=>$nome,'sobrenome'=>$sobrenome]);
    }

    function jogo(){
        $this->view('index');
    }


}