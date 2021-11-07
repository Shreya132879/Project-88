
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


ball_image = 10; 
hole_image = 10;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	
	new_image();
}

function new_image()
{
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		
	}

	function down()
	{
		
	}

	function left()
	{
		if(ball_x >5)
		{
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
		}
	}
	
}

