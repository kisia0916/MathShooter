export const write_box = (ctx:any,x:number,y:number,w:number,h:number,r:number,color:string,num:number,text_size:number):void=>{
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.moveTo(x,y + r);  //←①
    ctx.arc(x+r,y+h-r,r,Math.PI,Math.PI*0.5,true);  //←②
    ctx.arc(x+w-r,y+h-r,r,Math.PI*0.5,0,true);  //←③
    ctx.arc(x+w-r,y+r,r,0,Math.PI*1.5,true);  //←④
    ctx.arc(x+r,y+r,r,Math.PI*1.5,Math.PI,true);  //←⑤
    ctx.closePath();  //←⑥
    ctx.stroke();  //←⑦
    ctx.fill();  //←⑧
    ctx.lineWidth = 2;
    ctx.fillStyle = "#2e2e2e";
    ctx.font = `${text_size}px Osaka-Mono`
    if (num.toString().length == 2){
        ctx.fillText(`${num}`, x+16, y+45);
    }else if (num.toString().length == 1){
        ctx.fillText(`${num}`, x+26, y+45);
    }
    ctx.stroke()
}

export const write_box2 = (ctx:any,x:number,y:number,w:number,h:number,r:number,color:string,num:number,text_size:number):void=>{
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = color;
ctx.fillStyle = color;
ctx.moveTo(x,y + r);  //←①
ctx.arc(x+r,y+h-r,r,Math.PI,Math.PI*0.5,true);  //←②
ctx.arc(x+w-r,y+h-r,r,Math.PI*0.5,0,true);  //←③
ctx.arc(x+w-r,y+r,r,0,Math.PI*1.5,true);  //←④
ctx.arc(x+r,y+r,r,Math.PI*1.5,Math.PI,true);  //←⑤
ctx.closePath();  //←⑥
ctx.stroke();  //←⑦
ctx.fill();  //←⑧
ctx.lineWidth = 2;
ctx.fillStyle = "#2e2e2e";
ctx.font = `${text_size}px Osaka-Mono`
if (num.toString().length == 2){
    ctx.fillText(`${num}`, x+13, y+65);
}else if (num.toString().length == 1){
    ctx.fillText(`${num}`, x+29, y+65);
}
ctx.stroke()
}