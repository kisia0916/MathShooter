import { map } from "jquery"
import { box_size, map_data, map_objects, player_color, p_x, p_y } from "."

export const check_hit = (x:number,y:number):number=>{
    let flg = 0
    for (let i = 0;map_data.length>i;i++){
        let center_x:number = map_data[i].x+map_data[i].size_w/2
        let center_y:number = map_data[i].y+map_data[i].size_h/2
        let p_center_x:number = x+(box_size/2)
        let p_center_y:number = y+(box_size/2)
        if(Math.abs(center_x-p_center_x) < map_data[i].size_w/2 + box_size/2 && Math.abs(center_y-p_center_y) < map_data[i].size_h/2 + box_size/2){
            // player_color.c = "red"
            flg = 1
        }
    }
    if(flg == 0){
        // player_color.c = "white"
    }
    return flg
}

export const get_miniMap_data = ():map_objects[]=>{
    let return_list:map_objects[] = []
    for(let i = 0;map_data.length>i;i++){
        if(map_data[i].x>p_x.p-1100 && map_data[i].x<p_x.p+1100 && map_data[i].y>p_y.p-1100 && map_data[i].y<p_y.p+1100){
            // console.log(map_data[i])
            return_list.push(map_data[i])
        }
    }
    return return_list
}
export const shoot_amo = ():void=>{
    
}