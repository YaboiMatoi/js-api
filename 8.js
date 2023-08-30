setTimeout(function() {
    console.log("ผ่านไป 2 วินาที");
}, 2000);

var counter = 0;
var interval = setInterval(function() {
    console.log("นับ:", counter);
    counter++;
    if (counter > 5) {
        clearInterval(interval);
    }
}, 1000);