function nameValidation(){
    let name = document.getElementById("name").value;
    if(name == "" || !(isNaN(name)) || name.length < 4 || name.length >40){        
        document.getElementById("name").style.backgroundColor = "rgb(246, 195, 195)";
    } 
    else {        
        document.getElementById("name").style.backgroundColor = "white";
    }

} 