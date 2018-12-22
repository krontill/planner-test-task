import rectsArray from './rectsArray';
import overlayRects from './overlayRects';

const distance = 4;

const stickRects = (moveRectIndex) => {
    let stickRectIndex = overlayRects(moveRectIndex, distance).filter((index) => index !== moveRectIndex)[0];
    if (stickRectIndex >= 0) {
        const distanceBetweenRect = [
            Math.abs(rectsArray[moveRectIndex].x - (rectsArray[stickRectIndex].x + rectsArray[stickRectIndex].width)),
            Math.abs(rectsArray[moveRectIndex].x + rectsArray[moveRectIndex].width - rectsArray[stickRectIndex].x),
            Math.abs(rectsArray[moveRectIndex].y - (rectsArray[stickRectIndex].y + rectsArray[stickRectIndex].height)),
            Math.abs(rectsArray[moveRectIndex].y + rectsArray[moveRectIndex].height - rectsArray[stickRectIndex].y),
        ];
        const minDistanceBetweenRect = Math.min(...distanceBetweenRect);
        const minDistanceBetweenRectIndex = distanceBetweenRect.indexOf(minDistanceBetweenRect);
        switch (minDistanceBetweenRectIndex) {
            case 0:
                rectsArray[moveRectIndex].x -= minDistanceBetweenRect;
                break;
            case 1:
                rectsArray[moveRectIndex].x += minDistanceBetweenRect;
                break;
            case 2:
                rectsArray[moveRectIndex].y -= minDistanceBetweenRect;
                break;
            case 3:
                rectsArray[moveRectIndex].y += minDistanceBetweenRect;
                break;
        }
    }
    return !!stickRectIndex >= 0;
};

export default stickRects;