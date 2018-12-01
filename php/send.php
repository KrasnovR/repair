<?php 
mail("krasnovr17@gmail.com",
"Обратный звонок",
"Имя: ". $_REQUEST["fio"] . " Телефон: " . $_REQUEST["phone"]
);