import { damage_animation } from "./effect"

export let canvas = document.querySelector<HTMLCanvasElement>("#canvas")!
export let ctx = canvas.getContext("2d")!

export const box_size:number = 70



damage_animation()

