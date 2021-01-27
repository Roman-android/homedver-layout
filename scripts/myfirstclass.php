<?php

class MyFirstClass{

	public $prop1 = "Свойство класса";
	
	public function __construct(){
		echo 'Создан класс"',__CLASS__,'"!<br/>';
	}

	public function __destruct(){
        echo 'Сработал метод destruct класса "',__CLASS__, '"<br />';
    }

	public function __toString(){

		echo "Используем метод  toString: ";
		return $this->getProperty();

	}

	public function setProperty($newval){
		$this->prop1 = $newval;
	}

	public function getProperty(){
		return $this->prop1.". (Класс ".__CLASS__.")<br/>";
	}
	public static $a = 10;
	public function summMethod(){
		echo "Функция summMethod в классе MyFirstClass"."<br/>"; 
	}

}


class MySecondClass extends MyFirstClass {
	
	public function __construct(){
		 parent::__construct(); // Вызываем конструктор родительского класса
	     echo "Создан объект класса " . __CLASS__ . ".<br />";
	}
	
	public $b = 50;
	public function summMethod(){
		parent::summMethod();
		echo "Функция summMethod в классе MySecondClass"."<br/>"; 
		echo self::$a."<br/>";
		echo $this->$b."<br/>";
		
	}
	
} 

/* 
$myFirstClass = new MyFirstClass;
echo $myFirstClass->getProperty();
echo $myFirstClass->summMethod();
 */

$mySecondClass = new MySecondClass;
$mySecondClass->summMethod();

//$mySecondClass->testMethod();
//$mySecondClass->getProperty();
//$mySecondClass->newMethod();

?>