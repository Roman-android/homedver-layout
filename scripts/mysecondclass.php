<?php 

class MySecondClass extends MyFirstClass {
	public function newMetod(){
		echo"Из нового метода класса " . __CLASS__ . ".<br />";
	}
} 

?>