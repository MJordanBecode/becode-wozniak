document.title = "Modifying the DOM";

document.body.style.background = "rgb(7,89,52)";
  




// test de la couleur random à faire 
// let arr = [];
// for(let i = 0 ; i < 3 ; i++ ){
//     const a = parseInt(Math.random(0)*255);
//     console.log(a);
//     arr=[a+1];
// }
// console.log(arr)
// console.log("rgb ("+arr[0]+", "+arr[0]+", "+arr[0]+" )");

// console.log("couleur : "+ color +"= "+color +" = "+color);
// console.log("nombre random : " + a);

let secondChild = document.body.children[0];

 for (var child of secondChild.children) {
            console.log(child); // Display each child element
        }

var bodyElement = document.body;  

for (var i = 0; i < bodyElement.children.length; i++) {
    var child = bodyElement.children[i];    
    console.log(child); // Display each child element
}