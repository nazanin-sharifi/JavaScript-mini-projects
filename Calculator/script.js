var showResult = document.getElementById("showResult");

// values
let numBtn = document.querySelectorAll(".val")
numBtn.forEach(function (item) {
    item.onclick = function () { showResult.value += this.value; };
})

// delete
let numBtnDel = document.getElementById("del");
numBtnDel.addEventListener("click", function () { showResult.value = showResult.value.slice(0, -1); });
numBtnDel.addEventListener("dblclick", function () { showResult.value = ""; });


// Calculate
let Calculate = document.getElementById("Calculate");
Calculate.addEventListener("click", outpot);

function outpot() {
    showResult.value = eval(showResult.value);
};