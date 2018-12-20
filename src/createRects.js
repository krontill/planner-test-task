//В коде можно создать любое количество объектов, представляющих информацию о прямоугольниках разных размеров.
let rects = [];

const createRects = (quantity) => {
    const padding = 5;
    const minimumWidth = 50;
    const minimumHeight = 20;
    let coordinateYNextRect = 0;

    for (let i = 0; i < quantity; i++) {
        rects[i] = {
            x: 0,
            y: coordinateYNextRect,
            width: minimumWidth + Math.random() * 100 ^ 0,
            height: minimumHeight + Math.random() * 30 ^ 0
        };
        coordinateYNextRect += rects[i].height + padding;
    }
    return rects;
};

export default createRects;