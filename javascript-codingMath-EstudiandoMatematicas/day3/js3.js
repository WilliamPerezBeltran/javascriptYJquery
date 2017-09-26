window.onload=function(){
	var canvas=document.getElementById('canvas');
	context=canvas.getContext('2d');
	context1=canvas.getContext('2d');
	context2=canvas.getContext('2d');
	context3=canvas.getContext('2d');
	//width=canvas.width=window.innerWidth,
	//height=canvas.height=window.innerHeight;
	width=canvas.width=1000;
	height=canvas.height=500;

	context.translate(width/5,height/2);
	context.scale(3,-3);
	for(var angle=0;angle<((Math.PI*2)*2);angle+=0.01){
		console.log(Math.sin(angle));


		var x =angle*10,
			y=Math.sin(angle)*20;
			context.fillStyle = 'green';
			context.fillRect(x,y,1,1);
			console.log(angle);

		var x1=angle*10,
		    y1=(2*(x1))+1;
		    context.fillRect(x1,y1,1,1);

		var x2=angle*10,
		    y2=((Math.sin(angle)*10))+20;
		    context1.fillStyle = 'blue';
		    context1.fillRect(x1,y2,1,1);

		    var x3=angle*10,
		    y3=((5)*(Math.cos(angle)*10))+10;
		    context2.fillStyle = 'yellow';
		    context2.fillRect(x3,y3,1,1);

		     var x4=angle*10,
		    y4=((Math.sin(angle)*10))+10;
		    context3.fillStyle = '#484342';
		    context3.fillRect(x4,y4,1,1);
	}




		context.beginPath();
		context.moveTo(0, 0);
		context.lineTo(width,0);
		context.lineTo(-width,0);
		context.lineTo(0,height);
		context.lineTo(0,-height);
		context.stroke();

}