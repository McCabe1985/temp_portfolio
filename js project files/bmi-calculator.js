const btn = document.querySelector(".calculate");
let result = document.querySelector(".result");

btn.addEventListener("click", function() {
    let weight = document.querySelector(".weight").value;
    let height = document.querySelector(".height").value;
    result.innerText=`Your BMI is ${Math.round(weight / Math.pow(height, 2) * 10000)} you little stunner!`;
})