<?php

	header("Content-type","text/html;charset=utf-8");
	
	//一、接收用户的数据（用户名）
	$userName = $_POST['userName'];
	$userPass = $_POST['userPass'];
	
	//1、建立连接（搭桥）
	$conn = mysql_connect("localhost:3306","root","caoxiaofei");
	
	//2、选择数据库
	mysql_select_db("mydb",$conn);
	
	//3、执行SQL语句
	
	$sqlStr ="select * from stuInfo where stuId='".$userName."' and stuPassword='".$userPass."'";
	$result = mysql_query($sqlStr,$conn);
	$rows = mysql_num_rows($result);
	//4、关闭数据库
	mysql_close($conn);
	
	if($rows==0){
		echo "false";
	}else{
		echo "true";
	}
?>