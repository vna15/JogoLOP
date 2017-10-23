var value = 100

function setup() {
      createCanvas(820,640)
      background(200)
}  

function draw() {
	  stroke(0,43,255)
      strokeWeight(15)
      line(0,0,1,640)
      line(0,0,820,1)
      line(820,640,1,640)
      line(820,640,820,1)
      noStroke()
      textSize(100)
      text("TUM",270,120)
      textSize(40)
      text("The Ultimate MiniGame",190,170)
      textSize(20)
      text("Developed by VNA",310,570)
      fill(value)
      rect(280,300,180,100)
      fill(0)
      textSize(80)
      text("Start",280,380)
}	

function mouseClicked() {
	  if (value == 100) {
		    clear()
	  }
	  else {
		    value = 0	    
}
}	  
	  	  	  




	    



	  

    
