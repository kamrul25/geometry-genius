
let serial = 0
document.getElementById('triangle-btn').addEventListener('click', function(){
    getElementValueById('triangle-first-field','triangle-second-field','triangle-name')

});

function getElementValueById(firstElement, secondElement, thirdElement){
    const firstValue = document.getElementById(firstElement).value ;
    const secondValue = document.getElementById(secondElement).value ;
    const areaValue = 0.5 * parseFloat(firstValue) * parseFloat(secondValue);
    const name = document.getElementById(thirdElement).innerText;
    displayData(name, areaValue);
}

document.getElementById('rectangle-btn').addEventListener('click', function(){
    const firstValue = document.getElementById('rectangle-first-field').value ;
    const secondValue = document.getElementById('rectangle-second-field').value ;
    const areaValue =  parseFloat(firstValue) * parseFloat(secondValue);
    const name = document.getElementById('rectangle-name').innerText;
    displayData(name, areaValue);
})

function displayData(name , areaValue){
    serial++;
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="text-black">${serial}.</td>
      <td class="text-black">${name}</td>
      <td class="text-black">${areaValue} cm<sup class="text-black">2</sup></td>
      <td>
      <button class=" bg-blue-500 text-white py-2 font-bold border-none rounded-lg">Convert to m <sup class="text-white">2</sup></button>
      </td>
    `;
    container.appendChild(tr);
}