
function createMirror(smallBoxId,smallImgId,mirrorId,bigBoxId,bigImgId,baseLeft,baseTop,baseWidth,baseHeight,mirrorWidth, mirrorHeight,multiple){
	
	$my(smallBoxId).style.cssText = "width:"+baseWidth+"px;height:"+baseHeight+"px;left:"+baseLeft+"px;top:"+baseTop+"px;";	
	$my(smallImgId).style.cssText = "width:"+baseWidth+"px;height:"+baseHeight+"px;";
	$my(mirrorId).style.cssText = "width:"+mirrorWidth+"px;height:"+mirrorHeight+"px;";
	$my(bigBoxId).style.cssText = "width:"+(mirrorWidth*multiple)+"px;height:"+(mirrorHeight*multiple)+"px;";
	$my(bigImgId).style.cssText = "width:"+(baseWidth*multiple)+"px;height:"+(baseHeight*multiple)+"px;";
	
	
	$my(smallBoxId).onmousemove = function(event){
		var e = event || window.event;
		var pianyiliangx=document.documentElement.scrollLeft||document.body.scrollLeft;
		var pianyiliangy=document.documentElement.scrollTop||document.body.scrollTop;
		var left1 = e.clientX-mirrorWidth/2+pianyiliangx-100;
		var top1 = e.clientY-baseTop-mirrorHeight/2-220+pianyiliangy;
		
		if(left1<=0){
			left1=0;
		}else if(left1>=baseWidth-mirrorWidth-2){
			left1 = baseWidth-mirrorWidth-2;
		}
		
		if(top1<=0){
			top1 = 0;
		}else if(top1>=baseHeight-mirrorHeight-2){
			top1 =baseHeight-mirrorHeight-2;
		}
		
		$my(mirrorId).style.left = left1+"px";
		$my(mirrorId).style.top = top1+"px";	
		
		$my(bigImgId).style.left = -1*multiple*left1+"px";
		$my(bigImgId).style.top = -1*multiple*top1+"px";
	}	
}
