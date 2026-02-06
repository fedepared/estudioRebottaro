<?php
// Verificamos que el formulario haya sido enviado vía POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 1. Recogemos y limpiamos los datos (para evitar inyecciones de código)
    $nombre = htmlspecialchars(trim($_POST['nombre']));
    $apellido = htmlspecialchars(trim($_POST['apellido']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $area = htmlspecialchars(trim($_POST['area']));
    $mensaje = htmlspecialchars(trim($_POST['mensaje']));

    // 2. Configuración del correo
    $destinatario = "contacto@rebottaro.com"; // TU CORREO REAL AQUÍ
    $asunto = "Nueva Consulta Web - Estudio Rebottaro";

    // 3. Cuerpo del mensaje
    $cuerpo = "Has recibido una nueva consulta desde el sitio web.\n\n";
    $cuerpo .= "Nombre: " . $nombre . " " . $apellido . "\n";
    $cuerpo .= "Email: " . $email . "\n";
    $cuerpo .= "Área de Interés: " . $area . "\n\n";
    $cuerpo .= "Mensaje:\n" . $mensaje . "\n";

    // 4. Encabezados (Para que el correo no vaya a spam y se pueda responder)
    $headers = "From: no-reply@tudominio.com" . "\r\n"; // Idealmente un correo de tu hosting
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 5. Envío del correo
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        // Redirigir al usuario con un mensaje de éxito
        header("Location: index.html?estado=exito");
    } else {
        // Redirigir con mensaje de error
        header("Location: index.html?estado=error");
    }
} else {
    // Si intentan acceder al archivo directamente sin enviar formulario
    header("Location: index.html");
    exit;
}
?>