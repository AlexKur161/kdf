<?php

$param1 = $_POST['state'] ?: '';
$param2 = $_POST['face'] ?: '';
$param3 = $_POST['comp'] ?: '';
$param4 = $_POST['dolj'] ?: '';
$param5 = $_POST['email'] ?: '';
$param6 = $_POST['site'] ?: '';
$param7 = $_POST['number'] ?: '';
$param8 = $_POST['in'] ?: '';
$param9 = $_POST['file'] ?: '';
$param10 = $_POST['koment'] ?: '';
$param11 = $_POST['checkbox-1'] ?: '';
$param12 = $_POST['checkbox-2'] ?: '';
$param13 = $_POST['checkbox-3'] ?: '';
$param14 = $_POST['checkbox-4'] ?: '';

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
      <td>Город клиента:</td><td>'.$param1.'</td>
    </tr>
    <tr>
      <td>Контактное лицо:</td><td>'.$param2.'</td>
    </tr>
    <tr>
    <td>Компания:</td><td>'.$param3.'</td>
    </tr>
    <tr>
    <td>Должность:</td><td>'.$param4.'</td>
    </tr>
    <tr>
    <td>E-mail:</td><td>'.$param5.'</td>
    </tr>
    <tr>
    <td>Сайт компании:</td><td>'.$param6.'</td>
    </tr>
    <tr>
    <td>Телефон клиента:</td><td>'.$param7.'</td>
    </tr>
    <tr>
    <td>ИНН:</td><td>'.$param8.'</td>
    </tr>
    <tr>
    <td>Прикрепленный документ:</td><td>'.$param9.'</td>
    </tr>
    <tr>
    <td>Комментарий:</td><td>'.$param10.'</td>
    </tr>
    <tr>
    <td>Документы(on если выбрано):</td><td>'.$param11.'</td>
    </tr>
    <tr>
    <td>Грузы(on если выбрано):</td><td>'.$param12.'</td>
    </tr>
    <tr>
    <td>К опредленному времени(on если выбрано):</td><td>'.$param13.'</td>
    </tr>
    <tr>
    <td>Для интернет-магазинов(on если выбрано):</td><td>'.$param14.'</td>
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