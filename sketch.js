let marioX = 100;
let marioY = 300;
let up;

function setup() 
{
  createCanvas(800, 600);
}

function draw() 
{
  background(150);

  Name();
  Flag();
  CheckerPattern();
  StopLight();
  House();
  Dice();
  MarioPixel();
}

function Name()
{
  stroke(0);
  textSize(32);
  fill('black');
  textFont('Courier New');
  text('Pepijn Bullens', 30, 50);
}

function Flag()
{
  strokeWeight(0);
  fill("#0A497D");
  rect(30, 100, 50, 50);
  fill("#EAB308");
  rect(80, 100, 30, 130);
  rect(30, 150, 160, 30);
  fill("#0A497D");
  rect(30, 180, 50, 50)
  rect(110, 180, 80, 50)
  rect(110, 100, 80, 50)
}

function CheckerPattern()
{
  //layer01
  fill('black');
  rect(200, 100, 30, 30);
  fill('white');
  rect(230, 100, 30, 30);
  fill('black');
  rect(260, 100, 30, 30);

  //layer02
  fill('white');
  rect(200, 130, 30, 30);
  fill('black');
  rect(230, 130, 30, 30);
  fill('white');
  rect(260, 130, 30, 30);

  //layer03
  fill('black');
  rect(200, 160, 30, 30);
  fill('white');
  rect(230, 160, 30, 30);
  fill('black');
  rect(260, 160, 30, 30);
}

function StopLight()
{
  fill('grey');
  rect(300, 100, 50, 120);
  rect(320, 220, 10, 20);
  fill('red');
  circle(325, 125, 30);
  fill('orange');
  circle(325, 160, 30);
  fill('green');
  circle(325, 195, 30);
}

function House()
{
  strokeWeight(5);
  stroke(0);

  //walls
  line(400, 100, 400, 200);
  line(500, 100, 500, 200);

  //ceiling floor
  line(400, 100, 500, 100);
  line(400, 200, 500, 200)

  //roof
  line(400, 100, 450, 30);
  line(500, 100, 450, 30);
}

function Dice()
{
  fill('white');
  square(550, 100, 100, 20);  

  fill('black');
  circle(575, 125, 15);
  circle(600, 150, 15);
  circle(625, 175, 15);
}

