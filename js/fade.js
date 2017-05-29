var fade=(function(){
			return function(ulE,left_btn,right_btn,dot,container){

			var index=0,
			       flag1=false,
			       flag2=false,
			       play=document.getElementById(ulE),
			       playLi=play.getElementsByTagName("img"),
			       length=playLi.length,
			       btnLeft=document.getElementById(left_btn),
			       btnRight=document.getElementById(right_btn),
			       container=document.getElementById(container),
			       dot=document.getElementById(dot),
		                   dotLi=dot.getElementsByTagName("li");

			       function fadeOut(index, toOne,time){

				
				if (toOne) flag2 = true;//如果toOne存在的话就设flag2为true,代表toOne正在执行动画
				else flag1 = true;

				var e=playLi[index];
				//toOne = (toOne == undefined )? false : toOne;
				if(!time) time=3000;
				var ease=Math.sqrt;
			
				var start=(new Date()).getTime();
				animate();

				function animate(){
					var now=(new Date()).getTime();
					var elapsed=now-start;
					var fraction=elapsed/time;
					if(fraction<1){
						if (toOne) {
							var opacity=0+ease(fraction);
						} else {
							var opacity=1-ease(fraction);
						}
						e.style.opacity=String(opacity);
						setTimeout(animate,Math.min(25,time-elapsed));
	
					}else{
						if (toOne)
							flag2 = false;//toOne存在，此时动画已经结束，就将flag2设为false;
						else
							flag1 = false;
					}

				}
			};
			
				      for(var i=0;i<length;i++)
				      {
					playLi[i].style.zIndex=Math.abs(i-length);
					playLi[i].style.opacity = "0";
				       };
					playLi[0].style.opacity = "1";

				      for(var i=0;i<dotLi.length;i++){
				//dotLi[i].cur=i;

				dotLi[i].onclick=function()
				{
					for(var j=0;j<dotLi.length;j++){
						dotLi[j].classList.remove("active");
						}
					this.classList.add("active");

					}
				};
				btnRight.onclick=function()
				{
				console.log(index);
				if (flag2 && flag1) return;//当flag1和flag2都为true的时候，直接return ,不执行下面的代码。
				dotLi[index%length].classList.remove('active');
				

				fadeOut(index % length);
				fadeOut((index + 1) % length, true);

				dotLi[(index+1)%length].classList.add('active');
				index++;
				};

				btnLeft.onclick = function() 
				{
					if (flag2 && flag1) return false;

					if (index == 0) index += length;
					dotLi[index%length].classList.remove('active');
					fadeOut(index % length);
					fadeOut((index - 1) %length, true);
					dotLi[(index-1)%length].classList.add('active');
					index--;
				};
				
			}
		})();