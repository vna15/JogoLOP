x = 50
y = 50

function setup() {
      createCanvas(820,640)
}  

function draw() {
	  clear()
	  background(200)
	  stroke(0,43,255)
      strokeWeight(15)
      line(0,0,1,640)
      line(0,0,820,1)
      line(820,640,1,640)
      line(820,640,820,1)
     
      if (keyIsDown(LEFT_ARROW))
        x-=3;

      if (keyIsDown(RIGHT_ARROW))
        x+=3;

      if (keyIsDown(UP_ARROW))
        y-=3;

      if (keyIsDown(DOWN_ARROW))
        y+=3;
      
      fill(0)
      noStroke()
      ellipse(x,y,70,70)
      
      stroke(0,43,255)
      strokeWeight(7)  
      line(0,90,700,90)
      line(820,180,120,180)
      line(0,270,700,270)
      line(820,360,120,360)
      line(0,450,700,450)
      line(820,540,120,540)
}      
