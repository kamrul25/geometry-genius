// get the title text by function
function getElementTextValueById(textId){
    const textValue = document.getElementById(textId).innerText;
    return textValue;
}

// calculate triangle , rectangle and rhombus area by function
function calculateTriangleOrRhombusOrPentagon(firstElement, secondElement){
    const firstValueString = document.getElementById(firstElement).value ;
    const secondValueString = document.getElementById(secondElement).value ;
    const firstValue = parseFloat(firstValueString); 
    const secondValue = parseFloat( secondValueString); 
  
    if(firstValue<0 ||  secondValue < 0){
        return alert('Please give a positive number')
    }else{
        const areaValue = (0.5 * firstValue * secondValue).toFixed(2);
       return areaValue ;
    }
}

// calculate rectangle and parallelogram area by function
function calculateRectangleOrParallelogram(firstElement, secondElement){
    const firstValueString = document.getElementById(firstElement).value ;
    const secondValueString = document.getElementById(secondElement).value ;
    const firstValue = parseFloat(firstValueString); 
    const secondValue = parseFloat( secondValueString); 
  
    if(firstValue<0 ||  secondValue < 0){
        return alert('Please give a positive number')
    }else{
        const areaValue = ( firstValue * secondValue).toFixed(2);
       return areaValue ;
    }
}

// calculate ellipse area by function
function calculateEllipse(firstElement, secondElement){
    const firstValueString = document.getElementById(firstElement).value ;
    const secondValueString = document.getElementById(secondElement).value ;
    const firstValue = parseFloat(firstValueString); 
    const secondValue = parseFloat( secondValueString); 
  
    if(firstValue<0 ||  secondValue < 0){
        return alert('Please give a positive number')
    }else{
        const areaValue = (3.14 * firstValue * secondValue).toFixed(2);
       return areaValue ;
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