const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

let clickBtn = document.getElementById("btn");
let DocumentColor = document.querySelector(".color");
console.log(clickBtn);
clickBtn.addEventListener('click', function(){
 
    function bgcolor() {
        let color='';
        for(let i = 0; i<6; i++) {
            
            color+=hex[getRandomNumber()];
        }
        return final_color = "#" + color;
    }
    DocumentColor.textContent = bgcolor();
    document.body.style.backgroundColor = bgcolor();
});
function getRandomNumber(){
    return Math.floor((Math.random() * hex.length))};
  