window.onload=function(){

var canvas=document.getElementById('canvas');
	context=canvas.getContext('2d');
	width=canvas.width=600;
	height=canvas.height=600;

	var x=0,
	    y=0;

	var vx=10,
		vy=10;

		function animar(){
			// limpia canvas
			// dibuja un cuadrado de 5x5
			context.fillRect(x,y,3,3);
		}

		function movimiento(){
			//nos da la velocidad del objeto
			x+=vx;
			y+=vy;

		}

		function choqueEjeX(){

			if(x<=0 || x>=width){
				vx=-vx;//
			}
			
		}
		function choqueEjeY(){

			if(y<=0 || y>=height){
				vy=-vy;
			}
			
		}
			

		function frame(){
			animar();
			movimiento();
			choqueEjeX();
			choqueEjeY();
			requestAnimationFrame(frame);
		}

		frame();




	
		

	
	


		




}