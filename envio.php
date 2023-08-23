<?php
    $destino = "at77149964@idat.edu.pe";
    $nombres = $_POST["nombres"];
    $correo = $_POST["correo"];
    $celular = $_POST["celular"];
    $comentario = $_POST["comentarios"]; 
    $contenido = "Nombres y Apellidos: " . $nombres . "\nCorreo: " . $correo . "\nCelular: " . $celular . "\nComentarios: " . $comentario;

    if (mail($destino, "Mensaje", $contenido)) { 
        echo "<script>alert('Gracias por el Mensaje');</script>"; 
        echo "<script>window.location.href='index.html';</script>";  
    } else {
        echo "<script>alert('Error al enviar el mensaje');</script>";
    }
?>
