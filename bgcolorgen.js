let colorList = ["green", "red", "rgba(133,122,300)", "#f15020"];
let color = document.querySelector('.color');
let btnButton = document.getElementById('btnButton');
let bgContainer = document.getElementById("bgContainer");
let simpleBtn = document.getElementById("simpleBtn");
let hexBtn = document.getElementById("hexBtn");
let ishex;
simpleBtn.onclick = function() {
    colorList = ["green", "red", "rgba(133,122,300)", "#f15020"];
    color.innerHTML = ' #F1f5f8';
    bgContainer.style.backgroundColor = '#F1f5f8';
    simpleBtn.style.fontSize = "25px";
    simpleBtn.style.textDecoration = "underline";
    hexBtn.style.fontSize = "";
    hexBtn.style.textDecoration = "";
    ishex = false;
}
hexBtn.onclick = function() {
    colorList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    color.innerHTML = '#F1f5f8';
    bgContainer.style.backgroundColor = '#F1f5f8';
    hexBtn.style.fontSize = "25px";
    hexBtn.style.textDecoration = "underline";
    simpleBtn.style.fontSize = "";
    simpleBtn.style.textDecoration = "";
    ishex = true;
}

function getrandomFun() {
    return Math.floor(Math.random() * colorList.length);
}

function getRandomAcess() {
    return Math.floor(Math.random() * colorList.length);
}

btnButton.onclick = function() {
    if (ishex) {
        let hex = "#";
        for (let i = 0; i < 6; i++) {
            hex += colorList[getRandomAcess()];
        }
        console.log(hex);
        color.textContent = hex;
        bgContainer.style.backgroundColor = hex;
    } else {
        let randomNum = getrandomFun();
        color.textContent = colorList[randomNum];
        bgContainer.style.backgroundColor = colorList[randomNum];
    }
}

// btnButton.onclick = function() {
//     let hex = "#";
//     for (let i = 0; i < 6; i++) {
//         hex += colorListHex[getrandomFunHex()];
//     }
//     color.textContent = hex;
//     bgContainer.style.backgroundColor = hex;
// }