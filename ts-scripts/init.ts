import { render_back, write_box, write_player } from "./write_object"
import { ctx,other_players, box_size, canvas, box_number, map_data, screen_max_w,screen_max_h, p_x_screen,p_y_screen, field_w, speed } from "."
import { p_x,p_y} from "./index";
import { check_hit } from "./algos";

export const write_screen_flame = ():void=>{

}

type stage_border_type = {
    x:number,
    y:number,
    size_w:number,
    size_h:number,
    color:string,
    type:number
    debug?:number
}

export const border_data:stage_border_type[] = [
    {x:0,y:300,size_w:5,size_h:300,color:"orange",type:2,debug:1}
]  
export const set_border = ()=>{
    for (let i = 0;100>i;i++){
        let push_data:stage_border_type = {x:i*65,y:0,size_w:0.1,size_h:6000,color:"white",type:1}
        border_data.push(push_data)
        console.log(border_data)

    }
    for (let i = 0;100>i;i++){
        let push_data:stage_border_type = {x:0,y:i*65,size_w:0.1,size_h:6000,color:"white",type:2}
        border_data.push(push_data)
        console.log(border_data)

    }
}
set_border()

export let up_push:boolean = false;
export let down_push:boolean = false;
export let left_push:boolean = false;
export let right_push:boolean = false;
document.addEventListener('keydown', (event) => {
    if(event.key == "w"){
        up_push = true;
    }
    if(event.key == "s"){
        down_push = true;
    }
    if(event.key == "a"){
        left_push = true;
    }
    if(event.key == "d"){
        right_push = true;
    }

});
//keyが離されたなら
document.addEventListener('keyup', (event) => {
    if(event.key == "w"){
        up_push = false;
    }
    if(event.key == "s"){
        down_push = false;
    }
    if(event.key == "a"){
        left_push = false;
    }
    if(event.key == "d"){
        right_push = false;
    }

});
const hit_wal = (x:number,y:number):number=>{
    let flg = check_hit(x,y)
    console.log(flg)
    return flg
}
export const get_key_event = ():void=>{
    let co = 0


    if(up_push){
        
            if(co == 1){
                if(check_hit(p_x.p,p_y.p-Math.floor(speed/2)) == 0){
                    p_y.p -= Math.floor(speed/2)
                }
            }else{
                if(check_hit(p_x.p,p_y.p-speed) == 0){
                    p_y.p -= speed
                    co = 1
                }
            }
        //上キーが押された時の処理

    }
    if(down_push){
        //下キーが押された時の処理
        if(co == 1){
            if(check_hit(p_x.p,p_y.p+Math.floor(speed/2)) == 0){
                p_y.p += Math.floor(speed/2)
            }
        }else{
            console.log("a")
            if(check_hit(p_x.p,p_y.p+speed) == 0){
                p_y.p += speed
                co = 1
            }
        }
    }
    if(left_push){
        //左キーが押された時の処理
        if(co == 1){
            if(check_hit(p_x.p-Math.floor(speed/2),p_y.p) == 0){
                p_x.p -= Math.floor(speed/2)
            }
        }else{
            if(check_hit(p_x.p-speed,p_y.p) == 0){
                p_x.p -= speed
                co = 1
            }
        }
    }
    if(right_push){
        //右キーが押された時の処理
        if(co == 1){
            if(check_hit(p_x.p+Math.floor(speed/2),p_y.p) == 0){
                p_x.p += Math.floor(speed/2)
            }
        }else{
            if(check_hit(p_x.p+speed/2,p_y.p) == 0){
                p_x.p += speed
                co = 1
            }
        }
    }
    }



export const first_render = (box_color:string):void=>{

    write_screen_flame()

}
export const re_render_screen = ():void=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    write_screen_flame()
    render_other_player()
    write_player(ctx,p_x.p,p_y.p,box_size,box_size,15,"#FFD700","",box_number)

}
export const set_next_field = (box_color:string):void=>{
    write_screen_flame()
}

