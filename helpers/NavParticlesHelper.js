let canvas, ctx;

let itemMeasurements = [];
let activeItem =  -1;
const navParticlesArray = [];

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

export const clearNavItemMeasurements = () => itemMeasurements = [];
export const measureNavItems = () => document.querySelectorAll(".nav-item").forEach(item => itemMeasurements.push(item.getBoundingClientRect()));
const handleMouseEnterNav = e => activeItem = e.target.dataset.number;
const handleMouseLeaveNav = () => activeItem = -1;

export const startNavParticles = () => {
    document.querySelectorAll(".nav-item")?.forEach(item => {
        item.removeEventListener("mouseenter", handleMouseEnterNav);
        item.removeEventListener("mouseleave", handleMouseLeaveNav);
        item.addEventListener('mouseenter', handleMouseEnterNav);
        item.addEventListener('mouseleave', handleMouseLeaveNav);
    });
}

export const handleNavParticles = () => {
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

export const addNavParticles = () => {
    if (activeItem > -1) {
        let size = Math.random() * 10 + 10;
        let x = Math.random() * (itemMeasurements[activeItem].width - size * 2) + itemMeasurements[activeItem].x + size;
        let y = itemMeasurements[activeItem].y + 65;

        if(Math.round(Math.random() * 5 + 1) == 5) navParticlesArray.push(new NavParticle(x, y, size));
    }
}

export const setNavParticlesCanvasAndCtx = (inCanvas, inCtx) => {
    canvas = inCanvas;
    ctx = inCtx;
}