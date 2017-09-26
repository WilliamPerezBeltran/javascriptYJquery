window.onload=function(){
	var canvas=document.getElementById('canvas');
	context=canvas.getContext('2d');
	context1=canvas.getContext('2d');
	context2=canvas.getContext('2d');
	context3=canvas.getContext('2d');
	context4=canvas.getContext('2d');
	

	

		context.fillStyle="red";
		context.fillRect(0,50,300,150);

		context1.beginPath();
		context1.rect(20, 20, 150, 100);
		context1.fillStyle = "blue";
		context1.fill();

		context2.beginPath();
		context2.rect(20,200,100,5);
		context2.fillStyle="black";
		context2.fill();

		context3.beginPath();
		context3.fillStyle='pink';
		context3.fillRect(60,250,5,100);



		for (var i = 0; i < 200; i+=10) {
				console.log(i );
				
				
				myFunction(i);

				function myFunction(i) {
				console.log(i );
				console.log('iiiiiiiiiiiiiii');
			    setInterval(function(){ 
				    	context3.beginPath();
						context3.fillStyle='blue';
				    	context3.fillRect(i,250,3,100);}, 2000);
				}
			
		}

		context4.beginPath();
		context4.fillRect(0,360,500,50);
		for (var i = 0; i < 500; i+=20) {
			context4.fillStyle='#1E90FF ';
			context4.clearRect(i,380,5,5);
		
		}


		context.beginPath();
		context.arc(380,300,100,0,2*Math.PI);
		context.stroke();

		context.beginPath();
		context.moveTo(380, 300);
		context.lineTo(480,300);
		context.moveTo(380, 300);
		context.lineTo(380,200);
		context.moveTo(380, 300);
		context.lineTo(380,400);
		context.moveTo(380, 300);
		context.lineTo(280,300);

		context.stroke();
		context.fillRect(380,300,3,3);
		context.fillRect(480,300,3,3);
		context.fillRect(280,300,3,3);
		context.fillRect(380,200,3,3);
		context.fillRect(380,400,3,3);

		/*
		*/





		




}