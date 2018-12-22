import rectsArray from './rectsArray';

const overlayRects = (moveRectIndex) => {
    let overlayRects = [];
    rectsArray.forEach((rect, index) => {
        const overlayLeftSideRect = rectsArray[moveRectIndex].x >= rect.x
            && rectsArray[moveRectIndex].x <= rect.x + rect.width;
        const overlayRightSideRect = rectsArray[moveRectIndex].x + rectsArray[moveRectIndex].width >= rect.x
            && rectsArray[moveRectIndex].x + rectsArray[moveRectIndex].width <= rect.x + rect.width;
        const overlayAxisX = rectsArray[moveRectIndex].x <= rect.x
            && rectsArray[moveRectIndex].x <= rect.x + rect.width
            && rectsArray[moveRectIndex].x + rectsArray[moveRectIndex].width >= rect.x
            && rectsArray[moveRectIndex].x + rectsArray[moveRectIndex].width >= rect.x + rect.width;

        const overlayTopSideRect = rectsArray[moveRectIndex].y >= rect.y
            && rectsArray[moveRectIndex].y <= rect.y + rect.height;
        const overlayBottomSideRect = rectsArray[moveRectIndex].y + rectsArray[moveRectIndex].height >= rect.y
            && rectsArray[moveRectIndex].y + rectsArray[moveRectIndex].height <= rect.y + rect.height;
        const overlayAxisY = rectsArray[moveRectIndex].y <= rect.y
            && rectsArray[moveRectIndex].y <= rect.y + rect.height
            && rectsArray[moveRectIndex].y + rectsArray[moveRectIndex].height >= rect.y
            && rectsArray[moveRectIndex].y + rectsArray[moveRectIndex].height >= rect.y + rect.height;

        if ((overlayLeftSideRect || overlayRightSideRect || overlayAxisX)
            && (overlayTopSideRect || overlayBottomSideRect || overlayAxisY)) {
            overlayRects.push(index);
        }
    });
    return overlayRects;
};

export default overlayRects;