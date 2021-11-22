<?php

namespace App\Models;

class Ranking_Model extends \Core\Model
{
    function ranking()
    {
        $stm = self::getConnection()->prepare('SELECT nome,pontos FROM quiz.ranking ORDER BY PONTOS DESC LIMIT 5');
        $stm->execute();
        return $stm->fetchAll();
    }

    function addRanking($nome, $pontos)
    {
        try {
            $pdo = self::getConnection()->prepare('INSERT INTO quiz.ranking (nome, pontos) VALUES (:nome, :pontos)');
            $pdo->execute(array(
                ':nome'=>$nome,
                ':pontos'=>$pontos
            ));
        } catch (Exception $e) {
            return "Erro ao incluir " . $e;
        }
    }
}

