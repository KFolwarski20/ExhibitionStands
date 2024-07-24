<?php
if (isset($_POST['submit'])) {
    $name = $_POST['imie'];
    $surname = $_POST['nazwisko'];
    $email = $_POST['email'];
    $phone = $_POST['nr_telefonu'];
    $message = $_POST['tresc'];
    
    $to = "biuro@icghome.pl";
    $subject = "Wiadomość ze strony internetowej";
    $headers = "From: $email \r\n";
    $headers .= "Reply-To: $email \r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    $body = "Otrzymano nową wiadomość ze strony internetowej.\n\n";
    $body .= "Imię i nazwisko: $name $surname\n";
    $body .= "Email: $email\n";
    $body .= "Numer telefonu: $phone\n";
    $body .= "Treść wiadomości: $message\n";

  if (mail($to, $subject, $body, $headers)) {
    echo "Wiadomość została wysłana";
  } else {
    echo "Wystąpił błąd, spróbuj ponownie później";
  }
}
?>