let input = document.querySelector("input");
let btn = document.querySelector("button");
let data = document.getElementById("data");

btn.addEventListener("click", function(){
    
    if(input.value === ""){
        alert("please write something");

    }else {
        let li = document.createElement("li");
        let btn = document.createElement("button");
        li.innerHTML = input.value;
        data.appendChild(li);
        li.appendChild(btn);
        btn.innerText = "Delete"
        input.value = "";


        btn.addEventListener('click', function(){
        li.remove(this.innerHTML);
    })
         
    }
    
});

    