function MarioPixel()
{
  strokeWeight(0.3);
  stroke(255);  

  //layer01
  fill('black');
  square(marioX, marioY, 10);
  square(marioX + 10, marioY, 10);
  square(marioX + 20, marioY, 10);
  square(marioX + 30, marioY, 10);

  //layer02
  square(marioX - 20, marioY + 10, 10);
  square(marioX - 10, marioY + 10, 10);
  fill('red');
  square(marioX, marioY + 10, 10);
  square(marioX + 10, marioY + 10, 10);
  square(marioX + 20, marioY + 10, 10);
  fill('black');
  square(marioX + 30, marioY + 10, 10);
  square(marioX + 40, marioY + 10, 10);

  //layer03
  fill('black');
  square(marioX - 30, marioY + 20, 10);
  fill('red');
  square(marioX - 20, marioY + 20, 10);
  square(marioX - 10, marioY + 20, 10);
  square(marioX, marioY + 20, 10);
  square(marioX + 10, marioY + 20, 10);
  square(marioX + 20, marioY + 20, 10);
  square(marioX + 30, marioY + 20, 10);
  fill('black');
  square(marioX + 40, marioY + 20, 10);

  //layer04
  square(marioX - 40, marioY + 30, 10);
  fill('red');
  square(marioX - 30, marioY + 30, 10);
  square(marioX - 20, marioY + 30, 10);
  square(marioX - 10, marioY + 30, 10);
  square(marioX, marioY + 30, 10);
  fill('black');
  square(marioX + 10, marioY + 30, 10);
  square(marioX + 20, marioY + 30, 10);
  square(marioX + 30, marioY + 30, 10);
  square(marioX + 40, marioY + 30, 10);
  square(marioX + 50, marioY + 30, 10);

  //layer05
  fill('black')
  square(marioX - 50, marioY + 40, 10);
  fill('red');
  square(marioX - 40, marioY + 40, 10);
  square(marioX - 30, marioY + 40, 10);
  square(marioX - 20, marioY + 40, 10);
  fill('black')
  square(marioX - 10, marioY + 40, 10);
  square(marioX, marioY + 40, 10);
  square(marioX + 10, marioY + 40, 10);
  square(marioX + 20, marioY + 40, 10);
  square(marioX + 30, marioY + 40, 10);
  square(marioX + 40, marioY + 40, 10);
  square(marioX + 50, marioY + 40, 10);
  square(marioX + 60, marioY + 40, 10);

  //layer06
  fill('black');
  square(marioX - 50, marioY + 50, 10);
  square(marioX - 40, marioY + 50, 10);
  square(marioX - 30, marioY + 50, 10);
  square(marioX - 20, marioY + 50, 10);

  fill('#D9BB7B');
  square(marioX - 10, marioY + 50, 10);
  square(marioX, marioY + 50, 10);
  square(marioX + 10, marioY + 50, 10);
  square(marioX + 20, marioY + 50, 10);
  square(marioX + 30, marioY + 50, 10);
  square(marioX + 40, marioY + 50, 10);
  fill('black');
  square(marioX + 50, marioY + 50, 10);

  //layer07
  fill('black');
  square(marioX - 60, marioY + 60, 10);
  square(marioX - 50, marioY + 60, 10);
  square(marioX - 40, marioY + 60, 10);
  square(marioX - 30, marioY + 60, 10);
  fill('#D9BB7B');
  square(marioX - 20, marioY + 60, 10);
  square(marioX - 10, marioY + 60, 10);
  square(marioX, marioY + 60, 10);
  fill('black');
  square(marioX + 10, marioY + 60, 10);
  fill('#D9BB7B');
  square(marioX + 20, marioY + 60, 10);
  fill('black');
  square(marioX + 30, marioY + 60, 10);
  fill('#D9BB7B');
  square(marioX + 40, marioY + 60, 10);
  fill('black');
  square(marioX + 50, marioY + 60, 10);

  //layer08
  fill('black');
  square(marioX - 60, marioY + 70, 10);
  fill('#D9BB7B');
  square(marioX - 50, marioY + 70, 10);
  fill('black');
  square(marioX - 40, marioY + 70, 10);
  square(marioX - 30, marioY + 70, 10);
  fill('#D9BB7B');
  square(marioX - 20, marioY + 70, 10);
  square(marioX - 10, marioY + 70, 10);
  square(marioX, marioY + 70, 10);
  fill('black');
  square(marioX + 10, marioY + 70, 10);
  fill('#D9BB7B');
  square(marioX + 20, marioY + 70, 10);
  fill('black');
  square(marioX + 30, marioY + 70, 10);
  fill('#D9BB7B');
  square(marioX + 40, marioY + 70, 10);
  fill('black');
  square(marioX + 50, marioY + 70, 10);

  //layer09
  fill('black');
  square(marioX - 70, marioY + 80, 10);
  fill('#D9BB7B');
  square(marioX - 50, marioY + 80, 10);
  square(marioX - 60, marioY + 80, 10);
  fill('black');
  square(marioX - 40, marioY + 80, 10);
  square(marioX - 30, marioY + 80, 10);
  square(marioX - 20, marioY + 80, 10);
  fill('#D9BB7B');
  square(marioX - 10, marioY + 80, 10);
  square(marioX, marioY + 80, 10);
  square(marioX + 10, marioY + 80, 10);
  square(marioX + 20, marioY + 80, 10);
  square(marioX + 30, marioY + 80, 10);
  square(marioX + 40, marioY + 80, 10);
  square(marioX + 50, marioY + 80, 10);
  fill('black');
  square(marioX + 60, marioY + 80, 10);

  //layer10
  fill('black');
  square(marioX - 70, marioY + 90, 10);
  fill('#D9BB7B');
  square(marioX - 50, marioY + 90, 10);
  square(marioX - 60, marioY + 90, 10);
  square(marioX - 40, marioY + 90, 10);
  fill('black');
  square(marioX - 30, marioY + 90, 10);
  fill('#D9BB7B');
  square(marioX - 20, marioY + 90, 10);
  square(marioX - 10, marioY + 90, 10);
  fill('black');
  square(marioX, marioY + 90, 10);
  fill('#D9BB7B')
  square(marioX + 10, marioY + 90, 10);
  square(marioX + 20, marioY + 90, 10);
  square(marioX + 30, marioY + 90, 10);
  square(marioX + 40, marioY + 90, 10);
  square(marioX + 50, marioY + 90, 10);
  fill('black');
  square(marioX + 60, marioY + 90, 10);

  //layer11
  fill('black');
  square(marioX - 60, marioY + 100, 10);
  fill('#D9BB7B');
  square(marioX - 50, marioY + 100, 10);
  square(marioX - 40, marioY + 100, 10);
  square(marioX - 30, marioY + 100, 10);
  square(marioX - 20, marioY + 100, 10);
  fill('black');
  square(marioX - 10, marioY + 100, 10);
  square(marioX, marioY + 100, 10);
  square(marioX + 10, marioY + 100, 10);
  square(marioX + 20, marioY + 100, 10);
  fill('#D9BB7B');
  square(marioX + 30, marioY + 100, 10);
  square(marioX + 40, marioY + 100, 10);
  fill('black');
  square(marioX + 50, marioY + 100, 10);
  square(marioX + 60, marioY + 100, 10);

  //layer12
  fill('black');
  square(marioX - 50, marioY + 110, 10);
  square(marioX - 40, marioY + 110, 10);
  fill('#D9BB7B');
  square(marioX - 30, marioY + 110, 10);
  square(marioX - 20, marioY + 110, 10);
  square(marioX - 10, marioY + 110, 10);
  square(marioX, marioY + 110, 10);
  fill('black');
  square(marioX + 10, marioY + 110, 10);
  square(marioX + 20, marioY + 110, 10);
  square(marioX + 30, marioY + 110, 10);
  square(marioX + 40, marioY + 110, 10);
  fill('black');
  square(marioX + 50, marioY + 110, 10);

  //layer13
  fill('black');
  square(marioX - 40, marioY + 120, 10);
  square(marioX - 30, marioY + 120, 10);
  square(marioX - 20, marioY + 120, 10);
  fill('#D9BB7B');
  square(marioX - 10, marioY + 120, 10);
  square(marioX, marioY + 120, 10);
  square(marioX + 10, marioY + 120, 10);
  square(marioX + 20, marioY + 120, 10);
  square(marioX + 30, marioY + 120, 10);
  fill('black');
  square(marioX + 40, marioY + 120, 10);

  //layer14
  fill('black');
  square(marioX - 10, marioY + 130, 10);
  square(marioX, marioY + 130, 10);
  square(marioX + 10, marioY + 130, 10);
  square(marioX + 20, marioY + 130, 10);
  square(marioX + 30, marioY + 130, 10);
}

function keyPressed()
{
  if(keyCode == UP_ARROW)
  {
    if(up == false)
    {
      clear();
      marioY = 300;
      up = true;
    }
    else 
    {
      clear();
      marioY = 200;
      up = false;
    }
  }
}