let activeItem =  -1;
const itemMeasurements = [];

class Particle {
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

const particlesArray = [];

const handleParticles = ctx => {
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw(ctx);
        for(let j = i; j < particlesArray.length; j++){
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if(distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = particlesArray[i].color;
                ctx.lineWidth = particlesArray[i].size/10;
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
        if (particlesArray[i].size <= 1) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

export const animate = (ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 1;
    if (activeItem > -1) {
        let size = Math.random() * 10 + 10;
        let x = Math.random() * (itemMeasurements[activeItem].width - size * 2) + itemMeasurements[activeItem].x + size;
        let y = itemMeasurements[activeItem].y + 65;

        if(Math.round(Math.random() * 5 + 1) == 5) particlesArray.push(new Particle(x, y, size));
    }
    handleParticles(ctx);

    requestAnimationFrame(() => animate(ctx, canvas));
}

const measureItems = () => document.querySelectorAll(".nav-item").forEach(item => itemMeasurements.push(item.getBoundingClientRect()));

const defineCanvas = ctx => {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    measureItems();
};

export const init = (ctx) => {
    if(ctx.hasOwnProperty('ctx')) ctx = ctx.ctx;

    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener('mouseenter', () => activeItem = item.dataset.number);
        item.addEventListener('mouseleave', () => activeItem = -1);
    });
    window.addEventListener('resize', () => defineCanvas(ctx)); 
    defineCanvas(ctx);   
    animate(ctx, ctx.canvas);
}
