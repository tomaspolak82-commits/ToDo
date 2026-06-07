"use Strict";
//=== Vyskakovací okno overlay ==//
    const btnNewTask = document.querySelector("#newTask")
    const overlay = document.querySelector("#overlay")
    const NewTaskInForm = document.querySelector ("#newTaskInForm")
    btnNewTask.addEventListener("click", function (event) {
        overlay.classList.remove("invisible")
        overlay.classList.add("visible")
    } )
    NewTaskInForm.addEventListener ("click", function(event) {
        event.preventDefault()
        console.log ("test")
    })

    overlay.addEventListener("click", function (event) {
        overlay.classList.remove("visible")
        overlay.classList.add("invisible")
    } )
