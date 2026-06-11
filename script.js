"use Strict";
//======= Vyskakovací okno overlay ======//
//========================================

    const btnNewTask = document.querySelector("#newTask") // tlačítko pro vytvoření nového úkolu
    const overlay = document.querySelector("#overlay") // celý overlay - včetně pozadí a formuláře
    const TaskForm = document.querySelector ("#TaskForm") // formulář pro vytvoření úkolu
    const closeWinOfForm = document.querySelector("#closeNewTask") // tlačítko pro zavření okna ve formuláři
    const modalWindows = document.querySelector("#modalNewTask")  // samotné vyskakovací okno - formulář bez pozadí
    let tableTask = document.querySelector("#tableOfTask") // tabulka seznam úkolů
        
        let tasksJS = JSON.parse(localStorage.getItem("úkoly"))  //pro načtení úkolů z JS

        console.log (tasksJS)

        // když nebude nic v LS vypsat žádné úkoly, JINAK vypsat úkoly z LS
        if (tasksJS === null) {

            // *** obecná funkce newTr1 - newTr1 (element,innerContain, parent) ***
            newTr1("tr",`<td></td><td>Žádné úkoly</td><td></td><td></td><td></td>`, "#tableOfTask")
            
        } else {
            for (let i = 1; i<= tasksJS.length; i++){
                newTr1("tr",`<td>${i}</td><td>${tasksJS[i-1].name}</td><td>${tasksJS[i-1].importance}</td><td><input type="checkbox" name="done"></td><td><button id="del">Smazat</button></td>`, "#tableOfTask")
            }
        }

    
    btnNewTask.addEventListener("click", function (event) {
        changeClass(overlay,"invisible","visible")  //obecná funkce ("zavření") - proměnná, odebraný styl, přidaný styl
        document.querySelector("#nameTask").value = ""  // vymazání vyplněného pole název úkolu
        
    } )
    
    closeWinOfForm.addEventListener("click", (event) => {
        event.preventDefault()
        document.querySelector("#nameTask").value = "" // vymazání vyplněného pole název úkolu 
    })

    modalWindows.addEventListener("click", function(event){
        event.stopPropagation() // zabrání probublávání nahoru => nepřepne styl na overlay
    })

    // ======= kliknutí na tlačítko vytvořit úkol ve formuláři =======
    TaskForm.addEventListener ("submit", function(event) { 
        event.preventDefault()

        tableTask.innerHTML=""  
        // hlavička tabulky
        newTr1 ("tr",`<th></th><th>Název úkolu</th><th>Důležitost</th><th>Hotovo</th><th></th>`,"#tableOfTask" )
                   
        // přidávání úkolů za stavu LS = null
        if (tasksJS === null) {
            tasksJS = [{
                name:event.target[0].value,     //název úkolu
                importance: event.target[1].value  // priorita
            }]
            console.log (tasksJS)

            // vypsání do tabulky Seznam úkolů - "tableOfTask"
            for (let i = 1; i<= tasksJS.length; i++){
                newTr1("tr",`<td>${i}</td><td>${tasksJS[i-1].name}</td><td>${tasksJS[i-1].importance}</td><td><input type="checkbox" name="done"></td><td><button id="del">Smazat</button></td>`,"#tableOfTask")
            }

            localStorage.setItem("úkoly", JSON.stringify(tasksJS)) // uložení aktualizovaného pole do LS 
            changeClass(overlay,"visible", "invisible") //"zavření" okna - obecná funkce

            event.target[0].value = ""

        // přidávání úkolů pokud v LS něco je
        }else {

            tasksJS.push (({    // přidání nového objektu do pole 
            name:event.target[0].value,     //název úkolu
            importance: event.target[1].value  // priorita
            }))

            localStorage.setItem("úkoly", JSON.stringify(tasksJS)) // uložení aktualizovaného pole do LS 

            // vypsání do tabulky Seznam úkolů - "tableOfTask"
            for (let i = 1; i<= tasksJS.length; i++){
                    newTr1("tr",`<td>${i}</td><td>${tasksJS[i-1].name}</td><td>${tasksJS[i-1].importance}</td><td><input type="checkbox" name="done"></td><td><button id="del">Smazat</button></td>`,"#tableOfTask")
                }

            event.target[0].value = ""
            
            changeClass(overlay,"visible", "invisible") //"zavření" okna - obecná funkce   
            console.log (document.querySelectorAll("tr"))
        }
    })

    // == kliknutí na tlačítko zavřít okno ve formuláři
    closeWinOfForm.addEventListener ("click", function(event) { 
        event.preventDefault()
        changeClass(overlay, "visible", "invisible")
    })

    // === zavře overlay při kliknutí mimo formulář
    overlay.addEventListener("click", function (event) {
        changeClass(overlay,"visible","invisible")
    } )

// ======= kliknutí na tlačítko smazat v seznamu úkolů =======
//============================================================

let ListTaskBtnDel = document.querySelectorAll("#del")
console.log (ListTaskBtnDel)
    //pro každé nalezené tlačítko => najdi nejbližší TR a smaž ho
ListTaskBtnDel.forEach((oneBtn) => {
    oneBtn.addEventListener("click", (event)=>{
        event.preventDefault()
        oneBtn.closest("tr").remove()   // nejbližší TR a smaž ho
    })
}    )

