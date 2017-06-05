	$(function(){		
		$(".goodlist-nav-li").eq(1).mouseover (function(){		
			$(".goodlist-nav-hide").eq(0).slideDown(500,function(){			
			});
		});	
		$(".goodlist-nav-li").eq(1).mouseleave(function(){		
			$(".goodlist-nav-hide").eq(0).slideUp(500,function(){			
			});
		});	
		$(".goodlist-nav-li").eq(2).mouseover (function(){		
			$(".goodlist-nav-hide").eq(1).slideDown(500,function(){			
			});
		});	
		$(".goodlist-nav-li").eq(2).mouseleave(function(){		
			$(".goodlist-nav-hide").eq(1).slideUp(500,function(){			
			});
		});	
		$(".goodlist-nav-li").eq(3).mouseover (function(){		
			$(".goodlist-nav-hide").eq(2).slideDown(500,function(){			
			});
		});	
		$(".goodlist-nav-li").eq(3).mouseleave(function(){		
			$(".goodlist-nav-hide").eq(2).slideUp(500,function(){			
			});
		});	
		$(".goodlist-nav-li").eq(4).mouseover (function(){		
			$(".goodlist-nav-hide").eq(3).slideDown(500,function(){			
			});
		});	
		$(".goodlist-nav-li").eq(4).mouseleave(function(){		
			$(".goodlist-nav-hide").eq(3).slideUp(500,function(){			
			});
		});
		$(".goodlist-nav-li").eq(5).mouseover (function(){		
			$(".goodlist-nav-hide").eq(4).slideDown(500,function(){			
			});
		});	
		$(".goodlist-nav-li").eq(5).mouseleave(function(){		
			$(".goodlist-nav-hide").eq(4).slideUp(500,function(){			
			});
		});		
		//1、创建对象
		var xhr = new XMLHttpRequest();		
		//2.1、设置请求参数
		xhr.open("get","goodlist.json",true);
		
		//2.2、设置回调函数
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				let persons = JSON.parse(xhr.responseText);
				showPersonInfo(persons);
			}
		}		
		//3、发送
		xhr.send();	
		function showPersonInfo(persons){
		for(var i=0;i<persons.length;i++){
			if((i!=0)&((i+1)%5==0)){
				$("#goodlist-main-ul").append('<li style="margin-right:0px;"><a href="#"><img src='+persons[i].imgsrc+'/><h3>'+persons[i].name+'</h3><span>'+persons[i].cost+'</span><p class="clear"><span>'+persons[i].zhuangtai+'</span><span>'+persons[i].pingjia+'</span></p></a></li>');
			}else{$("#goodlist-main-ul").append('<li><a href="#"><img src='+persons[i].imgsrc+'/><h3>'+persons[i].name+'</h3><span>'+persons[i].cost+'</span><p class="clear"><span>'+persons[i].zhuangtai+'</span><span>'+persons[i].pingjia+'</span></p></a></li>');	}
	
	}
		}
	});		
