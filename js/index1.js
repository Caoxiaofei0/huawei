function s(){
							var i=-1;
							
				
						    function autoScroll(){ 
						       setInterval(function(){ 
						            i++; 
						    
						            moveTit(i); 
						        }, 2000); 
						  
						    } 
						    function moveTit(num){
						    	 if(i==5){
											i=1;
											$("#wrap-bottom").css({top:0});
										}
						    	$("#wrap-bottom").stop().animate({top:i*-48+"px"},400);
						    }
						    autoScroll();
											
						}