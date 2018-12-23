import rectsArray from "./rectsArray";

const mouseDown = (e, options) => {
    let {offsetX, offsetY} = options;
    // get the current mouse position
    const mouseX = parseInt(e.clientX - offsetX);
    const mouseY = parseInt(e.clientY - offsetY);
    // test each rect to see if mouse is inside
    options.dragRectIndex = null;
    for (let i = 0; i < rectsArray.length; i++) {
        if (mouseX > rectsArray[i].x
            && mouseX < rectsArray[i].x + rectsArray[i].width
            && mouseY > rectsArray[i].y
            && mouseY < rectsArray[i].y + rectsArray[i].height) {
            options.dragRectIndex = i;
            rectsArray[i].isDragging = true;
            break;
        }
    }
    // save the current mouse position
    options.startX = mouseX;
    options.startY = mouseY;
    if (options.dragRectIndex !== null) {
        options.beginRectX = rectsArray[options.dragRectIndex].x;
        options.beginRectY = rectsArray[options.dragRectIndex].y;
    }
};

export default mouseDown;