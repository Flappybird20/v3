var canvas = document.getElementById ("canvas")
var ctx = canvas.getContext("2d")



let gap = 220
cons = gap + 150

let bX = 10
let bY = 180
let gravity = 1

var bird = new Image();
var back = new Image();
var ground =new Image();
var top1 = new Image();
var bottom =new Image();

bird.src = "images/bird.png"
back.src = "images/bg.png"
ground.src = "images/fg.png"
top1.src = "images/pipeNorth.png"
bottom.src = "images/pipeSouth.png"

function jump() {
    bY -= 40
    let audio =new Audio("images/jump.mp3")
    audio.play()
}

let pipe = []
pipe [0] = {
    x : canvas.width,
    y : 0
}

addEventListener('keydown', jump1=>{
    if (event.key == "ArrowUp") {
        jump()
    }
})

function draw() {

    
    ctx.drawImage (back,0,0)

    for (let i = 0; i < pipe.length; i++) {
        pipe[i].x--;
       
        
    ctx.drawImage (top1,pipe[i].x,pipe[i].y)
    ctx.drawImage (bottom,pipe[i].x,pipe[i].y+cons)
   
        if (pipe[i].x==150) {
            pipe.push({
                x : canvas.width,
                y : Math.floor(Math.random()*52)-52
            })
        }
        if (
            (bX + bird.width >= pipe[i].x && bX <= pipe[i].x + top1.width) &&
            (bY <= pipe[i].y + top1.height || bY + bird.height >= pipe[i].y + cons)
        ) {
        location.reload(); 
        text1.style.display = "flex"
        } else if (bX +bird.width > pipe[i].x){
            document.getElementById ("score").innerText = "score:" + " " + i
            
        }
        } 
        
    
  
        


    
  
    ctx.drawImage (ground,0,canvas.height-ground.height)
    ctx.drawImage (bird, bX,bY)
    bY += gravity
    if (bY<10) {
        bY=10
    } else if (bY>350){
        bY = 350
    }

    requestAnimationFrame (draw)
}

document.addEventListener('keydown', startgame=>{
    
    if (event.key == "Enter") {
        draw()
        let text = document.getElementById ("text1")
        text1.style.display = "none"
    }
    
    
})

