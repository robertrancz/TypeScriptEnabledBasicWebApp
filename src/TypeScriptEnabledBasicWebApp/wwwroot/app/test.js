"use strict";
var TestClass = (function () {
    function TestClass(name) {
        this.name = name;
    }
    TestClass.prototype.Hello = function () {
        console.log("Hello " + this.name);
    };
    return TestClass;
}());
exports.TestClass = TestClass;
var test = new TestClass("Robert");
test.Hello();
