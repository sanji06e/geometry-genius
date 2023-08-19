
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

function RhombusArea() {
    const rhombusDiagon1 = getElementValue('input-rdiagon1')
    const rhombusDiagon2 = getElementValue('input-rdiagon2')
    const rhombusArea = .5 * rhombusDiagon1 * rhombusDiagon2;
    setArea('rharea', rhombusArea);
}


function pentagonArea() {
    const pentagonSide = getElementValue('input-pside');
    const pentagonApothem = getElementValue('input-papothem');
    const pentagonArea = 0.5 * pentagonSide * pentagonApothem;
    setArea('pentagon-area', pentagonArea);
}
function ellipseArea() {
    const ellipseA = getElementValue('input-aside');
    const ellipseB = getElementValue('input-bside');
    const ellipseArea = Math.PI * ellipseA * ellipseB;
    const fixedArea = ellipseArea.toFixed(2);
    setArea('earea', fixedArea);
}
