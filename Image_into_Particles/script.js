const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];


// get mouse mouse position ///////////////////////////////
let mouse = {
    x: null,
    y: null,
    radius: 80
}
window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x + canvas.clientLeft / 2;
        mouse.y = event.y + canvas.clientTop / 2;
    });

function drawImage() {
    let imageWidth = png.width || png.naturalWidth;
    let imageHeight = png.height || png.naturalHeight;
    const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    class Particle {
        constructor(x, y, color, size) {
            this.x = x + canvas.width / 2 - png.width * 2,
                this.y = y + canvas.height / 2 - png.height * 2,
                this.color = color,
                this.size = 2,
                this.baseX = x + canvas.width / 2 - png.width * 2,
                this.baseY = y + canvas.height / 2 - png.height * 2,
                this.density = ((Math.random() * 10) + 2);
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
        update() {
            ctx.fillStyle = this.color;
            // check mouse position/particle position - collision detection
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            // distance past which the force is zero
            var maxDistance = 80;
            var force = (maxDistance - distance) / maxDistance;

            // if we go below zero, set it to zero.
            if (force < 0) force = 0;

            let directionX = (forceDirectionX * force * this.density) * 0.9;
            let directionY = (forceDirectionY * force * this.density) * 0.9;

            if (distance < mouse.radius + this.size) {
                this.x -= directionX;
                this.y -= directionY;
            } else {
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    let dy = this.y - this.baseY;
                    this.x -= dx / 5;
                } if (this.y !== this.baseY) {
                    let dx = this.x - this.baseX;
                    let dy = this.y - this.baseY;
                    this.y -= dy / 5;
                }
            }
            this.draw();
        }
    }
    function init() {
        particleArray = [];

        for (var y = 0, y2 = data.height; y < y2; y++) {
            for (var x = 0, x2 = data.width; x < x2; x++) {
                if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
                    let positionX = x;
                    let positionY = y;
                    let color = "rgb(" + data.data[(y * 4 * data.width) + (x * 4)] + "," + data.data[(y * 4 * data.width) + (x * 4) + 1] + "," + data.data[(y * 4 * data.width) + (x * 4) + 2] + ")";

                    particleArray.push(new Particle(positionX * 4, positionY * 4, color));

                }
            }
        }

    }
    function animate() {
        requestAnimationFrame(animate);
        ctx.fillStyle = 'rgba(255,255,255,.2)';
        ctx.fillRect(0, 0, innerWidth, innerHeight);
        // ctx.clearRect(0,0,innerWidth,innerHeight);


        for (let i = 0; i < particleArray.length; i++) {
            particleArray[i].update();
        }
    }
    init();
    animate();

    // RESIZE SETTING - empty and refill particle array every time window changes size + change canvas size
    window.addEventListener('resize',
        function () {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            init();
        });
}


var png = new Image();
png.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAACGCAYAAABgxvwwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJXmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjAwNGM4ZjU1LTM0YTMtZGY0Ny05MDBkLTlkNjhhYTZmYjMwYSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NjcyY2MzYS05MTc0LWM3NDQtODE1NC04YjNmY2MxZTQ1ZmIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iNzQ0QUU0QjE3QzFENjQwNkQ5MzM0NTdBREMyMTQzRDUiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iIiB0aWZmOkltYWdlV2lkdGg9IjEwMCIgdGlmZjpJbWFnZUxlbmd0aD0iMTQwIiB0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb249IjIiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6U2FtcGxlc1BlclBpeGVsPSIzIiB0aWZmOlhSZXNvbHV0aW9uPSI3Mi8xIiB0aWZmOllSZXNvbHV0aW9uPSI3Mi8xIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkV4aWZWZXJzaW9uPSIwMjMxIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iMTAwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTQwIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wNC0xNFQxMzo0MTo1NSswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDQtMTVUMTM6MjA6NDUrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDQtMTVUMTM6MjA6NDUrMDE6MDAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYWExNWNlOS1jMGQyLTBjNDctOWY2MS1hODMyMWIwMWI2MjEiIHN0RXZ0OndoZW49IjIwMjAtMDQtMTVUMTM6MjA6NDUrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0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";

// Run drawImage after page has been fully loaded
window.addEventListener('load', (event) => {
    console.log('page has loaded');
    ctx.drawImage(png, 0, 0);
    drawImage();
});