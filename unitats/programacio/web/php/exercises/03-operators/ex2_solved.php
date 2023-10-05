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

            if(strlen($nom) > 15) {
                $hi_ha_error = true;
                $error_nom = 'El nom no pot tindre més de 15 caràcters';
            }
            if(strlen($cognoms) > 30) {
                $hi_ha_error = true;
                $error_cognom = 'Els cognoms no poden tindre més de 30 caràcters';
            }
            $any = explode('-', $data)[0];
            if($any > date('Y') - 18) {
                $hi_ha_error = true;
                $error_data = "No pots ser menor d'edat";
            }
            if(substr($email, strlen($email) - 10) != '@gmail.com') {
                $hi_ha_error = true;
                $error_email = "El correu ha de ser de gmail";
            }

        }
        ?>

        <h1 style="text-align:center">És correcte el formulari?</h1>

        <div id="errors">
            <?php
            $missatge_error = ($error_nom == '' ? '' : $error_nom.' - ') . 
                ($error_cognom == '' ? '' : $error_cognom.' - ') .
                ($error_data == '' ? '' : $error_data.' - ') .
                ($error_email == '' ? '' : $error_email.' - ');
            if ($enviat && $hi_ha_error) {
                echo 'Errors: ' . $missatge_error;
            }
            ?>

        </div>
        <div id="totcorrecte">
            <?php
            if ($enviat && !$hi_ha_error) {
                echo $tot_correcte;
            }
            ?>
        </div>
    </div>
</body>

</html>