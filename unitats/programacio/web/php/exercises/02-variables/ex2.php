<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables - exercici 2</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        body > div {
            margin: 0;
            padding: 40px;
            background-color: lightblue;
            color: darkslategrey;
        }

        body > div > div {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        body > div > p {
            text-align: center;
        }
    </style>
</head>

<body>
    <div>
        <?php
        $numero1 = 8;
        $numero2 = 5;
        ?>

        <h1 style="text-align:center">Calculadora</h1>
        <p>Operacions sobre els següents números</p>
        <div>
            <h2><!-- numero1 --></h2>
            <h2><!-- numero2 --></h2>
        </div>
        <p><!-- suma --></p>
        <p><!-- resta --></p>
        <p><!-- multiplicació --></p>
        <p><!-- divisió --></p>
        <p><!-- residu --></p>

    </div>
</body>

</html>