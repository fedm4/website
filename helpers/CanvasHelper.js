const {
    addNavParticles,
    handleNavParticles,
    startNavParticles,
    measureNavItems,
    clearNavItemMeasurements,
    setNavParticlesCanvasAndCtx
} = require("./NavParticlesHelper");

const { 
    setIndexImagesCanvasAndCtx,
    loadIndexImages,
    drawIndexImages
} = require("./IndexImagesHelper");

let initiated = false;
let req;
let ctx;
let canvas;

const cancelAnimation = () => req && cancelAnimationFrame(req);


const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 1;
    addNavParticles();
    handleNavParticles(ctx);
    drawIndexImages();
    req = requestAnimationFrame(() => animate(false));

}

const defineCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

const setResizeObserver = () => {
    const resizeObserver = new ResizeObserver(entries => {
        canvas.width = entries[0].target.clientWidth;
        canvas.height = entries[0].target.clientHeight;
        setNavParticlesCanvasAndCtx(canvas, ctx);
        setIndexImagesCanvasAndCtx(canvas, ctx);
        loadIndexImages();
        reload();
      })
      resizeObserver.observe(document.body);
}

const reload = () => {
    if(!initiated) return;
    cancelAnimation();
    defineCanvas();
    clearNavItemMeasurements();
    measureNavItems();
    startNavParticles();
    animate();
}

const setCtxAndCanvas = () => {
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");
}

export const init = () => {
    if(initiated) return;
    initiated = true;
    setCtxAndCanvas();
    setNavParticlesCanvasAndCtx(canvas, ctx);
    setIndexImagesCanvasAndCtx(canvas, ctx);
    reload();
    setResizeObserver();
}
