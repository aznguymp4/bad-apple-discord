const fs = require('fs')
const path = require('path')

const total = []

fs.readdir(path.join(__dirname, "/video"), (err, frames) => {
    frames.map((frame,i) => {
        var {Image,createCanvas} = require('canvas')
        var can = createCanvas(8,8)
        var ctx = can.getContext('2d')
        var img = new Image()
        img.onload=()=>{
            ctx.drawImage(img,0,0,8,8)
            var data = Object.values(ctx.getImageData(0,0,8,8).data)
            var nDat = []
            for (let i = 0; i<data.length/4; i++) {
                //nDat.push(data[i*4] + data[(i*4)+1] + data[(i*4)+2])
                nDat.push(data[i*4] + data[(i*4)+1] + data[(i*4)+2] < 382?1:0)
            }
            total.push(nDat.join(''))
            console.log(`DONE: Frame ${i}`)
        }
        img.src = `./video/${frame}`
    })
})

setTimeout(()=>{
    fs.writeFile(path.join(__dirname, "/frames.json"), JSON.stringify(total,null,1), (err) => {})
}, 1000)