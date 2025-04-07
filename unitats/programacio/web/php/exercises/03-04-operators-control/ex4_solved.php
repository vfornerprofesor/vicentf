<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operators - exercici 4</title>
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

        .error {
            color: red;
        }

        .correcte {
            color: green;
        }
    </style>
</head>

<body>


    <br>

    <div>
        <?php

        $enviat = false;

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $enviat = true;
            $usuari = $_POST['usuari'];
            $contrasenya = $_POST['contrasenya'];
        }
        ?>

        <h1 style="text-align:center">Inici de sessió</h1>
        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <label for="usuari">Usuari:</label>
            <input type="text" name="usuari">
            <br>
            <label for="contrasenya">Contrasenya:</label>
            <input type="password" name="contrasenya">
            <br>
            <input type="submit" value="Enviar">
        </form>

        <?php
            $usuaris_administradors = [
                ['admin', '1234'],
                ['usuari1', 'contr1'],
                ['usuari2', 'contr2']
            ];

            if($enviat) {
                if($usuari == $usuaris_administradors[0][0] && $contrasenya == $usuaris_administradors[0][1]) {
                    echo('<p class="correcte">Inici de sessió correcte</p>');
                } else {
                    if($usuari == $usuaris_administradors[1][0] && $contrasenya == $usuaris_administradors[1][1]) {
                        echo('<p class="correcte">Inici de sessió correcte</p>');
                    } else {
                        if($usuari == $usuaris_administradors[2][0] && $contrasenya == $usuaris_administradors[2][1]) {
                            echo('<p class="correcte">Inici de sessió correcte</p>');
                        } else {
                            echo('<p class="error">El usuari i la contrasenya no coincideixen</p>');
                        }
                    }
                }
            }
        ?>
        
    </div>
</body>

</html>