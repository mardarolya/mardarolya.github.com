<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "Ошибка! Вы должны отправить форму";
}


$name = $_POST['name'];
$phone = $_POST['phone'];
$visitor_email = $_POST['email'];
$message = $_POST['comment'];

//Validate first
if(empty($name)||empty($visitor_email)||empty($phone)) 
{
    echo "Имя, email и телефон обязательны для заполнения!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Неправильный email!";
    exit;
}

$email_from = 'omskazka@gmail.com';//<== update the email address
$email_subject = "Заявка на обучение";
$email_body = "Новая заявка на обучение! \n"
              "Имя: $name.\n".
              "Телефон: $phone.\n".
              "Почта: $visitor_email.\n".
              "Комментарий: $message.\n".
    
$to = "omskazka@gmail.com";//<== update the email address
$headers = "From: $visitor_email \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
// //done. redirect to thank-you page.
header('index.html');

// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 