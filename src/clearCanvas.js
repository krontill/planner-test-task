const clearCanvas = (options) => {
    const {canvas, ctx} = options;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

export default clearCanvas;