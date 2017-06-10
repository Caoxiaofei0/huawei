//账号 密码

var a=false;
var b=false;
var c=false;
document.getElementById("enroll-inpId1").onblur=function(){		
        var reg=/^1[34578]\d{9}$/;
       var str=document.getElementById("enroll-inpId1").value;
       if(str.length==0){
			document.getElementById("sId1").innerHTML="";
			document.getElementById("sId11").innerHTML="";			
		}else if(reg.test(str)){			
	      document.getElementById("sId1").innerHTML="√";		
		  a=true;		  
	   }else{
	      a=false; 
	      document.getElementById("sId1").innerHTML="×";                                                            
	   }	   
    }
//登录密码验证；由8-32个数字或字母组成;
   document.getElementById("enroll-inpId2").onblur=function(){
       var reg = /^[A-z]\w{7,31}$/;
       var str=document.getElementById("enroll-inpId2").value;
       if(str.length==0){
			document.getElementById("sId2").innerHTML="";
			document.getElementById("strength1").style.backgroundColor="#999999";
		   	document.getElementById("strength2").style.backgroundColor="#999999";
		   	document.getElementById("strength3").style.backgroundColor="#999999";
		}else if(reg.test(str)){ 
	        b=true;
	        if(str.length<16&str.length>0){
		   		document.getElementById("strength1").style.backgroundColor="red";
		   		document.getElementById("strength2").style.backgroundColor="#999999";
		   		document.getElementById("strength3").style.backgroundColor="#999999";
		   }else if(str.length<24&str.length>16){	   		
		   		document.getElementById("strength2").style.backgroundColor="red";
		   		document.getElementById("strength3").style.backgroundColor="#999999";
		   		document.getElementById("strength1").style.backgroundColor="#999999";		   		   		
		   }else{
		   		document.getElementById("strength3").style.backgroundColor="red";
		   		document.getElementById("strength1").style.backgroundColor="#999999";
		   		document.getElementById("strength2").style.backgroundColor="#999999";
		   }
		      document.getElementById("sId2").innerHTML="√";
		   }else{
		   b=false;
		       document.getElementById("sId2").innerHTML="×,格式不对请重输";                                                           
		   }		   
    }   
    document.getElementById("enroll-inpId3").onblur=function(){      
       var str=document.getElementById("enroll-inpId3").value;
       if(str.length==0){
			document.getElementById("sId3").innerHTML="";			
		}else if(str==document.getElementById("enroll-inpId2").value){ 
	        b=true;	   
		      document.getElementById("sId3").innerHTML="√";
		   }else{
		   b=false;
		       document.getElementById("sId3").innerHTML="×";                                                           
	   	}	  
    } 

//验证码验证
	var num="";
	function testF1(){
	    var arr=[];
		var str="";	
		for(var i=49;i<=57;i++){
		    arr.push(i);
		}
		for(var i=65;i<=90;i++){
		    arr.push(i);
		}
		for(var i=97;i<=122;i++){
		    arr.push(i);
		}	
        num="";
		for(var j=1;j<=4;j++){
		    var index=parseInt(Math.random()*arr.length);
		    str=str+"<img src='img/img/"+arr[index]+".jpg' style='width:40px;height:40px'/>";
			 num=num+String.fromCharCode(arr[index]).toLowerCase();		 
	 	}	
	   document.getElementById("spanId").innerHTML=str;
	}
	function sum1(){
	    var num1=document.getElementById("yzm").value.toLowerCase();
		if(num==num1){
			c=true;
		    document.getElementById("spanId01").innerHTML="√";
		}else{
		    c=false;
		    document.getElementById("spanId01").innerHTML="×";
		   }
	}
function denglu666(){
    if(a&b&c){
        alert("正确");
	}else{
	    alert("出账号或者密码格式有误");
	}
	
}