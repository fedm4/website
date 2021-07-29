let activeItem =  -1;
let itemMeasurements = [];
let initiated = false;
let images = [];
let req;
let ctx;
let canvas;
let clientHeight = 0;

class NavParticle {
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.weight = (Math.random() * 1.5) + 1.5;
        this.directionX = Math.random() * 1 - 1;
        this.color = '#394a6d';
    }
    update() {
        this.weight -= 0.01;
        this.y += this.weight;
        this.x += this.directionX;
        if (this.size >= 0.3) this.size -= 0.2;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size, this.size);
        ctx.strokeStyle = this.color;
        ctx.fillStyle = "white";
        ctx.stroke();
        ctx.fill();
    }
}

const cancelAnimation = () => req && cancelAnimationFrame(req);

/** Nav Particles */
const navParticlesArray = [];

const clearItemMeasurements = () => itemMeasurements = [];
const measureItems = () => document.querySelectorAll(".nav-item").forEach(item => itemMeasurements.push(item.getBoundingClientRect()));
const handleMouseEnterNav = e => activeItem = e.target.dataset.number;
const handleMouseLeaveNav = () => activeItem = -1;

const startNavParticles = () => {
    document.querySelectorAll(".nav-item")?.forEach(item => {
        item.removeEventListener("mouseenter", handleMouseEnterNav);
        item.removeEventListener("mouseleave", handleMouseLeaveNav);
        item.addEventListener('mouseenter', handleMouseEnterNav);
        item.addEventListener('mouseleave', handleMouseLeaveNav);
    });
}

const handleNavParticles = () => {
    for (let i = 0; i < navParticlesArray.length; i++){
        navParticlesArray[i].update();
        navParticlesArray[i].draw(ctx);
        for(let j = i; j < navParticlesArray.length; j++){
            const dx = navParticlesArray[i].x - navParticlesArray[j].x;
            const dy = navParticlesArray[i].y - navParticlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if(distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = navParticlesArray[i].color;
                ctx.lineWidth = navParticlesArray[i].size/10;
                ctx.moveTo(navParticlesArray[i].x, navParticlesArray[i].y);
                ctx.lineTo(navParticlesArray[j].x, navParticlesArray[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
        if (navParticlesArray[i].size <= 1) {
            navParticlesArray.splice(i, 1);
            i--;
        }
    }
}

const addNavParticles = () => {
    if (activeItem > -1) {
        let size = Math.random() * 10 + 10;
        let x = Math.random() * (itemMeasurements[activeItem].width - size * 2) + itemMeasurements[activeItem].x + size;
        let y = itemMeasurements[activeItem].y + 65;

        if(Math.round(Math.random() * 5 + 1) == 5) navParticlesArray.push(new NavParticle(x, y, size));
    }
}
/** End Nav Particles */

export const animate = (triggerImageChange) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 1;
    addNavParticles();
    handleNavParticles(ctx);
    drawImages(triggerImageChange);
    req = requestAnimationFrame(() => animate(false));

}

const defineCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

const drawImages = () => {
    for(let image of images) {
        ctx.drawImage(image.ImgObj, 
            0, 200, // Start at 0 0 from top left of the image
            image.ImgObj.width, image.ImgObj.width, // Crop to width square 
            image.offsetLeft, image.offsetTop + 35, // Position at real offsetLeft and offsetTop + 35px to get correct height 
            200, 200); // Scale to 200px
    }
};

const reloadCanvas = () => {
    const cWidth = canvas.width;
    const cHeight = canvas.height;
    canvas.remove();
    canvas = document.createElement("canvas");
    canvas.width = cWidth;
    canvas.height = cHeight;
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    reload();
}

const setResizeObserver = () => {
    const resizeObserver = new ResizeObserver(entries => {
        canvas.width = entries[0].target.clientWidth;
        canvas.height = entries[0].target.clientHeight;
        loadImages();
        reload();
      })
      resizeObserver.observe(document.body);
}

export const loadImages = () => {
    images = document.querySelectorAll(".image-container > img");
    for(let image of images ) {
        const img = new Image(); // Create new image to get real width and height
        img.src = image.src;
        image.ImgObj = img;
    }
}

export const reload = () => {
    if(!initiated) return;
    cancelAnimation();
    defineCanvas();
    clearItemMeasurements();
    measureItems();
    startNavParticles();
    animate();
}

export const setCtxAndCanvas = () => {
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");
}

export const init = () => {
    if(initiated) return;
    initiated = true;
    setCtxAndCanvas();
    reload();
    setResizeObserver();
}
