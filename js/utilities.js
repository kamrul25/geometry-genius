

// calculate triangle , rectangle and rhombus area by function
function calculateTriangleOrRhombusOrPentagon(firstElement, secondElement ,textId){
    const firstValueString = document.getElementById(firstElement).value ;
    const secondValueString = document.getElementById(secondElement).value ;
 
    firstValueString.value = '';
    secondValueString.value = '';
    if(firstValueString <0 ||  secondValueString < 0 || firstValueString == ''|| secondValueString == ''  ||isNaN(firstValueString)  || isNaN(secondValueString)){
        alert('Please give a positive number');
         return;
    }
    else{
        const firstValue = parseFloat(firstValueString); 
        const secondValue = parseFloat( secondValueString);
        const areaValue = (0.5 * firstValue * secondValue).toFixed(2);
        const textValue = document.getElementById(textId).innerText;
        return displayData(textValue, areaValue);
    }

}

// calculate rectangle and parallelogram area by function
function calculateRectangleOrParallelogram(firstElement, secondElement, textId){
    const firstValueString = document.getElementById(firstElement).value ;
    const secondValueString = document.getElementById(secondElement).value ; 
    
    firstValueString.value = '';
    secondValueString.value = '';
    if(firstValueString <0 ||  secondValueString < 0 || firstValueString == ''|| secondValueString == ''  ||isNaN(firstValueString)  || isNaN(secondValueString)){
        alert('Please give a positive number');
         return;
    }
    else{
        const firstValue = parseFloat(firstValueString); 
        const secondValue = parseFloat( secondValueString);
        const areaValue = ( firstValue * secondValue).toFixed(2);
        const textValue = document.getElementById(textId).innerText;
        return displayData(textValue, areaValue);
    }
}

// calculate ellipse area by function
function calculateEllipse(firstElement, secondElement,textId){
    const firstValueString = document.getElementById(firstElement).value ;
    const secondValueString = document.getElementById(secondElement).value ;
    
    firstValueString.value = '';
    secondValueString.value = '';
    if(firstValueString <0 ||  secondValueString < 0 || firstValueString == ''|| secondValueString == ''  ||isNaN(firstValueString)  || isNaN(secondValueString)){
        alert('Please give a positive number');
         return;
    }
    else{
        const firstValue = parseFloat(firstValueString); 
        const secondValue = parseFloat( secondValueString);
        const areaValue = (0.5 * firstValue * secondValue).toFixed(2);
        const textValue = document.getElementById(textId).innerText;
        return displayData(textValue, areaValue);
    }
}

// dynamic serial 
let serial = 0;

// when calculate button clicked this dynamic table will show 
function displayData(name , areaValue){
    serial++;
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="text-black">${serial}.${name}</td>
      <td class="text-black">${areaValue}cm<sup class="text-black">2</sup></td>
      <td>
      <button id="convert" class=" bg-blue-500 text-white py-2 font-bold border-none rounded-lg">Convert to m <sup class="text-white">2</sup></button>
      </td>
    `; 
    container.appendChild(tr);
  
}