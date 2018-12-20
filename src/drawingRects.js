import createRects from './createRects';

const quantityRect = 7;

const drawingRects = (ctx) => {
    return createRects(quantityRect).forEach((rect) => {
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    })
};

export default drawingRects;