export const render_other_player = ()=>{
    for (let i = 0;other_players.length>i;i++){
        if(other_players[i].state == 1){
            let x = other_players[i].x
            let y = other_players[i].y
            let num = other_players[i].num
            let color = other_players[i].color
            let state = other_players[i].state

            write_player(ctx,x,y,box_size,box_size,15,color,num.toString(),30)
        }
    }
}
export const render_objects = ()=>{
    let now_x_center:number = p_x.p+Math.floor(box_size/2)
    let now_y_center:number = p_y.p+Math.floor(box_size/2)
    
    for (let i = 0;map_data.length>i;i++){
        if(map_data[i].x+map_data[i].size_w>=now_x_center-(screen_max_w/2)-map_data[i].size_w*2  && map_data[i].x+map_data[i].size_w<=now_x_center+(screen_max_w/2)+map_data[i].size_w*2 && map_data[i].y + map_data[i].size_h>=now_y_center-(screen_max_h/2)-map_data[i].size_h*2 && map_data[i].y + map_data[i].size_h<=now_y_center+(screen_max_h/2)+map_data[i].size_h*2){
            let obj_x:number = p_x_screen -(p_x.p - map_data[i].x) 
            let obj_y:number = p_y_screen -(p_y.p - map_data[i].y) 
            if(map_data[i].render_type == 1){
                    // console.log(obj_x,obj_y)
                    write_box(ctx,obj_x,obj_y,map_data[i].size_w,map_data[i].size_h,15,"#A9A9A9","",30,"#696969")
            }else if (map_data[i].render_type == 2){
                    // console.log("ff",map_data[i].render_type)
                    // render_back(ctx,obj_x,obj_y,map_data[i].size_w,map_data[i].size_h,"white",1)
            }

            }
        }
    }
export const render_border = ():void =>{
    let now_x_center:number = p_x.p+Math.floor(box_size/2)
    let now_y_center:number = p_y.p+Math.floor(box_size/2)
    
    for (let i = 0;border_data.length>i;i++){
        if(border_data[i].type == 1){
            if(border_data[i].x+border_data[i].size_w>=now_x_center-(screen_max_w/2)-border_data[i].size_w-30  && border_data[i].x+border_data[i].size_w<=now_x_center+(screen_max_w/2)+border_data[i].size_w+35 && border_data[i].y + border_data[i].size_h>=now_y_center-(screen_max_h/2)-border_data[i].size_h*2 && border_data[i].y + border_data[i].size_h<=now_y_center+(screen_max_h/2)+border_data[i].size_h*2){
                let obj_x:number = p_x_screen -(p_x.p - border_data[i].x) 
                let obj_y:number = p_y_screen -(p_y.p - border_data[i].y) 
                // console.log("ff",border_data[i].render_type)
                render_back(ctx,obj_x,obj_y,border_data[i].size_w,border_data[i].size_h,border_data[i].color,border_data[i].type)

            }
        }else if(border_data[i].type == 2){
            if(border_data[i].x+border_data[i].size_h>=now_x_center-(screen_max_w/2)-border_data[i].size_h*2  && border_data[i].x+border_data[i].size_h<=now_x_center+(screen_max_w/2)+border_data[i].size_h+35 && border_data[i].y + border_data[i].size_w>=now_y_center-(screen_max_h/2)-border_data[i].size_w*2 && border_data[i].y + border_data[i].size_w<=now_y_center+(screen_max_h/2)+border_data[i].size_w*2){
                let obj_x:number = p_x_screen -(p_x.p - border_data[i].x) 
                let obj_y:number = p_y_screen -(p_y.p - border_data[i].y) 
                // console.log("ff",border_data[i].render_type)
                render_back(ctx,obj_x,obj_y,border_data[i].size_w,border_data[i].size_h,border_data[i].color,border_data[i].type)
                if(border_data[i].debug == 1){
                    console.log("a")
                }
            }
        }
    }
}
// export const write_box_main = (num:number,color:string):void=>{
//     write_box(ctx,stage_data[i][0],stage_data[i][1],box_size,box_size,15,box_color,40,30)
// }