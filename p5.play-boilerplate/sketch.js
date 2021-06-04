var f1,f2;



function setup()
{
  createCanvas(800,800);
  f1=createSprite(20,150,50,50)
  f2=createSprite(700,150,100,100);
  f1.debug=true;
  f2.debug=true;
  f1.velocityX=2;
  f2.velocityX=-2;
}  

function draw()
{
    background("skyblue");
    
  
    if(f2.x-f1.x<(f1.width+f2.width)/2
      &&f1.x-f2.x<(f1.width+f2.width)/2 &&
      f2.y-f1.y<(f1.height+f2.height)/2
      &&f1.y-f2.y<(f1.height+f2.height)/2)
      {
        f1.velocityX=-2
        f2.velocityX=2
      }
  else
    {
        f1.shapeColor="green"
        f2.shapeColor="green"
    }

    drawSprites();

}