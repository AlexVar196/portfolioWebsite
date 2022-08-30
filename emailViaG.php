<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/vendor/phpmailer/src/Exception.php';
require_once __DIR__ . '/vendor/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/vendor/phpmailer/src/SMTP.php';

if (isset($_POST['submit'])) {


    $name = $_POST['name'];
    $fromEmail = $_POST['email'];
    $message = $_POST['message'];


    // passing true in constructor enables exceptions in PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Server settings
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER; // for detailed debug output
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->Username = 'ledav88881@gmail.com'; // YOUR gmail email
        $mail->Password = 'mszylyehvbqxbekr'; // YOUR gmail password

        // Sender and recipient settings
        $mail->setFrom($fromEmail, $name);
        $mail->addAddress('ledav881@yahoo.com', 'Alex');
        $mail->addReplyTo($fromEmail, $name); // to set the reply to

        // Setting the email content
        $mail->IsHTML(true);
        $mail->Subject = "Mail from recruiter/employer: " . $name . "--- email: " . $fromEmail;
        $mail->Body = $message;
        $mail->AltBody = $message;

        $mail->send();
        echo "ok";
    } catch (Exception $e) {
        echo "Error in sending email. Mailer Error: {$mail->ErrorInfo}";
    }
}
