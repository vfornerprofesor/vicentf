<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables - exercici 3</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        body>div {
            margin: 0;
            padding: 40px;
            background-color: lightblue;
            color: darkslategrey;
            width: 50%;
        }

        body>div>p {
            text-align: center;
        }
    </style>
</head>

<body>
    <div>
        <?php
        $text = 'Solo hay dos cosas infinitas: el Universo y la estupidez humana, aunque de la primera no estoy seguro (Albert Einstein)';
        ?>

        <h1 style="text-align:center">Textos</h1>
        <p>Operacions sobre textos</p>
        <h3>
            <?php echo ($text) ?>
        </h3>

        <p>La longitud del text és de <?php echo(strlen($text)) ?> lletres</p>
        <p>A partir de la posició 47 i ocupant 16 lletres tenim el text següent: <?php echo(substr($text, 47, 16)) ?></p>
        <p>L'autor en minúscula: <?php echo(strtolower(substr($text, 103, 15)))?></p>
        <p>L'autor en majúscula: <?php echo(strtoupper(substr($text, 103, 15)))?></p>
        <p>Replace:<?php echo(str_replace('Albert Einstein', 'Pere Franch', $text))?></p>
        <p>Universo es troba a partir de la posició <?php echo(strpos($text, 'Universo'))?></p>

    </div>
</body>

</html>