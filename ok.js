int xPos, yPos, xDir, yDir;
color red, blu, gre , rpl, bpl , gpl;
function setup() {
  size(1000,900);
  xPos = 0;
  yPos = 100;
  xDir = 10;
  yDir = 10;
  red = 255;
  blu = 255;
  gre = 255;
  rpl = 5;
  gpl = 3;
  bpl = 10;
}

function draw() {
  background(255);
  noStroke();
  fill(red, gre, blu);
  ellipse(xPos , yPos , 50,50);
  xPos = xPos + xDir;
  yPos = yPos + yDir;
  red = red - rpl;
  gre = gre - gpl;
  blu = blu - bpl;
  
  if( xPos < 0) xDir = xDir * -1;
  if( yPos < 0) yDir = yDir * -1;
  if( xPos > 985) xDir = xDir * -1;
  if( yPos > 885) yDir = yDir * -1;
  if( xPos < 0) rpl = rpl*-1 ;
  if( xPos > 985) rpl = rpl*-1;
  if( xPos < 0) gpl = gpl*-1;
  if( xPos > 985) gpl = gpl*-1;
  if( yPos < 0) bpl = bpl*-1;
  if( yPos > 885) bpl = bpl*-1;
  }