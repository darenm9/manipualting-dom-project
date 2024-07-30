// referencing the elements that are mentioned in HTML
let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");

// add paragraph 

function addParagraph(){
    let newParagraph = document.createElement("p");
    newParagraph.innerText = 'Ohio Sigma Rizz';
    newParagraph.style.backgroundColor = "black";
    newParagraph.style.padding = "10px";
    newParagraph.style.color = "white";
    pDiv.appendChild(newParagraph);
    //document.getElementsById('p-button').appendChild(newParagraph);
}








// add image
function addImage(){
    let pikachuImage = document.createElement("img");
    pikachuImage.src="images/pikachu.png";
    
    
}

addImage.addEventListener("click", addImage);