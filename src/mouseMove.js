import rectsArray from "./rectsArray";
import setFillOverlayRects from "./setFillOverlayRects";
import overlayRects from "./overlayRects";
import drawingRects from "./drawingRects";
import clearCanvas from './clearCanvas';

const mouseMove = (e, options) => {
    let {ctx, dragRectIndex, startX, startY, offsetX, offsetY} = options;
    if (dragRectIndex !== null) {
        const mouseX = parseInt(e.clientX - offsetX);
        const mouseY = parseInt(e.clientY - offsetY);
        // calculate the distance the mouse has moved since the last mousemove
        const distanceX = mouseX - startX;
        const distanceY = mouseY - startY;
        // move drag rect by the distance the mouse has moved since the last mousemove
        rectsArray[dragRectIndex].x += distanceX;
        rectsArray[dragRectIndex].y += distanceY;
        // redraw the scene with the new rect positions and fill
        setFillOverlayRects(overlayRects(dragRectIndex));
        clearCanvas(options);
        drawingRects(ctx);
        // reset the starting mouse position for the next mousemove
        options.startX = mouseX;
        options.startY = mouseY;
    }
};

export default mouseMove;