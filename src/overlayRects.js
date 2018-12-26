import rectsArray from './rectsArray';

const overlayRects = (moveRectIndex = null, distance = 0) => {
    let overlayRects = [];
    if (moveRectIndex !== null) {
        rectsArray.forEach((rect, index) => {
            const overlayLeftSideRect = rectsArray[moveRectIndex].x - distance > rect.x
                && rectsArray[moveRectIndex].x - distance < rect.x + rect.width;
            const overlayRightSideRect = rectsArray[moveRectIndex].x + rectsArray[moveRectIndex].width + distance > rect.x
                && rectsArray[moveRectIndex].x + rectsArray[moveRectIndex].width + distance < rect.x + rect.width;
            const overlayAxisX = rectsArray[moveRectIndex].x - distance < rect.x
                && rectsArray[moveRectIndex].x - distance < rect.x + rect.width
                && rectsArray[moveRectIndex].x + rectsArray[moveRectIndex].width + distance > rect.x
                && rectsArray[moveRectIndex].x + rectsArray[moveRectIndex].width + distance > rect.x + rect.width;

            const overlayTopSideRect = rectsArray[moveRectIndex].y - distance > rect.y
                && rectsArray[moveRectIndex].y - distance < rect.y + rect.height;
            const overlayBottomSideRect = rectsArray[moveRectIndex].y + rectsArray[moveRectIndex].height + distance > rect.y
                && rectsArray[moveRectIndex].y + rectsArray[moveRectIndex].height + distance < rect.y + rect.height;
            const overlayAxisY = rectsArray[moveRectIndex].y - distance < rect.y
                && rectsArray[moveRectIndex].y - distance < rect.y + rect.height
                && rectsArray[moveRectIndex].y + rectsArray[moveRectIndex].height + distance > rect.y
                && rectsArray[moveRectIndex].y + rectsArray[moveRectIndex].height + distance > rect.y + rect.height;

            if ((overlayLeftSideRect || overlayRightSideRect || overlayAxisX)
                && (overlayTopSideRect || overlayBottomSideRect || overlayAxisY)) {
                overlayRects.push(index);
            }
        });
        overlayRects.push(moveRectIndex);
    }
    return overlayRects;
};

export default overlayRects;