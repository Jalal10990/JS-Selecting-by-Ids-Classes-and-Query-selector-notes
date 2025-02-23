console.log("jalal")

//Document.get ElementbyClass method to target class
 
// let  boxData = document.getElementsByClassName("box")
// console.log(boxData)

// boxData[2].style.backgroundColor = "red"

//Document.get ElementbyElelment method to target element

// document.getElementById("greenBox").style.backgroundColor = "green"
// matched selector used likefirst box match then used and color 
// document.querySelector(".box").style.backgroundColor = "yellow"
console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "blue";
})

// getElementbytagName 
