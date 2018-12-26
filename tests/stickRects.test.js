import stickRects from '../src/stickRects.js';

describe('setFillOverlayRects', () => {
    it('setFillOverlayRects() return false', () => {
        expect(stickRects(0)).toBe(true);
    });
    it('setFillOverlayRects(0) return true', () => {
        expect(stickRects(0)).toBe(true);
    });
    it('setFillOverlayRects(null) return false', () => {
        expect(stickRects(null)).toBe(false);
    });
    it('setFillOverlayRects(1) return true', () => {
        expect(stickRects(1)).toBe(true);
    });
});