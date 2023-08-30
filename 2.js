var regex = /[0-9]{3}-[0-9]{2}-[0-9]{4}/;
var isValid = regex.test("123-45-6789");
console.log("เลขประจำตัวประชาชนถูกต้อง:", isValid);