<?php
$val = $_REQUEST['value'];
//if($val!=NULL){
//echo '你提交的内容是:'.$val;

switch ($val) {
	case 1 :
		$str = '10 21 22 30 31 40';
		echo "本期的中奖号码为:<a>$str</a>";
		break;
	case 2 :
		$str = '2 11 52 60 31 45';
		echo "本期的中奖号码为:<a>$str</a>";
		break;
	case 3 :
		$str = '10 34 2 0 31 40';
		echo "本期的中奖号码为:<a>$str</a>";
		break;
	case 4 :
		$str = '2 10 2 6 31 45';
		echo "本期的中奖号码为:<a>$str</a>";
		break;
	default :
		if ($val == NULL) {
			echo "请认真阅读页面的提示信息!";
			exit ;
		} else {
			//$str=$val;
			echo "你的输入有误,请重新输入！";
			break;
		}
}

//}else{
//echo '你的输入有误,请重新输入!';
//}
?>