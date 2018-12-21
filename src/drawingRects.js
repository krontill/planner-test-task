import rectsArray from './rectsArray';

const drawingRects = (ctx) => {
    return rectsArray.forEach((rect) => {
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    })
};

export default drawingRects;