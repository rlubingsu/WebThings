/*
var canvasElement = document.querySelector('canvas');

canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

var contexts = canvasElement.getContext('2d');

contexts.fillStyle = 'rgba(255, 0, 40, 1)';
contexts.fillRect(200,300,100,100);
contexts.fillStyle = 'rgba(85, 0, 100, 1)';
contexts.fillRect(100,100,100,100);


//Drawing lines

contexts.beginPath();
contexts.moveTo(200,300);
contexts.lineTo(300,500);
contexts.lineTo(400,600);
contexts.strokeStyle = "#eeeeee";
contexts.stroke();

contexts.beginPath();
contexts.moveTo(0,0);
contexts.lineTo(300,900);
contexts.strokeStyle = "rgba(255,0,0,1)";
contexts.stroke();


//circle/arc
contexts.beginPath();
contexts.arc(700,300,90,0,Math.PI * 2, false);
contexts.strokeStyle = "purple";
contexts.stroke();

var colors = ["purple","red","blue","green","yellow"]; 

for(var i=0; i<5; i++){
	var b =  2;
	var c = 255;
	var a = 255;
	var x =Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	contexts.beginPath();
contexts.arc(x,y,90,0,Math.PI * 2, false);
contexts.strokeStyle = colors[b];
contexts.stroke();
}

*/
/*
	This is an object
*/
function Circle(x,y,dx,dy,radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function() {
		var c = canvas.getContext('2d');
			c.beginPath();
	c.arc(this.x , this.y ,this.radius , 0 ,Math.PI*2 , false);
	c.strokeStyle = "yellow";
	c.fillStyle = 'green';	
	c.stroke();
	c.fill();
	 
	};

	this.update = function () {


		if( (this.x + this.radius) > innerWidth || (this.x - this.radius) < 0){
		this.dx = -this.dx;
			 console.log("updating");
	}

	if((this.y + this.radius) > innerHeight || (this.y - this.radius) < 0){
		this.dy = -this.dy;

	}

	this.x += this.dx;
	this.y += this.dy;

	 this.draw();

	};


}

var circle = new Circle(200, 200, 3, 3, 90);
//circle.draw(); 
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
 	/*
 
var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
var radius = 120;
var conditionForScreenSpeedHorizontal = (Math.random() - 0.5) *10;
var conditionForScreenSpeedVertical =  (Math.random() - 0.5) *10;
*/
var circleArray = [];
for(var p =0; p<100; p++){
	var radius = 50;
	var x = Math.random() * (window.innerWidth - radius * 2) + radius ;
	var y = Math.random() * (window.innerHeight - radius * 2) + radius;
	 
	var conditionForScreenSpeedHorizontal = (Math.random() - 0.5) *5;
	var conditionForScreenSpeedVertical =  (Math.random() - 0.5) *5;
	circleArray.push(new Circle(x,y,conditionForScreenSpeedHorizontal,conditionForScreenSpeedVertical,radius));
	 
}
function animate(){

	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight); //this is clearing each time a circle is made
			
				for(var i =0; i < circleArray.length; i++){

					circleArray[i].update();
				}

		//circle.update();
/*
	c.beginPath();
	c.arc(x , y ,radius ,0 ,Math.PI*2 , false);
	c.strokeStyle = "blue";
	c.stroke();
	*/
 
 
	/*
	if( (x + radius) > window.innerWidth || (x-radius) < 0){
		conditionForScreenSpeedHorizontal = -conditionForScreenSpeedHorizontal;
	}

	if((y+radius) > window.innerHeight || y-radius < 0){
		conditionForScreenSpeedVertical = -conditionForScreenSpeedVertical;
	}

	x += conditionForScreenSpeedHorizontal;
	y+= conditionForScreenSpeedVertical;
	console.log(conditionForScreenSpeedHorizontal);

*/

 
 
}
	
animate();
 
 