const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];
let adjustX = canvas.width / 200;
let adjustY = canvas.height / 200;

// get mouse mouse position //
let mouse = {
    x: null,
    y: null,
    radius: 150
}
window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x + canvas.clientLeft / 2;
        mouse.y = event.y + canvas.clientTop / 2;
    });

ctx.font = 'bold 20px Verdana';
ctx.fillText('SPRING', 0, 40);
const data = ctx.getImageData(0, 0, canvas.width, 100);
const sprite = new Image();
sprite.src = 'https://i.ibb.co/DGqfJpG/butterflies-and-flowers.png';
class Particle {
    constructor(x, y) {
        this.x = x + 200,
            this.y = y - 100,
            this.size = 3,
            this.baseX = this.x,
            this.baseY = this.y,
            this.density = ((Math.random() * 30) + 1);
        this.random = Math.random();
        this.spriteSize = Math.random() * 50 + 50;
        this.frameX = Math.floor(Math.random() * 3);
        this.frameY = Math.floor(Math.random() * 8);
        this.angle = Math.random() * 2;

    }
    draw() {
        if (this.random > 0.05) {
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
        else {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.drawImage(sprite, this.frameX * 213.3, this.frameY * 213.3, 213.3, 213.3, 0 - this.spriteSize / 2, 0 - this.spriteSize / 2, this.spriteSize, this.spriteSize);
            ctx.restore();
        }

    }
    update() {
        // check mouse position/particle position - collision detection
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        // distance past which the force is zero
        var maxDistance = mouse.radius;
        // convert (0...maxDistance) range into a (1...0).
        // Close is near 1, far is near 0
        // for example:
        //   250 => 0.75
        //   100 => 0.9
        //   10  => 0.99
        var force = (maxDistance - distance) / maxDistance;

        // if we went below zero, set it to zero.
        if (force < 0) force = 0;

        let directionX = (forceDirectionX * force * this.density)
        let directionY = (forceDirectionY * force * this.density);

        if (distance < mouse.radius + this.size) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 10;
            } if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 10;
            }
        }
    }
}
function init() {
    particleArray = [];

    for (var y = 0, y2 = data.height; y < y2; y++) {
        for (var x = 0, x2 = data.width; x < x2; x++) {
            if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
                let positionX = x + adjustX;
                let positionY = y + adjustY;
                //let positionX = x;
                //let positionY = y;
                particleArray.push(new Particle(positionX * 15, positionY * 15));
            }
        }
    }

}
function animate() {
    //ctx.fillStyle = 'rgba(0,0,0,0.5)';
    //ctx.fillRect(0,0,innerWidth,innerHeight);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    connect();
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
    }

    requestAnimationFrame(animate);
}
init();
animate();

// RESIZE SETTING - empty and refill particle array every time window changes size + change canvas size
window.addEventListener('resize',
    function () {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        adjustX = -60 + canvas.width / 30;
        adjustY = -32 + canvas.height / 30;
        init();
    });


function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
            let distance = ((particleArray[a].x - particleArray[b].x) * (particleArray[a].x - particleArray[b].x))
                + ((particleArray[a].y - particleArray[b].y) * (particleArray[a].y - particleArray[b].y));

            if (distance < 2600) {
                opacityValue = 1 - (distance / 2600);
                let dx = mouse.x - particleArray[a].x;
                let dy = mouse.y - particleArray[a].y;
                let mouseDistance = Math.sqrt(dx * dx + dy * dy);
                if (mouseDistance < mouse.radius / 2) {
                    ctx.strokeStyle = 'rgba(255,255,0,' + opacityValue + ')';
                } else if (mouseDistance < mouse.radius - 50) {
                    ctx.strokeStyle = 'rgba(255,255,140,' + opacityValue + ')';
                } else if (mouseDistance < mouse.radius + 20) {
                    ctx.strokeStyle = 'rgba(255,255,210,' + opacityValue + ')';
                } else {
                    ctx.strokeStyle = 'rgba(255,255,255,' + opacityValue + ')';
                }
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particleArray[a].x, particleArray[a].y);
                ctx.lineTo(particleArray[b].x, particleArray[b].y);
                ctx.stroke();
            }
        }

    }
}
