<?php
$nombre = readline("Ingrese su nombre de usuario: ");
$contrasena = readline("Ingrese su contraseña: ");

if ($nombre === "admin" && $contrasena === "admin123") {
    echo "Inicio de sesión exitoso.";
} elseif ($nombre === "admin") {
    echo "Contraseña incorrecta.";
} else {
    echo "Usuario desconocido.";
}
?>
