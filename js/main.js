
let serial = 0
document.getElementById('triangle-btn').addEventListener('click', function(){
    getElementValueById('triangle-first-field','triangle-second-field','triangle-name')

});

function getElementValueById(firstElement, secondElement, thirdElement){
    const firstValueString = document.getElementById(firstElement).value ;
    const secondValueString = document.getElementById(secondElement).value ;
    const firstValue = parseFloat(firstValueString); 
    const secondValue = parseFloat( secondValueString); 
  
    if(firstValue<0||  secondValue < 0){
        return alert('Please give a positive number')
    }else{
        const areaValue = (0.5 * firstValue * secondValue).toFixed(2);
        const name = document.getElementById(thirdElement).innerText;
        displayData(name, areaValue);
    }
}

document.getElementById('rectangle-btn').addEventListener('click', function(){
    const firstValue = document.getElementById('rectangle-first-field').value ;
    const secondValue = document.getElementById('rectangle-second-field').value ;
    const areaValue = ( parseFloat(firstValue) * parseFloat(secondValue)).toFixed(2);
    const name = document.getElementById('rectangle-name').innerText;
    displayData(name, areaValue);
})

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
    // document.getElementById('convert').addEventListener('click', function(e){
    //     const container = document.getElementById("table-container");
    //     const tr = document.createElement("tr");
    //     tr.innerHTML = `
    //       <td class="text-black">${serial}.${name}</td>
    //       <td class="text-black">${areaValue/100}m<sup class="text-black">2</sup></td>
    //       <td><button id="cancel-btn" class=" bg-blue-500 text-white py-2 px-4 font-bold border-none rounded-lg">Cancel</button>
    //      </td>
    //     `;
    //     container.appendChild(tr);
    //     // document.getElementById('cancel-btn').addEventListener('click', function(e){
    //     //     e.target.parentNode.parentNode.style.display = 'none';
    //     // });
    // });
  
}