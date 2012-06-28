var mouseX = 0, mouseY = 0, pmouseX = 0, pmouseY = 0;
var pressX = 0, pressY = 0;

var dragging = false;						

var rotateX = 0, rotateY = 0;
var rotateVX = 0, rotateVY = 0;
var rotateXMax = 90 * Math.PI/180;	

var keyboard = new THREEx.KeyboardState();	

function onDocumentMouseMove( event ) {

	pmouseX = mouseX;
	pmouseY = mouseY;

	mouseX = event.clientX - window.innerWidth * 0.5;
	mouseY = event.clientY - window.innerHeight * 0.5;

	if(dragging){
		if(keyboard.pressed("shift") == false){
			rotateVY += (mouseX - pmouseX) / 2 * Math.PI / 180 * 0.3;
  			rotateVX += (mouseY - pmouseY) / 2 * Math.PI / 180 * 0.3;	
  		}
  		else{
  			camera.position.x -= (mouseX - pmouseX) * .5; 
  			camera.position.y += (mouseY - pmouseY) * .5;
  		}
	}
}

function onDocumentMouseDown( event ) {	
    dragging = true;			   
    pressX = mouseX;
    pressY = mouseY;   	
}	

function onDocumentMouseUp( event ){
	dragging = false;
	histogramPressed = false;
}

function onClick( event ){
	//	make the rest not work if the event was actually a drag style click
	if( Math.abs(pressX - mouseX) > 3 || Math.abs(pressY - mouseY) > 3 )
		return;				
}

function onKeyDown( event ){	
}

function handleMWheel( delta ) {
	camera.scale.z += delta * 0.1;
	camera.scale.z = constrain( camera.scale.z, 0.8, 2.4 );
}

function onMouseWheel( event ){
	var delta = 0;

	if (event.wheelDelta) { /* IE/Opera. */
	        delta = event.wheelDelta/120;
	} 

	if (delta)
	        handleMWheel(delta);

	event.returnValue = false;			
}	

function onDocumentResize(e){
}