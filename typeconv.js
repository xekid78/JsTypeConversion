(function() {
    'use strict'

    console.log("** ケース1 **");
    var num1 = 3.15;
    console.log(num1);
    console.log(Math.floor(num1));
    console.log();

    console.log("** ケース２ **");
    var num2 = 5;
    console.log(num2);
    console.log(num2.toFixed(1));
    console.log();

    console.log("** ケース３ **");
    var text = "123";
    console.log(text);
    console.log(Number(text) * 100);
    console.log(Number(text).toFixed(1));

})();
