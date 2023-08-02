let textel=document.getElementById("text")
let totalel=document.getElementById("total")
let remainel=document.getElementById("remain")
remainel.innerText=textel.getAttribute("maxlength")
totalel.innerText=textel.value.length
textel.addEventListener("keydown",(e)=>{



        console.log(e);
        console.log(textel.value);
        console.log(typeof(textel.value.length));
        totalel.innerText=( textel.value.length )
        remainel.innerText=textel.getAttribute("maxlength")-(textel.value.length+1)
    
})