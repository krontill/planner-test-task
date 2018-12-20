import drawingRects from './drawingRects';

const drawingCanvas = document.getElementById('rects');

//Каждый прямоугольник должен отображаться на HTML канвасе.
if (drawingCanvas && drawingCanvas.getContext) {
    const context = drawingCanvas.getContext('2d');
    drawingRects(context);
}