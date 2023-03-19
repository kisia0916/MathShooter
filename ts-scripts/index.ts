
import { damage_animation } from "./effect"
import {  get_key_event, render_objects,render_border  } from "./init"
import { back_pack_cerect, write_player } from "./write_object"
import { up_push,down_push,left_push,right_push } from "./init"
import { check_hit } from "./algos"
import { write_ui } from "./userInterface"
// import { map_data_local } from "./maps"
export let canvas = document.querySelector<HTMLCanvasElement>("#canvas")!

export let ctx = canvas.getContext("2d")!




type players_ogbect = {
    x:number,
    y:number,
    num:number,
    color:string,
    state:number
}
export type map_objects = {
    x:number,
    y:number,
    size_w:number,
    size_h:number,
    render_type:number
}
type postion = {
    p:number
}
export const field_w:number = 6000
export const field_y:number = 4000
export const screen_max_w:number = 1734
export const screen_max_h:number =1134


export let map_data:map_objects[]  =[
    // {x:0,y:0,size_w:6000,size_h:4000,render_type:2},
    
    
    {x:0,y:0,size_w:60,size_h:60,render_type:1},
    // {x:2950,y:1850,size_w:5,size_h:300,render_type:2},

    {x:3000,y:1900,size_w:60,size_h:60,render_type:1},
    {x:3065,y:1900,size_w:60,size_h:60,render_type:1},
    {x:3130,y:1900,size_w:60,size_h:60,render_type:1},
    {x:3195,y:1900,size_w:60,size_h:60,render_type:1},
    {x:3260,y:1900,size_w:60,size_h:60,render_type:1},
    {x:3325,y:1900,size_w:60,size_h:60,render_type:1},
    {x:3390,y:1900,size_w:60,size_h:60,render_type:1},

    {x:3000,y:1835,size_w:60,size_h:60,render_type:1},
    {x:3000,y:1770,size_w:60,size_h:60,render_type:1},
    {x:3000,y:1705,size_w:60,size_h:60,render_type:1},
    {x:3000,y:1640,size_w:60,size_h:60,render_type:1},
    {x:3000,y:1575,size_w:60,size_h:60,render_type:1},
    {x:3000,y:1510,size_w:60,size_h:60,render_type:1},



    {x:3585,y:1900,size_w:60,size_h:60,render_type:1},


    // {x:3455,y:1900,size_w:30,size_h:30},
]

export const box_size:number = 64
export let p_x:postion = {p:3000}
export let p_y:postion = {p:2000}
export let p_x_screen:number = screen_max_w /2
export let p_y_screen:number = screen_max_h /2
export let box_number:number = 40
export let speed:number = 8
export let player_color = {c:"white"}
export let cerect_back = {p:0}
export let other_players:players_ogbect[] = []//{x,y,num,color,status}

// write_player(ctx,-10,p_y_screen,box_size,box_size,15,"#FFD700",43,30)

const main = ():void=>{
    write_player(ctx,p_x_screen,p_y_screen,box_size,box_size,15,"#FFD700","",30)

    window.requestAnimationFrame(main_loop)
}

const main_loop = ():void=>{
    // damage_animation()
    ctx.clearRect(0,0,canvas.width,canvas.height)

    render_border()
    get_key_event()
    render_objects()
    render_objects()
    write_ui(ctx)
    back_pack_cerect(cerect_back.p)
    // damage_animation()
    // console.log(p_x,p_y)
    write_player(ctx,p_x_screen,p_y_screen,box_size,box_size,15,player_color.c,"",30)

    window.requestAnimationFrame(main_loop)
}

main()
// setInterval(main_loop,0.5)

