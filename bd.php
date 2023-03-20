<?php

$host = 'localhost';
$user = 'root';    // Имя созданного вами пользователя
$pass = ''; // Установленный вами пароль пользователю
$db_name = 'genvideo';   // Имя базы данных
$link = mysqli_connect($host, $user, $pass, $db_name); // Соединяемся с базой

// Ругаемся, если соединение установить не удалось
if (!$link) {
    echo 'Не могу соединиться с БД. Код ошибки: ' . mysqli_connect_errno() . ', ошибка: ' . mysqli_connect_error();
    exit;
}

function insert($link ,$result,$timeV, $linkVideo){    // Хост, у нас все локально
   
        $sql = mysqli_query($link, "INSERT INTO `video` (result, time, link) VALUES ('$result', '$timeV', '$linkVideo')");

    if ($sql) {
      echo '<p>Данные успешно добавлены в таблицу.</p>';
    } else {
      echo '<p>Произошла ошибка: ' . mysqli_error($link) . '</p>';
    }
    
    
}

  ?>