let hamburg= document.getElementById("hamburger");
let links= document.getElementById("links");
hamburg.addEventListener("click", 
()=> {
     if(links.style.display !== "block"){
        links.classList.add("shown");
     }
     else{links.classList.remove("shown")}
    
    })

    let closer = document.querySelector("#close");
    closer.addEventListener("click", ()=>{
    links.classList.remove("shown");
    }
    )