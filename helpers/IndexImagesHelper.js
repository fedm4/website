let canvas, ctx;
let images = [];
let hovering = false;

export const setIndexImagesCanvasAndCtx = (inCanvas, inCtx) => {
    canvas = inCanvas;
    ctx = inCtx;
}

const handleMouseMove = e => {
    let hovering = false;
    for(let image of images) {
        if((e.clientX >= image.offsetLeft && e.clientX <= image.offsetLeft + 200) &&
            (e.clientY >= image.offsetTop +35 && e.clientY <= image.offsetTop + 35 + 200)) {
                image.hovering = true;
                hovering = true;
            } else image.hovering = false;
    }
    if(!hovering) currentSampleSize = 1;
}

export const loadIndexImages = () => {
    images = document.querySelectorAll(".image-container > img");
    for(let image of images) {
        const img = new Image(); // Create new image to get real width and height
        img.src = image.src;
        image.ImgObj = img;
        image.hovering = false;
    }
    canvas.removeEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mousemove", handleMouseMove);
}

const scanImgData = image => {
    const scannedImage = ctx.getImageData(image.offsetLeft, image.offsetTop+35, 200, 200);
    image.imgData = scannedImage;
}

const convertToGrayScale = imageData => {
    const scannedData = imageData.data;
    for(let i = 0; i < scannedData.length; i += 4) {
        const total = scannedData[i] + scannedData[i+1] + scannedData[i+2];
        const averageColorValue = total / 3;
        scannedData[i] = scannedData[i+1] = scannedData[i+2] = averageColorValue;
    }
}

export const drawIndexImages = () => {
    for(let image of images) {
        if(!image.hovering || !image.imgData?.data) {
            ctx.drawImage(image.ImgObj, 
                0, 200, // Start at 0 200 from top left of the image
                image.ImgObj.width, image.ImgObj.width, // Crop to width square 
                image.offsetLeft, image.offsetTop + 35, // Position at real offsetLeft and offsetTop + 35px to get correct height 
                200, 200); // Scale to 200px
                if(!image.imgData) scanImgData(image);
        } else pixelate(image);
    }
};
const sampleSize = 8;
let currentSampleSize = 1;
let delay = 0;

const pixelate = image => {
    const position = { x: image.offsetLeft, y: image.offsetTop + 35 };
    for (let y = 0; y < 200; y += currentSampleSize) {
        position.x = image.offsetLeft;
        for (let x = 0; x < 200; x += currentSampleSize) {
            const p = (x + (y * 200)) * 4;
            const red = image.imgData.data[p];
            const green = image.imgData.data[p+1];
            const blue = image.imgData.data[p+2];
            const alpha = image.imgData.data[p+3];
            ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
            ctx.fillRect(position.x, position.y, currentSampleSize, currentSampleSize);
            position.x += currentSampleSize;
        }
        position.y += currentSampleSize;
      }
      if(delay === 5) {
          if(currentSampleSize < sampleSize) {
              currentSampleSize++;
              delay = 0;
          }
      }
      else delay++;
}