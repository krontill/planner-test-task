import createRects from './createRects';

const drawingRects = (ctx) => {
    return createRects.forEach((rect) => {
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    })
};

export default drawingRects;