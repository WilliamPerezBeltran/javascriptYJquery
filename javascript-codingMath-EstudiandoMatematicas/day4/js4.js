window.onload=function(){
	var canvas=document.getElementById('canvas');
	context=canvas.getContext('2d');
	context1=canvas.getContext('2d');
	context2=canvas.getContext('2d');
	context3=canvas.getContext('2d');
	context4=canvas.getContext('2d');
	//width=canvas.width=window.innerWidth,
	//height=canvas.height=window.innerHeight;

	width=canvas.width=500,
	height=canvas.height=500;

	var centerY=height/2,
		centerX=width/2,
		offset=height*.4,
		speed=0.01,
		angle=0;
		

		render();
		
		function render(){
			var y= centerY + Math.sin(angle)*offset;
			context.beginPath();
			context.clearRect(0,0,width,height);
			
			context.arc(centerX,y,50,0,Math.PI*2,false);
			context.fill();

			angle+=speed;
			
			requestAnimationFrame(render);

		}

		

		


		




}