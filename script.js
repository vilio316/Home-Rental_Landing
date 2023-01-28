let hamburg= document.getElementById("hamburger");
hamburg.addEventListener("click", 
()=> {
    let links= document.getElementById("links");
     if(links.style.display !== "block"){
        links.style.display= "block"
     }
     else{links.style.display = "none"}
    
    })