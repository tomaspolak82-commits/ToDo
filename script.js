"use Strict";
//=== Vyskakovací okno overlay ==//
    const btnNewTask = document.querySelector("#newTask")
    const overlay = document.querySelector("#overlay")
    const NewTaskInForm = document.querySelector ("#newTaskInForm")
    const modalWindows = document.querySelector("#modalNewTask") 
    btnNewTask.addEventListener("click", function (event) {
        overlay.classList.remove("invisible")
        overlay.classList.add("visible")
    } )

    modalWindows.addEventListener("click", function(event){
        event.stopPropagation() // zabrání probublávání nahoru => nepřepne styl na overlay
    })

    NewTaskInForm.addEventListener ("click", function(event) {
        event.preventDefault()
        console.log (event)
    })


  





    // === zavře overlay => dát až na závěr po vyplnění formuláře
    overlay.addEventListener("click", function (event) {
        overlay.classList.remove("visible")
        overlay.classList.add("invisible")
    } )
