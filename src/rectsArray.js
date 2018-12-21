import {defaultColorRect} from './rectColors';
//В коде можно создать любое количество объектов, представляющих информацию о прямоугольниках разных размеров.
/*let rects = [];

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
};*/

// Т.к эти прямоугольники это эл-ты кухни, то нет смысла их рандомно генерировать.

const rectsArray = [
    {
        height: 27,
        width: 102,
        x: 0,
        y: 0,
        isDragging: false,
        fill: defaultColorRect
    }, {
        height: 36,
        width: 123,
        x: 0,
        y: 32,
        isDragging: false,
        fill: defaultColorRect
    }, {
        height: 44,
        width: 88,
        x: 0,
        y: 73,
        isDragging: false,
        fill: defaultColorRect
    }, {
        height: 43,
        width: 60,
        x: 0,
        y: 122,
        isDragging: false,
        fill: defaultColorRect
    }, {
        height: 30,
        width: 91,
        x: 0,
        y: 170,
        isDragging: false,
        fill: defaultColorRect
    }, {
        height: 38,
        width: 125,
        x: 0,
        y: 205,
        isDragging: false,
        fill: defaultColorRect
    }, {
        height: 35,
        width: 107,
        x: 0,
        y: 248,
        isDragging: false,
        fill: defaultColorRect
    }
];

export default rectsArray;