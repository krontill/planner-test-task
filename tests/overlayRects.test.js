import overlayRects from '../src/overlayRects.js';
import rectsArray from '../src/rectsArray';

describe('Test overlayRects', () => {
    it('overlayRects() return []', () => {
        expect(overlayRects()).toHaveLength(0);
    });
    it('overlayRects(0) return [0]', () => {
        expect(overlayRects(0)).toHaveLength(1);
        expect(overlayRects(0)[0]).toBe(0);
    });
    const distance = rectsArray[1].y - rectsArray[0].y - rectsArray[0].height;
    it('overlayRects(0, distance) return overlay rects array', () => {
        expect(overlayRects(0, distance)).not.toEqual(expect.arrayContaining([0, 1]));
        expect(overlayRects(0, distance + 1)).toEqual(expect.arrayContaining([0, 1]));
    });
});