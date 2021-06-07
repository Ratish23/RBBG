function preload(){
  WhiteSAk=loadImage("WhiteAkmStand.png");
  WhiteAk=loadImage("WhiteAkm.png");

  BlackSAk=loadImage("BlackAkmStand.png");
  BlackAk=loadImage("BlackAkm.png");

  WhiteSDp=loadImage("WhiteDpStand.png");
  WhiteDp=loadImage("WhiteDp28.png");

  BlackSDp=loadImage("BlackDpStand.png");
  BlackDp=loadImage("BlackDp28.png");

  Geo=loadImage("Georgopol.png");
  StartButton=loadImage("StartButton.png");

  RulesImg=loadImage("Rules.png");

  PlainBlue=loadImage("PlainBlue.jpg");

}

function setup() {
  createCanvas(1600,700);
  Sb=createSprite(1500,600);
  Sb.addImage(StartButton);
  Sb.scale=0.5

  Rule=createSprite(500,300);
  Rule.addImage(RulesImg);
  Rule.scale=0.8

  Geor=createSprite(650,500)
      Geor.addImage(Geo);
      Geor.scale=1
  Geor.visible=false;

  BlueImg=createSprite(650,500);
  BlueImg.addImage(PlainBlue);
  BlueImg.scale=1
  BlueImg.visible=false;
  
  }



function draw() {
  background("yellow");  
  if(mousePressedOver(Sb)){
    BlueImg.visible=true;
    
    }
  drawSprites();
}