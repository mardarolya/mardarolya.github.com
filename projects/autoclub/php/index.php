<?php
        $to = 'ovmardar@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Новая заявка'; //Загаловок сообщения
        $name = $_GET['name']; // Вытаскиваем имя в переменную
        $email = $_GET['email']; // Вытаскиваем почту в переменную
        $phone = $_GET['phone'];
        $comment = $_GET['comment'];
        
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$name.'</p>
						<p>Телефон: '.$phone.'</p> 
						<p>Почта: '.$email.'</p>   
						<p>Комментарий: '.$comment.'</p>                       
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель Сайт Автошколы\r\n"; //Наименование и почта отправителя
        if(mail($to, $subject, $message, $headers)) { // При помощи функции mail, отправляем сообщение, проверяя отправилось оно или нет
            echo json_encode("{'result': 'ok'}"); // Отправка успешна
        }
        else {
            echo json_encode("{'result': 'no'}");; // Письмо не отправилось
        }
?>