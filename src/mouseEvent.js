import mouseDown from './mouseDown';
import mouseUp from './mouseUp';
import mouseMove from './mouseMove';

const mouseEvent = (canvas, ctx) => {
    const optionsEvent = {
        canvas: canvas,
        ctx: ctx,
        offsetX: canvas.getBoundingClientRect().left,
        offsetY: canvas.getBoundingClientRect().top,
        dragRectIndex: null,
        beginRectX: null,
        beginRectY: null,
        startX: null,
        startY: null
    };

    canvas.addEventListener('mousedown', (e) => mouseDown(e, optionsEvent));
    canvas.addEventListener('mouseup', (e) => mouseUp(e, optionsEvent));
    canvas.addEventListener('mousemove', (e) => mouseMove(e, optionsEvent));

};

export default mouseEvent;