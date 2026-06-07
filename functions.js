"use Strict";
// ==== obecné funkce ========
// ===========================

//=== změna class
let changeClass = (nameOfConst,removeClass,addClass) => {
nameOfConst.classList.remove (removeClass)
nameOfConst.classList.add (addClass)
}