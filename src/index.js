import resizeCanvas from './resizeCanvas';
import mouseEvent from './mouseEvent';

const drawingCanvas = document.getElementById('rects');

// Each rectangle should be displayed on the HTML canvas.
if (drawingCanvas && drawingCanvas.getContext) {
    const context = drawingCanvas.getContext('2d');
    resizeCanvas(drawingCanvas, context);
    window.addEventListener('resize', () => resizeCanvas(drawingCanvas, context));
    mouseEvent(drawingCanvas, context);
}