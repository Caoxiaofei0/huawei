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
		
		
		$.get("houtai/getGoodsList.php", function(persons){
		var persons=eval('('+persons+')');
    		console.log(persons);
    		for(var i=0;i<persons.length;i++){
				if((i!=0)&((i+1)%5==0)){
				$("#goodlist-main-ul").append('<li style="margin-right:0px;"><a href="#"><img src="'+persons[i].goodsImg+'"/><h3>'+persons[i].goodsName+'</h3><span>￥'+persons[i].goodsPrice+'</span><p class="clear"><span>'+persons[i].goodsDesc+'</span><span>'+persons[i].beiyong2+'</span></p></a></li>');
				}else{$("#goodlist-main-ul").append('<li><a href="#"><img src="'+persons[i].goodsImg+'"/><h3>'+persons[i].goodsName+'</h3><span>￥'+persons[i].goodsPrice+'</span><p class="clear"><span>'+persons[i].goodsDesc+'</span><span>'+persons[i].beiyong2+'</span></p></a></li>');
}
}});

});		



