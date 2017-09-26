window.onload=function(){

	var canvas=document.getElementById("canvas"),
		context=canvas.getContext("2d"),
		width=canvas.width=window.innerWidth,
		height=canvas.height=window.innerHeight;
		console.log('width: '+width);
		console.log('height: '+height);

		context.beginPath();
		context.moveTo(width/2,0);
		context.lineTo(width/2,height);
		context.strokeStyle = "#f00";
		context.stroke();

		context.beginPath();
		context.moveTo(0,height/2);
		context.lineTo(width,height/2);
		context.font = "bold 22px sans-serif";
		context.fillText("Plano Cartesiano william",50,50);
		context.strokeStyle = "#f00";
		context.stroke();


		let x=0;
		let y=0;
		var ax=0,
				ay=0;


		for (var i = 0; i < 100; i++) {

			//hace las marcaciones del eje x de la mitad al lado derecho
			
			context.beginPath();
			context.moveTo((width/2)+x,(height/2)-3);
			context.lineTo((width/2)+x,(height/2)+3);
			context.strokeStyle = "black";
			context.stroke();
            //hace las marcaciones del eje x de la mitad al lado izquierda
			context.beginPath();
			context.moveTo((width/2)-x,(height/2)-3);
			context.lineTo((width/2)-x,(height/2)+3);
			context.strokeStyle = "black";
			context.stroke();
			//hace las marcaciones del eje y del lado de abajo
			context.beginPath();
			context.moveTo((width/2)-3,(height/2)+x);
			context.lineTo((width/2)+3,(height/2)+x);
			context.strokeStyle = "black";
			context.stroke();
			//hace las marcaciones del eje y del lado de arriba
			context.beginPath();
			context.moveTo((width/2)-3,(height/2)-x);
			context.lineTo((width/2)+3,(height/2)-x);
			context.strokeStyle = "black";
			context.stroke();

			

			context.beginPath();
			context.moveTo((0),(y));
			context.lineTo((width),(y));
			context.strokeStyle = "#ddd";
			context.stroke();

			context.beginPath();
			context.moveTo((x),(0));
			context.lineTo((x),(height));
			context.strokeStyle = "#ddd";
			context.stroke();


			ax=ax+3.1416*10;
			ax=ax+3.1416*10;



			x=x+3.1416*10;
			y=y+3.1416*10;
			
		}


        //hace la grafica del seno 
		context.translate(0,height/2); 
		context.scale(1,-1); 

		for(var angle=0;angle<((Math.PI*10)*25);angle+=0.01){
			var sinX =angle*10,
				sinY=Math.sin(angle)*100;
				context.fillStyle = 'green';
				context.fillRect(sinX,sinY,1,1);
		}


		ljdfklsdjfljdskjlf



		





		
			 
					

		

	


		




}