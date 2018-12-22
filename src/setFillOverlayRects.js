import rectsArray from './rectsArray';
import {defaultColorRect, overlayColorRect} from './rectColors';

const setFillOverlayRects = (overlayRectsArrayIndex) => {
    rectsArray.forEach((rect, index) => {
        if (overlayRectsArrayIndex.length > 1 && ~overlayRectsArrayIndex.indexOf(index)) {
            rect.fill = overlayColorRect;
        } else {
            rect.fill = defaultColorRect;
        }
    });
};

export default setFillOverlayRects;