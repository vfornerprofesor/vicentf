<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operators - exercici 1</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        body {
            margin-top: 50px;
            text-align: center;
        }

        body div {
            width: 50%;
            margin: 0 auto;
            padding: 40px;
            background-color: khaki;
            color: darkslategrey;
        }
    </style>
</head>

<body>

    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label for="numero1">Indica el número 1:</label>
        <input type="number" name="numero1">
        <br>
        <label for="numero2">Indica el número 2:</label>
        <input type="number" name="numero2">
        <br>
        <input type="submit" value="Enviar">
    </form>

        <br>
    <div>
        <?php

        //Crear variable enviat amb valor false (perquè encara no s'ha enviat el formulari)
        $enviat = false;

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $numero1 = $_POST['numero1'];
            $numero2 = $_POST['numero2'];

            //Posa la variable enviat a true perquè ja s'ha enviat el formulari i s'han rebut els números
            $enviat = true;
        }

        $resultat = '';
        //Si enviat és vertader
        //Afegeixes a la variable resultat el missatge que vols mostrar
        // - si el primer número és major
        // - si el segon número és major
        // - si els dos números són iguals
        if($enviat) {
            if ($numero1 > $numero2) {
                $resultat = "El primer número és major que el segon.";
            } elseif ($numero1 < $numero2) {
                $resultat = "El segon número és mayor que el primer.";
            } else {
                $resultat = "Els dos números són iguals.";
            }
        }
        ?>

        <h1 style="text-align:center">Quin número és major?</h1>

        <p>El primer número és:
            <?php
            //Mostrar número 1 
            echo $numero1;
             ?>
        </p>
        <p>El segon número és:
            <?php
            //Mostrar número 2
             echo $numero2 ;
             ?>
        </p>
        <p><strong>
                <?php 
                //Mostrar resultat
                
                    echo $resultat;
                 ?>
            </strong></p>
    </div>
</body>

</html>