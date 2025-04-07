<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>exercici 7</title>
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
            $lletra = $_POST['lletra'];

            //Posa la variable enviat a true perquè ja s'ha enviat el formulari i s'han rebut els números
        }
        
        ?>

        <h1 style="text-align:center">Noms de mascota amb la lletra...</h1>
        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <label for="lletra">Indica la lletra</label>
            <input type="text" name="lletra">
            <br>
            <input type="submit" value="Enviar">
        </form>

        <br>

        <p>La lletra és:
            <?php
            //Mostrar la lletra
            ?>
        </p>
        <?php
        $nomsMascotes = [
            "Max", "Luna", "Buddy", "Charlie", "Bella", "Rocky", "Lucy", "Bailey", "Cooper", "Lola",
            "Coco", "Milo", "Mia", "Leo", "Sadie", "Oliver", "Zoe", "Roxy", "Toby", "Ruby",
            "Rex", "Chloe", "Jackson", "Molly", "Oscar", "Sophie", "Teddy", "Daisy", "Bruno", "Lily",
            "Winston", "Maddie", "Zeus", "Penny", "Gizmo", "Piper", "Bentley", "Abby", "Lucky", "Nala",
            "Sammy", "Stella", "Rusty", "Maggie", "Duke", "Maya", "Harley", "Koda", "Olive"
        ];
        //Gasta un bucle foreach permostrar els noms que comencen per eixa lletra
        //COmptte amb les majúscules i minúscules
            
        ?>
    </div>
</body>

</html>