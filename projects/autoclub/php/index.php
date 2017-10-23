<?php 
if((isset($_GET['name'])&&$_POST['name']!="")&&(isset($_GET['phone'])&&$_GET['phone']!="")&&(isset($_GET['mail'])&&$_GET['mail']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'ovmardar@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Новая заявка'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_GET['name'].'</p>
						<p>Телефон: '.$_GET['phone'].'</p> 
						<p>Почта: '.$_GET['mail'].'</p>   
						<p>Комментарий: '.$_GET['comment'].'</p>                       
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        if(mail($to, $subject, $message, $headers)) { // При помощи функции mail, отправляем сообщение, проверяя отправилось оно или нет
            echo "<p>Сообщение успешно отправлено</p>"; // Отправка успешна
        }
        else {
          echo "<p>Что-то пошло не так, как планировалось</p>"; // Письмо не отправилось
        }
        
}
else {
    echo "Проверка не пройдена!";   
}
?>