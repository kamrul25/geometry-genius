

// Triangle calculate
document.getElementById('triangle-btn').addEventListener('click', function(){
    const areaValue =calculateTriangleOrRhombusOrPentagon( 'triangle-first-field', 'triangle-second-field');
    const textValue = getElementTextValueById('triangle-name');
    displayData(textValue, areaValue);

});
// Rectangle calculate
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const areaValue =calculateRectangleOrParallelogram( 'rectangle-first-field', 'rectangle-second-field');
    const textValue = getElementTextValueById('rectangle-name');
    displayData(textValue, areaValue);

});
// Parallelogram calculate
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const areaValue =calculateRectangleOrParallelogram( 'parallelogram-first-field', 'parallelogram-second-field');
    const textValue = getElementTextValueById('parallelogram-name');
    displayData(textValue, areaValue);

});


// Rhombus calculation
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const areaValue =calculateTriangleOrRhombusOrPentagon( 'rhombus-first-field', 'rhombus-second-field');
    const textValue = getElementTextValueById('rhombus-name');
    displayData(textValue, areaValue);

});


// Pentagon calculate
document.getElementById('pentagon-btn').addEventListener('click', function(){
    const areaValue =calculateTriangleOrRhombusOrPentagon( 'pentagon-first-field', 'pentagon-second-field');
    const textValue = getElementTextValueById('pentagon-name');
    displayData(textValue, areaValue);

});


// Ellipse calculate
document.getElementById('ellipse-btn').addEventListener('click', function(){
    const areaValue =calculateEllipse( 'ellipse-first-field', 'ellipse-second-field');
    const textValue = getElementTextValueById('ellipse-name');
    displayData(textValue, areaValue);
})

