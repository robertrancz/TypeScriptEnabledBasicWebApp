export class TestClass
{
    constructor(private name: string) { }

    Hello() {
        console.log("Hello " + this.name);
    }
}

var test = new TestClass("Robert");
test.Hello();