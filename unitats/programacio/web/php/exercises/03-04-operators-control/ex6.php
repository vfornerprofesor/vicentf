<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>exercici 6</title>
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

    <div>
        <?php

        //Crear variable enviat amb valor false (perquè encara no s'ha enviat el formulari)

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $taula = $_POST['taula'];

            //Posa la variable enviat a true perquè ja s'ha enviat el formulari i s'han rebut els números
        }
        
        ?>

        <h1 style="text-align:center">Taula de multiplicar</h1>
        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <label for="taula">Indica la taula de multiplicar</label>
            <input type="number" name="taula">
            <br>
            <input type="submit" value="Enviar">
        </form>

        <br>

        <p>La taula del:
            <?php
            //Mostrar taula 
            ?>
        </p>
        <?php
        //si enviat i si hi ha número en la var taula
        //mostrar la taula d'eixe número
        ?>
    </div>
</body>

</html>