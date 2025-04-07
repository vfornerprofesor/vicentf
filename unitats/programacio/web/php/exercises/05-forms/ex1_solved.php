<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>exercici 1</title>
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

        ul {list-style: none;}
    </style>
</head>

<body>

    <div>
        <?php

        // Iniciar o reanudar la sessió
        session_start();

        // Verificar si existeix una variable de sessió paraules
        if (!isset($_SESSION['paraules'])) {
            $_SESSION['paraules'] = []; // inicialitzar paraules a una llista buida
        }

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Obtindre la paraula del formulari
            $paraula = $_POST['paraula'];
            $traduccio = $_POST['traduccio'];
            // Afeigir la paraula a la variable paraules de la sessió
            $_SESSION['paraules'][$paraula] = $traduccio;
        }
        ?>

        <h1 style="text-align:center">Traducció</h1>
        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <label for="paraula">Indica una paraula</label>
            <input type="text" name="paraula">
            <br>
            <label for="traduccio">Indica la traducció</label>
            <input type="text" name="traduccio">
            <br>
            <input type="submit" value="Enviar">
        </form>

        <br>

        <?php
        
        // Mostrar les paraules si existeix la variable paraules en la sessió
        if (!empty($_SESSION['paraules'])) {
            echo "<h2>Paraules traduïdes:</h2>";
            
            echo '<ul>';
            foreach ($_SESSION['paraules'] as $esp => $angl) {
                echo '<li>'.$esp . ' --> ' . $angl . '</li>'. PHP_EOL;
            }
            echo '</ul>';
        }

        //Destruir la sessió per esborrar les variables
        //session_destroy();
        ?>
    </div>
</body>

</html>