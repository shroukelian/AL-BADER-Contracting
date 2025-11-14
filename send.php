<?php
$to = "info@albader-contracting.com";
$subject = "رسالة جديدة من موقعك";

$message = "الاسم: ".$_POST['full-name']."\n".
           "البريد: ".$_POST['email']."\n".
           "الهاتف: ".$_POST['phone-number']."\n".
           "الرسالة:\n".$_POST['message-content'];

$headers = "From: ".$_POST['email'];

if(mail($to, $subject, $message, $headers)) {
    echo "تم إرسال الرسالة بنجاح";
} else {
    echo "حدث خطأ أثناء الإرسال";
}
?>