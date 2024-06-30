import { new_oklab, new_rgb, oklab_to_rgb, range } from 'oklab.ts'

const { random, floor, min, max, sqrt, pow, exp, E, log } = Math
const win = window as any

const R = 0
const G = 1
const B = 2
const A = 3

const canvas = win.main as HTMLCanvasElement
const rect = canvas.getBoundingClientRect()

const scale = 1
const w = floor(rect.width / scale)
const h = floor(rect.height / scale)
const n = w * h

canvas.width = w
canvas.height = h

const context = canvas.getContext('2d')!
const imageData = context.getImageData(0, 0, w, h)
const data = imageData.data
const len = w * h * 4

for (let i = 0; i < len; i += 4) {
  data[i + R] = 0
  data[i + G] = 0
  data[i + B] = 0
  data[i + A] = 255
}

let x = Math.floor(w / 2)
let y = Math.floor(h / 2)

let oklab = new_oklab()
oklab.L = range.L.max
oklab.a = range.a.min + Math.random() * range.a.range
oklab.b = range.b.min + Math.random() * range.b.range

let rgb = new_rgb()

let t = 0

function tick() {
  // TODO write your logic here

  t++

  x += Math.floor(Math.random() * 3) - 1
  x = (x + w) % w

  y += Math.floor(Math.random() * 3) - 1
  y = (y + h) % h

  let step = 1000
  oklab.L = Math.min(
    range.L.max,
    Math.max(
      range.L.min + range.L.range / 2,
      oklab.L + ((Math.random() * 2 - 1) * range.L.range) / step,
    ),
  )
  oklab.a = Math.min(
    range.a.max,
    Math.max(
      range.a.min,
      oklab.a + ((Math.random() * 2 - 1) * range.a.range) / step,
    ),
  )
  oklab.b = Math.min(
    range.b.max,
    Math.max(
      range.b.min,
      oklab.b + ((Math.random() * 2 - 1) * range.b.range) / step,
    ),
  )

  oklab_to_rgb(oklab, rgb)

  let offset = (y * w + x) * 4
  data[offset + 0] = rgb.r
  data[offset + 1] = rgb.g
  data[offset + 2] = rgb.b
}

const batch = sqrt(w * h)

function loop() {
  for (let i = 0; i < batch; i++) {
    tick()
  }
  context.putImageData(imageData, 0, 0)
  requestAnimationFrame(loop)
}
requestAnimationFrame(loop)

Object.assign(win, {
  canvas,
  context,
  imageData,
  loop,
  data,
  w,
  h,
  n,
  len,
})
