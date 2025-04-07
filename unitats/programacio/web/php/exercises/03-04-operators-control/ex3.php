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

        .no_multiple {
            color: red;
        }

        .multiple {
            color: green;
        }
    </style>
</head>

<body>


    <br>
    <div>
        <?php

        //Crear variable enviat amb valor false (perquè encara no s'ha enviat el formulari)
        //Crea una variable numero buida

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $numero = $_POST['numero'];

            //Posa la variable enviat a true perquè ja s'ha enviat el formulari i s'han rebut els números
            
        }

        ?>

        <h1 style="text-align:center">Múltiple de 3 i de 5?</h1>
        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <label for="numero">Indica un número:</label>
            <input type="number" name="numero">
            <br>
            <input type="submit" value="Enviar">
        </form>

        <p>El número és:
            <?php
            //Mostrar número
            ?>
        </p>

        <?php
        //Mostrar si:
        //Paràgraf amb classe multiple si hi ha número i si és multiple de 3 i de 5
        //Paràgraf amb classe no_multiple si:
        // - no hi ha número
        // - si només és múltiple de 3
        // - si només és múltiple de 5
        // - sino és múltiple ni de 3 ni de 5
        
        ?>
    </div>
</body>

</html>