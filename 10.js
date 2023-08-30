var globalVar = "ตัวแปรระดับ Global";

function myFunction() {
    var localVar = "ตัวแปรระดับ Local";
    console.log(globalVar);
    console.log(localVar);
}

myFunction();
console.log(globalVar);