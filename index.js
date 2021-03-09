//Get all inputs


function myFunction(){
    let ul = document.getElementById("list");
    let addList = document.getElementById("addlist");
    let li = document.createElement('li');
    li.setAttribute("id", addList.value);


// checkbox
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    li.appendChild(checkbox);

    
    checkbox.addEventListener('click', function(e) {
        if(this.checked) {
            e.currentTarget.parentNode.style.textDecoration = "line-through";
        }
            else {e.currentTarget.parentNode.style.textDecoration = "none";
        }
    });
        
    
// checkbox end

li.appendChild(document.createTextNode(addList.value));
ul.appendChild(li);
document.getElementById("addlist").value = "";

// Remove button
var rmvButton = document.createElement("button");
rmvButton.innerHTML = "Remove";
li.appendChild(rmvButton);
rmvButton.addEventListener('click', function(e) {
    e.currentTarget.parentNode.remove();
});
// rmvbtn end

}

function crossout(element) {
    element.style.setProperty("text-decoration", "line-through");
    
}


  
