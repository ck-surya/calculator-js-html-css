// var result = document.getElementById("display");

// var buttons = document.getElementById("buttons");

// buttons.addEventListener("click",function(e) {
//     let target = e.target;
//     if (target.classList.contains("numbers")) {
//         result.innerHTML+=target.innerHTML;
//     }
//     else if (target.classList.contains("operators")) {
//         var last = result.innerHTML[result.innerHTML.length-1];
//         if (["+","-","*","/","."].includes(last)) {
//             result.innerHTML = result.innerHTML.slice(1,-1)+target.innerHTML;
//             console.log(result.innerHTML.trimStart())
//         }else{
//             result.innerHTML+=target.innerHTML;
//         }
//     }else if(target.classList.contains("c")){
//     let ck = "";
//     let s = result.innerHTML.trimStart();
//     for (let i=0; i<s.length-1; i++){
//         ck+=s[i];
//     }
//     result.innerHTML = ck;

//     }else if(target.classList.contains("ac")){
//         result.innerHTML = "";
//     }
//     else if(target.classList.contains("equals")){
//         let re = eval(result.innerHTML);
//         if(re!=Infinity){
//             result.innerHTML = re;
//         }else{
//             result.innerHTML = "Syntax error";
//         }
//     }
// })




// screen target
var screen = document.getElementById("display");
var history = document.getElementById("history");
// buttons perent ko target
let buttons = document.getElementById("buttons");

buttons.addEventListener("click", function (chhotu) {
    let chaudhary = chhotu.target;
    if (screen.innerHTML == "0") {
        screen.innerHTML = "";
    }
    if (chaudhary.classList.contains("numbers")) {
        screen.innerHTML += chaudhary.innerHTML;


    } else if (chaudhary.classList.contains("operators")) {
        let last = screen.innerHTML[screen.innerHTML.length - 1];
        if (["-", "+", "/", "*"].includes(last)) {
            screen.innerHTML = screen.innerHTML.slice(0, -1) + chaudhary.innerHTML;
        } else {
            if (last == ".") {
                screen.innerHTML += "0" + chaudhary.innerHTML;
            } else {
                screen.innerHTML += chaudhary.innerHTML;
            }
        }
    } else if (chaudhary.classList.contains("ac")) {
        screen.innerHTML = "0";
    } else if (chaudhary.classList.contains("c")) {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
        if (screen.innerHTML.length == 0) {
            screen.innerHTML = "0";
        }
    }
    else if (chaudhary.classList.contains("equals")) {
        let last = screen.innerHTML[screen.innerHTML.length - 1];
        if (["-", "+", "/", "*"].includes(last)) {
            screen.innerHTML = screen.innerHTML.slice(0, -1);
        }
        let result = eval(screen.innerHTML);
        if (result != Infinity) {
            screen.innerHTML = result;
        } else {
            screen.innerHTML = "Syntax error";
        }
    } else if (chaudhary.classList.contains("point")) {
        let s = screen.innerHTML;
        flag = true;
        for (let i = s.length - 1; i >= 0; i--) {
            if (["+", "-", "*", "/"].includes(s[i])) {
                break;
            }
            if (s[i] == chaudhary.innerHTML) {
                flag = false;
                break;
            }
        }
        if (flag) {
            screen.innerHTML += chaudhary.innerHTML;
        } else {
            alert("You can use it only once!!!");
        }
    }
})

this.buttons.addEventListener("keydown", function (ck) {
    if (screen.innerHTML == "0") {
        screen.innerHTML = "";
    }
    if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(ck.key)) {
        screen.innerHTML += ck.key;
    } else if (["+", "-", "/", "*",].includes(ck.key)) {
        let last = screen.innerHTML[screen.innerHTML.length - 1];
        if (["-", "+", "/", "*"].includes(last)) {
            screen.innerHTML = screen.innerHTML.slice(0, -1) + ck.key;
        } else {
            screen.innerHTML += ck.key;
        }
    } else if ("=" === ck.key || "Enter" === ck.key) {
        let result = eval(screen.innerHTML);
        console.log(result);
        if (result != Infinity) {
            screen.innerHTML = result;
            console.log(screen.innerHTML)
        } else {
            screen.innerHTML = "Syntax error";
        }
    } else if (ck.key === ".") {
        let s = screen.innerHTML;
        flag = true;
        for (let i = 0; i < s.length; i++) {
            if (s[i] == ck.key) {
                flag = false;
                break;
            }
        }
        if (flag) {
            screen.innerHTML += ck.key;
        } else {
            alert("You can use it only once!!!");
        }
    } else if (ck.key === "Backspace") {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
        if (screen.innerHTML.length == 0) {
            screen.innerHTML = "0";
        }
    } else {
        screen.innerHTML =screen.innerHTML;
    }
})