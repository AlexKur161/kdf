<?php

$param1 = $_POST['name'] ?: '';
$param2 = $_POST['where'] ?: '';
$param3 = $_POST['delivery'] ?: '';
$param4 = $_POST['m'] ?: '';
$param5 = $_POST['number'] ?: '';
$param6 = $_POST['whereis'] ?: '';
$param7 = $_POST['weight'] ?: '';

// несколько получателей
$to = 'AlexKur-web@yandex.ru'; // обратите внимание на запятую

// тема письма
$subject = 'Заявка с kdf';

// текст письма
$message = '
<html>
<head>
  <title>Заявка с сайта</title>
</head>
<body>
  <p>Заявка с сайта</p>
  <table>
    <tr>
      <td>Имя клиента:</td><td>'.$param1.'</td>
    </tr>
    <tr>
      <td>Откуда:</td><td>'.$param2.'</td>
    </tr>
    <tr>
    <td>Тип доставки:</td><td>'.$param3.'</td>
    </tr>
    <tr>
    <td>Объём (м3):</td><td>'.$param4.'</td>
    </tr>
    <tr>
    <td>Номер телефона клиента:</td><td>'.$param5.'</td>
    </tr>
    <tr>
    <td>Куда:</td><td>'.$param6.'</td>
    </tr>
    <tr>
    <td>Вес:</td><td>'.$param7.'</td>
    </tr>
  </table>
</body>
</html>
';

// Для отправки HTML-письма должен быть установлен заголовок Content-type
// $headers  = 'MIME-Version: 1.0' . "\r\n";
// $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Дополнительные заголовки
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';
$headers[] = 'To: AlexKur <AlexKur-web@yandex.ru>';
$headers[] = 'From: kdf.alex-web-kur.ru <birthday@example.com>';

// Отправляем
if (mail($to, $subject, $message, implode("\r\n", $headers))) {
	echo json_encode(['message'=>'ok']);
} else {
	echo json_encode(['message'=>'ne ok']);
}
?>