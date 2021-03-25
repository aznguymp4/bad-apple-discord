/*
* Play bad apple in the console
* (> node conP)
*/

const fps = 60
const f = require('./frames.json')
var i = 0

const frames = f.map(ff => {
    var a = ff.replace(/(.{8})/g, "$1\n")
    a=a.replace(/1/g, '⬜')
    return a.replace(/0/g, '⬛')
})

setInterval(()=>{
    console.log(frames[i])
    i++
},1/fps)