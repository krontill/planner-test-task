import drawingRects from "./drawingRects";

const padding = 30;
const resizeCanvas = (canvas, ctx) => {
    const width = window.innerWidth - padding;
    const height = window.innerHeight - padding;
    if (width !== canvas.width) {
        canvas.width = width;
    }
    if (height !== canvas.height) {
        canvas.height = height;
    }
    drawingRects(ctx);
};

export default resizeCanvas;