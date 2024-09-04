let ram = document.querySelector("#btn");
let color = document.querySelector("#color-code")


const getColor = () => {
    const randomNumber = Math.floor(Math.random()* 16777215);//for hexadecimal code
    let randomCode = "#"+randomNumber.toString(16);
    color.innerHTML = randomCode;
    document.body.style.backgroundColor = randomCode;
   
}




ram.addEventListener("click",function(e){
    e.preventDefault();
    getColor();
})
