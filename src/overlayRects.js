import rectsArray from './rectsArray';
import {defaultColorRect, overlayColorRect} from './rectColors';

const overlayRects = (moveRectIndex) => {
    rectsArray.forEach((rect) => {
        if ((rectsArray[moveRectIndex].x > rect.x && rectsArray[moveRectIndex].x < rect.x + rect.width
            || rectsArray[moveRectIndex].x + rectsArray[moveRectIndex].width > rect.x && rectsArray[moveRectIndex].x + rectsArray[moveRectIndex].width < rect.x + rect.width)
            && (rectsArray[moveRectIndex].y > rect.y && rectsArray[moveRectIndex].y < rect.y + rect.height
                || rectsArray[moveRectIndex].y + rectsArray[moveRectIndex].height > rect.y && rectsArray[moveRectIndex].y + rectsArray[moveRectIndex].height < rect.y + rect.height)) {
            rectsArray[moveRectIndex].fill = overlayColorRect;
            rect.fill = overlayColorRect;
        } else {
            rect.fill = defaultColorRect;
        }
    });
};

export default overlayRects;