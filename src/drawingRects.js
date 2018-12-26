import rectsArray from './rectsArray';
import {strokeColorRect} from './rectColors';

const drawingRects = (ctx) => {
    return rectsArray.forEach((rect) => {
        ctx.fillStyle = rect.fill;
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        ctx.strokeStyle = strokeColorRect;
        ctx.lineWidth = 1;
        ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
    })
};

export default drawingRects;