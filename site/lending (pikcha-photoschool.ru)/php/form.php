<meta http-equiv='refresh' content='5; url=http://www.pikcha-photoschool.ru'>
<meta charset="UTF-8" />	
<?php
	if (isset($_POST['name'])) {$name = $_POST['name']; if ($name == '') {unset($name);}}
	if (isset($_POST['phone'])) {$phone = $_POST['phone']; if ($phone == '') {unset($phone);}}
	if (isset($name) && isset($phone)){
	 
	$address = "r.v.mosolov@ya.ru";
	$message = "Заявка с сайта pikcha-photoschool.ru.";
	
	// $headers  = 'From: Admin of Pikcha Photoschool <admin@pikcha-photoschool.ru>';
	
	$send = mail ($address, $message, 'From: admin@pikcha-photoschool.ru', "Имя клиента: $name. \nТелефон клиента: $phone.");

	if ($send == 'true')
	{echo "Сообщение отправлено успешно, через 5 секунд Вы будете направлены на главную страницу сайта <a href='http://www.pikcha-photoschool.ru'>pikcha-photoschool.ru</a>, где сможете продолжить знакомство с фотошколой ПИКЧА.";}
	else {echo "Ошибка, сообщение не отправлено!";}
	 
	}
	else
	{
	echo "Вы заполнили не все поля, вернитесь назад и заполните необходимые поля!";
	}
?>