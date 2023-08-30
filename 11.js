var person = {
    firstName: "John",
    lastName: "Doe"
};

function greet(message) {
    console.log(message + " " + this.firstName);
}

greet.call(person, "สวัสดีครับ");
greet.apply(person, ["สวัสดีครับ"]);

var boundGreet = greet.bind(person);
boundGreet("สวัสดีครับ");