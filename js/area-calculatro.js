
function triangleArea() {
    const triangleBase = getElementValue('input-tbase');
    const triangleHeight = getElementValue('input-theight')
    const triangleArea = .5 * triangleBase * triangleHeight;
    // set value
    setArea('tarea', triangleArea);
}

function rectangleArea() {
    const rectangleWidth = getElementValue('input-rwidth');
    const rectangleHeight = getElementValue('input-rheight');
    const rectangleArea = rectangleHeight * rectangleWidth;
    setArea('rarea', rectangleArea);
}
function ParallelogramArea() {
    const ParallelogramBase = getElementValue('input-pbase');
    const ParallelogramHeight = getElementValue('input-pheight');
    const ParallelogramArea = .5 * ParallelogramHeight * ParallelogramBase;
    setArea('parea', ParallelogramArea);
}
