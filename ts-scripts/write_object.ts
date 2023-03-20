
import { ctx, field_w,field_y,screen_max_h,screen_max_w } from ".";

export const write_box = (ctx:any,x:number,y:number,w:number,h:number,r:number,color:string,num:string,text_size:number,stroke_color?:string,stroke_width?:number):void=>{
    ctx.beginPath();
    ctx.lineWidth = 1;
    if(!stroke_color){
        ctx.strokeStyle = color;
    }else{
        ctx.strokeStyle =stroke_color;
        ctx.lineWidth = stroke_width
    }
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
export const write_backpack = (ctx:any,x:number,y:number,w:number,h:number,r:number,color:string,num:string,text_size:number,stroke_color?:string,stroke_width?:number):void=>{
    ctx.beginPath();
    ctx.lineWidth = 1;
    if(!stroke_color){
        ctx.strokeStyle = color;
    }else{
        ctx.strokeStyle =stroke_color;
        ctx.lineWidth = stroke_width
    }
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
    ctx.fillStyle = "#414141";
    ctx.font = `bolder ${text_size}px Osaka-Mono`
    if (num.toString().length == 2){
        ctx.lineWidth =1
        ctx.fillText(`${num}`, x+10, y+45);
    }else if (num.toString().length == 1){
        ctx.lineWidth =1

        ctx.fillText(`${num}`, x+15, y+58);
    }
    ctx.lineWidth =4

    ctx.stroke()
}

export const write_backpack_cerect = (ctx:any,x:number,y:number,w:number,h:number,r:number,color:string,stroke_color?:string,stroke_width?:number):void=>{
    ctx.beginPath();
    ctx.lineWidth = 1;
    if(!stroke_color){
        ctx.strokeStyle = color;
    }else{
        ctx.strokeStyle =stroke_color;
        ctx.lineWidth = stroke_width
    }
    ctx.fillStyle = color;
    ctx.moveTo(x,y + r);  //←①
    ctx.arc(x+r,y+h-r,r,Math.PI,Math.PI*0.5,true);  //←②
    ctx.arc(x+w-r,y+h-r,r,Math.PI*0.5,0,true);  //←③
    ctx.arc(x+w-r,y+r,r,0,Math.PI*1.5,true);  //←④
    ctx.arc(x+r,y+r,r,Math.PI*1.5,Math.PI,true);  //←⑤
    ctx.closePath();  //←⑥
    ctx.stroke();  //←⑦
    // ctx.fill();  //←⑧
    ctx.lineWidth = 2;
    // ctx.fillStyle = "#414141";
    ctx.lineWidth =4

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
ctx.font = `bold ${text_size}px Osaka-Mono`
if (num.toString().length == 2){
    ctx.fillText(`${num}`, x+13, y+65);

    // ctx.stroke()
}else if (num.toString().length == 1){
    ctx.fillText(`${num}`, x+29, y+65);
    
    // ctx.stroke()

}
ctx.stroke()
}

export const write_player = (ctx:any,x:number,y:number,w:number,h:number,r:number,color:string,num:string,text_size:number):void=>{
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
        ctx.fillText(`${num}`, x+12, y+42);
    }else if (num.toString().length == 1){
        ctx.fillText(`${num}`, x+23, y+42);
    }
    ctx.stroke()
}
export const render_back = (ctx:any,x:number,y:number,w:number,h:number,color:string,type:number):void=>{
    if(type == 1){
        ctx.beginPath();
        ctx.moveTo(x, y);          // 始点に移動
        ctx.lineTo(x, y+h);        // 終点
        ctx.strokeStyle = color;  // 線の色
        ctx.lineWidth = w;           // 線の太さ
        ctx.stroke()
    }else if(type == 2){
        ctx.beginPath();
        ctx.moveTo(x, y);          // 始点に移動
        ctx.lineTo(x+h, y);        // 終点
        ctx.strokeStyle = color;  // 線の色
        ctx.lineWidth = w;           // 線の太さ
        ctx.stroke()
        
    }

    let write_num_w:number = w/60
    let write_num_h:number = h/60
    let co:number = 0


}
export const back_pack_cerect = (cerect_num:number):void=>{
    write_backpack_cerect(ctx,(screen_max_w+1100)/2-(230-95*cerect_num),screen_max_h-77,80,80,6,"","white",5)
}
export const render_main_num = (num:string):void=>{
    ctx.lineWidth = 2;
    ctx.fillStyle = "white"
    ctx.font = "250px arial"
    ctx.fillText(`${num}`,90,235)
    // ctx.stroke()
}
export const render_map_data = (x:number,y:number,color:string):void=>{
    ctx.arc(screen_max_w-200+x, 17+y, 8, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fillStyle = "red" ;
    ctx.fill() ;
}