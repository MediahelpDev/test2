<?php
// först hämta användarnamn och lösenord från anropet
$userName = $_POST["user"];
$password = $_POST["pw"];
//kontrollera om de är rätt

if($userName == "patrik" && $password == "123")
    echo "true";
else
    echo "false";


?>