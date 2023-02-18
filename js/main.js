

// Triangle calculate
document.getElementById('triangle-btn').addEventListener('click', function(){
    calculateTriangleOrRhombusOrPentagon( 'triangle-first-field', 'triangle-second-field','triangle-name');

});
// Rectangle calculate
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const areaValue =calculateRectangleOrParallelogram( 'rectangle-first-field', 'rectangle-second-field','rectangle-name');
});
// Parallelogram calculate
document.getElementById('parallelogram-btn').addEventListener('click', function(){
  calculateRectangleOrParallelogram( 'parallelogram-first-field', 'parallelogram-second-field','parallelogram-name');
});


// Rhombus calculation
document.getElementById('rhombus-btn').addEventListener('click', function(){
 calculateTriangleOrRhombusOrPentagon( 'rhombus-first-field', 'rhombus-second-field','rhombus-name');
});


// Pentagon calculate
document.getElementById('pentagon-btn').addEventListener('click', function(){
   calculateTriangleOrRhombusOrPentagon( 'pentagon-first-field', 'pentagon-second-field','pentagon-name');
});


// Ellipse calculate
document.getElementById('ellipse-btn').addEventListener('click', function(){
    calculateEllipse( 'ellipse-first-field', 'ellipse-second-field','ellipse-name');
})

