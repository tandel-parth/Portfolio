<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "tandelp268@email.com"; // Replace with your email address
    $subject = "New Contact Form Submission from $name";
    $headers = "From: $email";
    
    $mailBody = "Name: $name\nEmail: $email\n\n$message";
    
    $success = mail($to, $subject, $mailBody, $headers);
    
    if ($success) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
