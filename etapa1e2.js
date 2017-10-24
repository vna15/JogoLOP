x = 50
y = 50
posxximpar = 0
posximpar = 680
posxxpar = 820
posxpar = 140

function setup() {
      createCanvas(820,640)
      alert("Use as setas para locomover a bola e chegar no quadrado azul para passar de fase")
}  

function draw() {
	  clear()
	  background(200)
	  
	  // contorno canvas
	  stroke(0,43,255)
      strokeWeight(15)
      line(0,0,1,640) 
      line(0,0,820,1)  
      line(820,640,1,640)  
      line(820,640,820,1)  
     
      // bola
      if (keyIsDown(LEFT_ARROW))
        x-=4;

      if (keyIsDown(RIGHT_ARROW))
        x+=4;

      if (keyIsDown(UP_ARROW))
        y-=4;

      if (keyIsDown(DOWN_ARROW))
        y+=4;
      fill(0)
      noStroke()
      ellipse(x,y,70,70)
      
      stroke(0,43,255)
      strokeWeight(7)  
      line(0,90,700,90)
      
      // movimentação linha 2, 4 e 6
      if(posxpar>0 && posxxpar>680){
		  posxpar = posxpar - 2
		  posxxpar = posxxpar - 2
	  }
	  else{
		  posxpar = 140
		  posxxpar = 820
	  }	  	  
      line(posxxpar,180,posxpar,180) 
      line(posxxpar,540,posxpar,540)
      line(posxxpar,360,posxpar,360)
      
      // movimentação linha 3 e 5
      if(posximpar<820 && posxximpar<820){
		  posximpar = posximpar + 2
		  posxximpar = posxximpar + 2
	  }
	  else{
		  posximpar = 680
		  posxximpar = 0
	  }	  	  
      line(posxximpar,270,posximpar,270)
      line(posxximpar,450,posximpar,450)
      
      // chegada
      noStroke()
      fill(0,43,255)
      rect(730,553,70,70)
}  
    
