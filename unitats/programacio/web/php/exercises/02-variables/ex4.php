<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables - exercici 4</title>
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

        body>div>div {
            display:flex;
            justify-content: space-between;
            align-items: center;
        }

        body>div>p {
            text-align: center;
        }
    </style>
</head>

<body>
    <div>
        <?php
        $llista = ['Microsoft', 'Google', 'Apple', 'Samsung', 'IBM'];
        ?>

        <h1 style="text-align:center">Llistes (arrays)</h1>
        <p>Operacions sobre arrays</p>
        <div>
            <div>
                <h4>
                    Llista abans de modificar
                </h4>
                <p>
                    <?php
                    //Mostra la llista
                    
                    ?>
                </p>
            </div>
            <div>
                <h4>
                    Llista després de modificar
                </h4>
                <p>
                    <?php
                    
                    //Guardat en una variable primer el primer element de la llista

                    //Guardat en una variable ultim l'últim element de la llista

                    //Esborra el primer i l'ultim de la llista

                    //Afegeix Xiaomi i OnePlus a la llista

                    //Ordena la llista

                    //Afegeix l'últim element que tenies guardat

                    //Afegeix el primer element que tenies guardat

                    //Mostra la llista

                    ?>
                </p>
            </div>
        </div>
   </div>
</body>

</html>