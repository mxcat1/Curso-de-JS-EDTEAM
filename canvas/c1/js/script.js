let canvas=document.getElementById("canvas1");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let c =canvas.getContext('2d');
c.fillStyle="rgba(255,0,0,0.5)";
c.fillRect(100,150,100,100);


c.beginPath();
c.moveTo(0,0);
c.lineTo(100,150);
c.lineTo(150,100);
c.lineTo(200,300);
c.strokeStyle="#fa34a3";
c.stroke();

for (let i=10;i<21;i=i+10){
    // let x=(Math.random()*window.innerWidth)-40;
    // let y = (Math.random()*window.innerHeight)-40;
    console.log(i);
    c.beginPath();
        c.arc(400,400,i,0,Math.PI *2,false);
    c.strokeStyle="blue";
    c.stroke();
}
