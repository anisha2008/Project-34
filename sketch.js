const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

function preload() {

  groundImg=loadImage("Images/GamingBackground.png")
manImg=loadImage("Images/Superhero-01.png")
monsterImg=loadImage("Images/Monster-01.png")
}

function setup() {
  createCanvas(800, 400);
  engine= Engine.create()
  world=engine.world

  var options={
    'density':1,
    'airFriction':0.05
  }

  sman=Bodies.rectangle(mouseX,mouseY,5,5)
  World.add(world,sman)
   
  base=new Ground(400,300,600,20)
  
     box1=new Box(350,200,30,30)
     box2=new Box(350,210,30,30)
     box3=new Box(350,220,30,30)
     box4=new Box(350,230,30,30)
     box5=new Box(350,250,30,30)

     box6=new Box(400,250,30,30)
     box7=new Box(400,260,30,30)
     box8=new Box(400,270,30,30)
     box9=new Box(400,280,30,30)
     box10=new Box(400,290,30,30)

     box11=new Box(450,230,30,30)
     box12=new Box(450,240,30,30)
     box13=new Box(450,250,30,30)
     box14=new Box(450,260,30,30)
     box15=new Box(450,270,30,30)
   
     monster=Bodies.rectangle(600,150,30,30,options)
     World.add(world,this.monster)

    monster.visible=false
}

  

function draw() {
  background(groundImg);
    Engine.update(engine)
  rect(mouseX,mouseY,5,5)
  image(manImg,mouseX,mouseY,150,150)
 
  base.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()

  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()

  box14.display()
  box15.display()
 
  
  
  
  rect(monster.position.x,monster.position.y,30,30)
  image(monsterImg,monster.position.x,monster.position.y,120,120)

  
}
 
