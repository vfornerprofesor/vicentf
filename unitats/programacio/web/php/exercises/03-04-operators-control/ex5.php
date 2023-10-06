<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>exercici 5</title>
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
            $numero = $_POST['numero'];

            //Posa la variable enviat a true perquè ja s'ha enviat el formulari i s'han rebut els números
        }
        
        ?>

        <h1 style="text-align:center">Sumatori de números naturals</h1>
        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <label for="numero">Indica un número</label>
            <input type="number" name="numero">
            <br>
            <input type="submit" value="Enviar">
        </form>

        <br>

        <p>El número és:
            <?php
            //Mostrar número 1 
            ?>
        </p>
        <?php
        //si enviat i si hi ha número
        //recórrer de l'1 fins al número i sumar el valor en una variable previament creada (suma)
        //en acabar el bucle mostrar la suma com a la imatge
        
        ?>
    </div>
</body>

</html>