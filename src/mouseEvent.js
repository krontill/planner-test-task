import rectsArray from './rectsArray';
import drawingRects from "./drawingRects";
import overlayRects from './overlayRects';
import setFillOverlayRects from './setFillOverlayRects';

const mouseEvent = (canvas, ctx) => {
    const offsetX = canvas.getBoundingClientRect().left;
    const offsetY = canvas.getBoundingClientRect().top;
    let dragRectIndex = null;
    let startX;
    let startY;

    const clear = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const mouseDown = (e) => {
        // get the current mouse position
        const mouseX = parseInt(e.clientX - offsetX);
        const mouseY = parseInt(e.clientY - offsetY);
        // test each rect to see if mouse is inside
        dragRectIndex = null;
        for (let i = 0; i < rectsArray.length; i++) {
            if (mouseX > rectsArray[i].x && mouseX < rectsArray[i].x + rectsArray[i].width && mouseY > rectsArray[i].y && mouseY < rectsArray[i].y + rectsArray[i].height) {
                dragRectIndex = i;
                rectsArray[i].isDragging = true;
            }
        }
        // save the current mouse position
        startX = mouseX;
        startY = mouseY;
    };

    const mouseUp = (e) => {
        dragRectIndex = null;
        for (let i = 0; i < rectsArray.length; i++) {
            if (rectsArray[i].isDragging === true) {
                rectsArray[i].isDragging = false;
            }
        }
    };

    const mouseMove = (e) => {
        if (dragRectIndex !== null) {
            const mouseX = parseInt(e.clientX - offsetX);
            const mouseY = parseInt(e.clientY - offsetY);
            // calculate the distance the mouse has moved since the last mousemove
            const distanceX = mouseX - startX;
            const distanceY = mouseY - startY;
            // move each rect that isDragging by the distance the mouse has moved since the last mousemove
            for (let i = 0; i < rectsArray.length; i++) {
                if (rectsArray[i].isDragging) {
                    rectsArray[i].x += distanceX;
                    rectsArray[i].y += distanceY;
                }
            }
            // redraw the scene with the new rect positions and fill
            setFillOverlayRects(overlayRects(dragRectIndex));
            clear();
            drawingRects(ctx);
            // reset the starting mouse position for the next mousemove
            startX = mouseX;
            startY = mouseY;
        }
    };

    canvas.addEventListener('mousedown', mouseDown);
    canvas.addEventListener('mouseup', mouseUp);
    canvas.addEventListener('mousemove', mouseMove);

};

export default mouseEvent;