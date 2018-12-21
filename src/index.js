import resizeCanvas from './resizeCanvas';
import mouseEvent from './mouseEvent';

const drawingCanvas = document.getElementById('rects');

//Каждый прямоугольник должен отображаться на HTML канвасе.
if (drawingCanvas && drawingCanvas.getContext) {
    const context = drawingCanvas.getContext('2d');
    resizeCanvas(drawingCanvas, context);
    window.addEventListener('resize', () => resizeCanvas(drawingCanvas, context));
    mouseEvent(drawingCanvas, context);
}