let uc = require("upper-case");

function greeter() {
  const message = uc.upperCase("hello world");   
  for (let i = 0; i < 10; i++) {
    console.log(message);   }
}
greeter();

