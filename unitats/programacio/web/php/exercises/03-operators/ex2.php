<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operators - exercici 2</title>
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

        #errors {
            color: red;
        }

        #totcorrecte {
            color: green;
        }
    </style>
</head>

<body>

    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label for="nom">Indica el teu nom:</label>
        <input type="text" name="nom">
        <br>
        <label for="cognoms">Indica el teu cognom:</label>
        <input type="text" name="cognoms">
        <br>
        <label for="data">Data de naixement:</label>
        <input type="date" name="data">
        <br>
        <label for="email">Email:</label>
        <input type="email" name="email">
        <br>
        <input type="submit" value="Enviar">
    </form>

    <br>

    <div>
        <?php
        $hi_ha_error = '';
        $error_nom = '';
        $error_cognom = '';
        $error_data = '';
        $error_email = '';
        $tot_correcte = 'Tot està correcte';

        $enviat = false;

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $enviat = true;
            $nom = $_POST['nom'];
            $cognoms = $_POST['cognoms'];
            $data = $_POST['data'];
            $email = $_POST['email'];

            //Si la longitud del nom és major que 15
            //Posar hi_ha_error a vertader
            //Afegir un missatge a error_nom

            //Si la longitud del cognom és major que 30
            //Posar hi_ha_error a vertader
            //Afegir un missatge a error_cognom

            //Si l'any de naixement és major a l'any actual - 18 (major d'edat)
            //Posar hi_ha_error a vertader
            //Afegir un missatge a error_data de que s'ha de ser major d'edat
            //Per obtindre l'any de la data: explode('-', $data)[0]
            //Per obtindre l'any actual: date('Y')
            
            //Si el correu no acaba en @gmail.com
            //Posar hi_ha_error a vertader
            //Afegir un missatge a error_email
           
            }
        ?>

        <h1 style="text-align:center">És correcte el formulari?</h1>

        <div id="errors">
            <?php
            //Mostrar missatge error si enviat és vertader i hi_ha_error és vertader
            ?>

        </div>
        <div id="totcorrecte">
            <?php
            //Mostrar missatge correcte si enviat és vertader i NO hi_ha_error
            ?>
        </div>
    </div>
</body>

</html>