import { ctx,canvas } from "."
import { re_render_screen } from "./init"

let max_effect = 3
let now_damage_counter:number = 0

const wait_time = async(time:number)=>{
    return new Promise(resolve =>setTimeout(resolve,time))
}

/////......ダメージ系のエフェクト......./////////
export const write_damage_effect = ():void=>{
    // console.log("test")
    ctx.fillStyle = `rgba(225,37,1,${now_damage_counter})`
    ctx.fillRect(0,0,canvas.width,canvas.height)
}
export const damage_animation = async()=>{
    now_damage_counter = 0
    while(now_damage_counter<0.3){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        re_render_screen("#FFD700")

        write_damage_effect()
        now_damage_counter+=0.02
        await wait_time(10)

        // now_damage_counter+=0.1
        // re_render_screen()
    }
    while(now_damage_counter>=0){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        re_render_screen("#FFD700")

        write_damage_effect()
        now_damage_counter-=0.02
        await wait_time(10)

        // now_damage_counter+=0.1
        // re_render_screen()
    }
    ctx.clearRect(0,0,canvas.width,canvas.height)
    now_damage_counter = 0
}
/////......ダメージ系のエフェクト......./////////
