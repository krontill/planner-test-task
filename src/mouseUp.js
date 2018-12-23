import overlayRects from "./overlayRects";
import stickRects from "./stickRects";
import drawingRects from "./drawingRects";
import rectsArray from "./rectsArray";
import setFillOverlayRects from "./setFillOverlayRects";
import clearCanvas from './clearCanvas';

const mouseUp = (e, options) => {
    let {ctx, dragRectIndex, beginRectX, beginRectY} = options;
    if (dragRectIndex !== null) {
        if (overlayRects(dragRectIndex).length === 1) {
            if (stickRects(dragRectIndex)) {
                clearCanvas(options);
                drawingRects(ctx);
            }
        }
        if (overlayRects(dragRectIndex).length > 1) {
            // Return the rect to initial position.
            rectsArray[dragRectIndex].x = beginRectX;
            rectsArray[dragRectIndex].y = beginRectY;
            setFillOverlayRects(); // set default fill
            clearCanvas(options);
            drawingRects(ctx);
        }
    }
    options.dragRectIndex = null;
    for (let i = 0; i < rectsArray.length; i++) {
        if (rectsArray[i].isDragging === true) {
            rectsArray[i].isDragging = false;
        }
    }
};

export default mouseUp;