var video;
var Scale;

function setup() {
  createCanvas(640,480);
	Scale = 1;
	rectSize = Scale*.5;
	video = createCapture(VIDEO);
  video.size(640,480);
	video.hide();
}
	


function draw() {
	video.loadPixels();
	
  for (var i=0; i< video.width; i=i+10){
  	for (var j=0; j<video.height; j=j+10){
			pos=4 *(j*video.width+i);
			
			var r=video.pixels[pos];
			var g=video.pixels[pos+1];
			var b=video.pixels[pos+2];
			var alpha=video.pixels[pos+3];
    
			var c = color(r, g, b,alpha);

			var rR = random(300,1000);	
			var gR = random(300,1000);	
			var bR = random(300,1000);	

			noStroke();
			fill(r-i*rR/4000,g-i*gR/2100,b-i*bR/4000);

			var i1 = random(-5,5);
			var j1 = random(-5,5);	
			var posi = i * Scale;
			var posj = j * Scale;	
			rect(posi+rectSize+i1,posj+j1,posi+rectSize+i1,posj+j1)		
   } 
	}

	video.updatePixels();

}