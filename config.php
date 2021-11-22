<?php

//** --------------------------------------------- */
//** Conexao com banco de dados
//** --------------------------------------------- */

/** O nome do banco de dados*/
define('DB_NAME', 'quiz');

/** Usuário do banco de dados SQL */
define('DB_USER', 'root');

/** Senha do banco de dados SQL */
define('DB_PASSWORD', '');

/** nome do host do SQL */
define('DB_HOST', 'localhost');
/** nome do driver do SQL */
define('DB_DRIVER', 'mysql');
//** ############################################# */


if ( !defined('BASEURL') )
    define('BASEURL'    ,"http://" . $_SERVER['SERVER_NAME'] );

/*Define timezone*/
date_default_timezone_set('America/Sao_Paulo');

