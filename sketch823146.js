setup=_=>{
  Count=0;
  ChrSize=25;
  textAlign(CENTER,CENTER);
  rectMode(CENTER);
}
draw=_=>{
  createCanvas(windowWidth,windowHeight);
  Count+=2e-4;
  mx=mouseX;
  my=mouseY;
  mxp=mx*1e-2;
  myp=my*1e-2;  

//entire screen
  textSize(ChrSize);
  for(y=0;y<height/ChrSize;y++){
    for(x=0;x<width/ChrSize;x++){
      n=int(noise(x*.005+mxp,y*.005+myp,Count)*654);
      n<574? n=n+127744 : n=n+127938;
      text(String.fromCodePoint(n),x*ChrSize+ChrSize/2,y*ChrSize+ChrSize/2);
    }
  }

//cursor position
  x=int(mx/ChrSize);
  y=int(my/ChrSize);
  n=int(noise(x*.005+mxp,y*.005+myp,Count)*654);
  n<574? n=n+127744 : n=n+127938;
  textSize(ChrSize*4);
  text(String.fromCodePoint(n),x*ChrSize+ChrSize/2,y*ChrSize+ChrSize/2);
// show code number
  rect(x*ChrSize+ChrSize/2,y*ChrSize+ChrSize*3.3,ChrSize*4,ChrSize);
  textSize(ChrSize*0.9);
  text(n,x*ChrSize+ChrSize/2,y*ChrSize+ChrSize*3.3);
}