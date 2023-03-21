import { main_num, screen_max_h, screen_max_w } from ".";
import { render_back, render_main_num, write_backpack, write_box } from "./write_object";

export const write_ui = (ctx:any):void=>{
    ///HP
    ctx.lineWidth = 1;
    ctx.fillStyle = "white";

    ctx.font = "100px arial black";
    ctx.fillText("100", 80, screen_max_h-0);
    //ミニマップ
    write_box(ctx,screen_max_w-200,17,250,250,10,"rgba(255,255,255,0.3)","",12,"rgb(160,160,160)")
    // write_box(ctx,15,15,60,60,10,"white","",12)
    ctx.beginPath(); // パスの初期化
    ctx.fillStyle = "red"
    ctx.arc(screen_max_w-200+125, 17+125, 4, 0, 2 * Math.PI); // (100, 50)の位置に半径30pxの円
    ctx.closePath(); // パスを閉じる
    ctx.fill(); // 軌

    // render_back(ctx,screen_max_w+200,15,200,200,"white",1)
    //持ち物バー
    write_backpack(ctx,(screen_max_w+1100)/2-253,screen_max_h-86,600,100,10,"rgba(169,169,169,0.6)","",30,"rgb(169,169,169)")

    write_backpack(ctx,(screen_max_w+1100)/2-230,screen_max_h-77,80,80,8,"#DCDCDC","+",60,"#5E5E5E",5)
    write_backpack(ctx,(screen_max_w+1100)/2-135,screen_max_h-77,80,80,8,"#DCDCDC","−",60,"#5E5E5E",5)
    write_backpack(ctx,(screen_max_w+1100)/2-40,screen_max_h-77,80,80,8,"#DCDCDC","×",60,"#5E5E5E",5)
    write_backpack(ctx,(screen_max_w+1100)/2+55,screen_max_h-77,80,80,8,"#DCDCDC","÷",60,"#5E5E5E",5)
    write_backpack(ctx,(screen_max_w+1100)/2+150,screen_max_h-77,80,80,8,"#DCDCDC","",30,"#5E5E5E",5)

    write_backpack(ctx,(screen_max_w+1100)/2+245,screen_max_h-77,80,80,8,"#DCDCDC","",30,"#5E5E5E",5)
    render_main_num(main_num.n.toString())



}
