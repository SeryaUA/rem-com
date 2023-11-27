<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->isHTML(true);

try {
    $message = $_POST["phoneNumber"];
  
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'serya102@gmail.com';
    $mail->Password   = 'qnclbwprpmqkyewg'; // Замените на свой пароль
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465; // Изменено на порт 465 для SSL

    $mail->setFrom('remcom.000@example.com');
    $mail->addAddress('serya102@gmail.com');
    $body = "<strong><br>Перезвоніть на мій номер</strong> - $message";
 
    $mail->Subject = 'New letter';
    $mail->Body    = $body;

    $result = $mail->send(); // Проверка результата отправки

    if ($result) {
        $response = ['message' => 'Message has been sent'];
    } else {
        $response = ['error' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo];
    }


    header('Content-Type: application/json');
    echo json_encode($response);
} catch (Exception $e) {
    $response = ['error' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"];
    header('Content-Type: application/json');
    echo json_encode($response);
}

?>




