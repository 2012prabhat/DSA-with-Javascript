
function declaration(){
    console.log("Hii this is function declaration")
}


// expression() //  it gives intialization erorr because it is not hoisted
const expression = function(){
    console.log("This is function expression")
};

// IIFE
(()=>{
    console.log("Hii from IIFE")
})();