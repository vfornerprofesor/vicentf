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
        $enviat = false;
        $numero;

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $numero = $_POST['numero'];

            //Posa la variable enviat a true perquè ja s'ha enviat el formulari i s'han rebut els números
            $enviat = true;
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
            echo $numero;
            ?>
        </p>

        <?php
        if ($numero) {
            if ($numero % 5 == 0 && $numero % 3 == 0) {
                echo "<p class='multiple'>El número és múltiple de 3 i de 5</p>";
            } else {
                if ($numero % 5 == 0) {
                    echo "<p class='no_multiple'>Només és múltiple de 5</p>";
                } else {
                    if ($numero % 3 == 0) {
                        echo "<p class='no_multiple'>Només és múltiple de 3</p>";
                    } else {
                        echo "<p class='no_multiple'>No és múltiple ni de 3 ni de 5</p>";
                    }
                }
            }
        } else {
            echo "<p class='no_multiple'>No s'ha indicat un número</p>";
        }
        ?>
    </div>
</body>

</html>