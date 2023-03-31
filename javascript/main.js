

// var names =  [
//                 ["Steve","Eve","Adam","John","Vince"],
//                 ["Mango","Banana","Apple","Grape","Kamote"],
//                 ["vivo","oppo","nokia","motolola","Sony"]
//              ];

// for (a = 0; a <= names.length; a++) {

//     for (b = 0; b <= names[a].length - 1; b++) {

//         console.log(names[a][b] +" ["+a+"] ["+b+"]");

//     }
// }

// ======================================================================================
//                                  TEXT GROW SCRIPT
// ======================================================================================


console.log(Number("123123"));
console.log(Number("'123123'"));
// console.log(names[0].length);


function growingText() {

    document.querySelector("div.a").style.fontSize = "2rem";
    document.querySelector("div.a").style.transition = "all .3s";
    document.querySelector("div.a").style.position = "relative";

}

function shrinkText() {

    document.querySelector("div.a").style.fontSize = "1rem";
    document.querySelector("div.a").style.position = "relative";

}

// document.getElementById("num1").setAttribute("disabled", "disabled");

// document.getElementById("num1").setAttribute("placeholder", "Seconds");

// ======================================================================================
//                              conversion activity start
// ======================================================================================

function MStoSEC(a) {

    return a / 1000;

}

function SECtoMS(a) {

    return a * 1000;

}

function SECtoMIN(a) {

    return a / 60;

}

function MINtoSEC(a) {

    return a * 60;

}

function MINtoHR(a) {

    return a / 60;

}

function HRtoMIN(a) {

    return (a * 60);

}


function getSelected() {

    let a = document.getElementById("dropz").value;
    let z = document.getElementById("num1").value;

    switch(a) {

        case "mts": 
            document.getElementById("num1").setAttribute("placeholder", "Millisecond/s");
            document.getElementById("num2").setAttribute("placeholder", "Seconds");
            document.getElementById("num2").value = MStoSEC(z).toFixed(2) + " Second/s";
            break;

        case "stm": 
            document.getElementById("num1").setAttribute("placeholder", "Second/s");
            document.getElementById("num2").setAttribute("placeholder", "Minute/s");
            document.getElementById("num2").value = SECtoMIN(z).toFixed(2) + " Minute/s";
            break;

        case "mth": 
            document.getElementById("num1").setAttribute("placeholder", "Minute/s");
            document.getElementById("num2").setAttribute("placeholder", "Hour/s");
            document.getElementById("num2").value = MINtoHR(z).toFixed(2) + " Hour/s";
            break;
        case "mtsr": 
            document.getElementById("num2").setAttribute("placeholder", "Millisecond/s");
            document.getElementById("num1").setAttribute("placeholder", "Seconds");
            document.getElementById("num2").value = SECtoMS(z).toFixed(2) + " Millisecond/s";
            break;

        case "stmr": 
            document.getElementById("num2").setAttribute("placeholder", "Second/s");
            document.getElementById("num1").setAttribute("placeholder", "Minute/s");
            document.getElementById("num2").value = MINtoSEC(z).toFixed(2) + " Seconds/s";
            break;

        case "mthr": 
            document.getElementById("num2").setAttribute("placeholder", "Minute/s");
            document.getElementById("num1").setAttribute("placeholder", "Hour/s");
            document.getElementById("num2").value = HRtoMIN(z).toFixed(2) + " Minute/s";
            break;

    }

}