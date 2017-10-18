<?php

$recepient = "georgsby@gmail.com";
$sitename = "Georgy Kozhushko";

$name = trim($_GET["name"]);
$email = trim($_GET["email"]);
$phone = trim($_GET["phone"]);
$text = trim($_GET["text"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nПочта: $email \nТелефон: $phone \nТекст: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>