<?php

namespace App\Controllers;
use App\Models;
use \Core\Controller;
use \PlugRoute\Http\Request;


class Ranking_Controller extends Controller
{
    function ranking(){
        $model = new Models\Ranking_Model();
        return json_encode($model->ranking());
       // $this->view('index');
    }

    function addRanking(Request $request){
        $nome = $request->parameter('nome');
        $pontos = $request->parameter('pontos');
        $model = new Models\Ranking_Model();
        if($model->addRanking($nome,$pontos)){
            echo 'true';
        }else{
            echo 'false';
        }
    }
}