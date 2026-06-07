"use Strict";
//======= Vyskakovací okno overlay ======//

    const btnNewTask = document.querySelector("#newTask") // tlačítko pro vytvoření nového úkolu
    const overlay = document.querySelector("#overlay") // celý overlay - včetně pozadí a formuláře
    const TaskForm = document.querySelector ("#TaskForm") // formulář pro vytvoření úkolu
    const closeWinOfForm = document.querySelector("#closeNewTask") // tlačítko pro zavření okna ve formuláři
    const modalWindows = document.querySelector("#modalNewTask")  // samotné vyskakovací okno - formulář bez pozadí
    let tableTask = document.querySelector("#tableOfTask") // tabulka seznam úkolů
        

    let tasks = [] // prázdné pole pro přidávání úkolů

    
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


    // == kliknutí na tlačítko vytvořit úkol ve formuláři ===
    TaskForm.addEventListener ("submit", function(event) { 
        event.preventDefault()

        let newTr = document.createElement("tr")
        newTr.innerHTML = ""
        document.querySelector("#tableOfTask").appendChild(newTr)

        
        // přidání úkolu do pole objektu
        tasks.push ({
            name:event.target[0].value,     //název úkolu
            importance: event.target[1].value  // priorita
        })

        console.log (tasks)

        // vypsání do tabulky Seznam úkolů - "tableOfTask"
        for (let i = 1; i<= tasks.length; i++){
                

            
            newTr.innerHTML = `<td>${i}</td><td>${tasks[i-1].name}</td><td>${tasks[i-1].importance}</td><td><input type="checkbox" name="done"></td><td><button>Smazat</button></td>`
            


            }
        
        

            
        
        
         
  
        

        

        


        









        event.target[0].value = ""
        
        changeClass(overlay,"visible", "invisible") //"zavření" okna - obecná funkce
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


    //== test úkoly - pole objektů

    // tasks = [{
    //     name: "název1",
    //     importance: "málo důležité"}]
    //     console.log (tasks)
    // tasks.push ({
    //     name: "název2",
    //     importance: "nedůležité"})
    // tasks.push ({
    //     name: "název3",
    //     importance: "hodně důležité"
    // })
    // console.log (tasks)
    // console.log (tasks[0])
    // console.log (tasks[0].name)
    // console.log (tasks[0].importance)


    