<?php
$numero = intval(readline("Ingrese un número entero: "));

if ($numero > 0 && $numero % 5 == 0) {
    echo "El número ingresado es positivo y divisible por 5.";
} else {
    echo "El número ingresado no cumple con las condiciones.";
}
?>
