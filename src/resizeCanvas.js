import drawingRects from "./drawingRects";

const padding = 30;
const resizeCanvas = (canvas, ctx) => {
    const width = window.innerWidth - padding; //document.documentElement.clientWidth - если учитывать скролл
    const height = window.innerHeight - padding; //document.documentElement.clientHeight
    if (width !== canvas.width) {
        canvas.width = width;
    }
    if (height !== canvas.height) {
        canvas.height = height;
    }
    drawingRects(ctx);
};

export default resizeCanvas;