"use Strict";
// ==== obecné funkce ========
// ===========================

//=== změna class
let changeClass = (nameOfConst,removeClass,addClass) => {
nameOfConst.classList.remove (removeClass)
nameOfConst.classList.add (addClass)
}

// ==== vytvoření řádku v tabulce newTr("tr", zadny ukol, "#table")
let newTr1 = (element,innerContain,parent)=>{
let addElement = document.createElement(element)
addElement.innerHTML = innerContain
document.querySelector(parent).appendChild(addElement)
}




