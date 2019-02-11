<?php
$fio = $_POST['fio'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$tel = htmlspecialchars($tel);
$fio = urldecode($fio);
$email = urldecode($email);
$tel = urldecode($tel);
$fio = trim($fio);
$email = trim($email);
$tel = trim($tel);
/*echo $fio;
echo "<br>";
echo $email;
echo "<br>";
echo $tel;
echo "<br>";*/
if (mail(
    "maxim.nedozrelov@ya.ru",
    "Заявка с сайта",
    "ФИО:" . $fio . ". E-mail: " . $email . ". Телефон: " . $tel,
    "From: test@maxnedr.ru \r\n")) {
    //echo "сообщение успешно отправлено";
    //echo "<script>alert(\"Сообщение успешно отправлено\");</script>";
    header('Location: index.html');

} else {
    echo "при отправке сообщения возникли ошибки";
} ?>