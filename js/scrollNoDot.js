var scrollNoDot=(function(){
	return function(ulE,left_btn,right_btn,container){
		var play=document.getElementById(ulE),
		      item=play.getElementsByTagName("ul"),
		      length=item.length,
		      
		      btnL=document.getElementById(left_btn),
		      btnR=document.getElementById(right_btn),
		      container=document.getElementById(container),
		      index=0,
		      mark=null;
		//var dot=document.getElementById("dot");
		//var dot_li=dot.getElementsByTagName("li");
		



		btnR.onclick=function(){
			scrollIn(index+1);
			console.log(index);
			//console.log(i);

		}
		btnL.onclick=function(){
			scrollIn(index-1);
			console.log(index);
			//console.log(i);
			

		}
		

		function scrollIn(i){
			
		if(i==index) return;
		if(mark) return;
		
			if(i<0){//克隆

				var newItem=item[i+4].cloneNode(true);
				play.removeChild(item[i+4]);
				play.insertBefore(newItem,item[0]);
				play.style.left = '-645px';
				index = 1;
				i = 0;

				

			}
			else if(i>3){//克隆
				
				
				var newIte=item[0].cloneNode(true);
				play.appendChild(newIte);
				
				play.removeChild(item[0]);
				play.style.left='-1290px';
				index=2;
				i=3;
				
				


			}
			//console.log(i);
			if(i>index){//向右滑动
				forward(i);
				
			}else{//向左滑动
				back(i);
				

			
		}
		}

		function forward(i){

			var current=play.offsetLeft;
			var target=current-(i-index)*645;
			function run(){
				current-=5;
				play.style.left=current+"px";
				console.log(current);
				if(target==current){
					mark=null;
					return;
				}
				mark=setTimeout(run,2);
			}
			mark=setTimeout(run,2);
			index=i;

		};

		function back(i){
			var current=play.offsetLeft;
			var target=current+(index-i)*645;
			console.log(target);
			console.log(current);
			function run(){
				current+=5;
				play.style.left=current+"px";
				if(target==current){
					mark=null;
					return;
				}
				mark=setTimeout(run,2);
			}
			mark=setTimeout(run,2);
			index=i;

		};
		 function start() {
                //重复执行的定时器
                	timer = setInterval(function () {
                    	btnR.onclick();
               	 }, 3000)
            		};
            		function stop(){
            			clearInterval(timer);
            			
            		};
            		 container.onmouseover = stop;
            		container.onmouseout = start;
            	
            		start();
		

	}

})();