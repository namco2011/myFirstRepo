//Exercise 1: .filter('not')
String.prototype.filter = function(word){
    var arr = this.split(" ");
    var result = "";
    for(let i=0;i<arr.length;i++){
        if(word!=arr[i]) result += " "+arr[i];
    }
    return result;
}
console.log("Exercise 1: This house is not nice!".filter("not"));

//Exercise 2: bubbleSort();
Array.prototype.bubbleSort = function(){
    var n = this.length;
    for (let i = 0; i < n-1; i++)
        for (let j = 0; j < n-i-1; j++)
            if (this[j] > this[j+1])
            {
                // swap this[j+1] and this[j]
                let temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp;
            }
    return "Exercise 2: ["+this.toString()+"]";
}
console.log([6,4,0, 3,-2,1].bubbleSort());

//Exercise 3a: teach function using function constructor;
class Person{
    constructor(name) {
        this.name = name;
    }
}
class Teacher extends Person{
    constructor(name) {
        super(name);
    }
}
Teacher.prototype.teach = function(subject){
    console.log(this.name+" is now teaching "+subject);
}
const tina = new Teacher("Tina");
tina.teach("WAP");

//Exercise 3b: teach function using Object.create
const person = {
    name: 'Tina',
    teach: function (subject){return this.name + ' is now teaching ' + subject}
}
const tina1 = Object.create(person);
tina1.name = "Tina Xing";
console.log(tina1.teach("WAP"));

//exercise 4 using Function Constructor approach
class Person1{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log("Greetings, my name is "+this.name+ " and I am "+ this.age+" years old.");
    }
    salute(){
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }
}
class Student1 extends Person1{
    constructor(name, age, major) {
        super(name,age);
        this.major = major;
    }
    greeting(){
        console.log("Hey, my name is "+this.name+ " and I am studying "+ this.major+".");
    }
}
class Professor1 extends Person1{
    constructor(name, age, department) {
        super(name,age);
        this.department = department;
    }
    greeting(){
        console.log("Good day, my name is "+this.name+ " and I am in the "+ this.department+".");
    }
}
professor1 = new Professor1("John",55,"ComPro");
student1 = new Student1("Nam",39,"Computer Sciences");
professor1.salute();
professor1.greeting();
student1.salute();
student1.greeting();

//exercise 4 using prototype object approach
const Person2 = {
    name:"Nam",
    age:39,
    greeting: function (){
        console.log("Greetings, my name is "+this.name+ " and I am "+ this.age+" years old.");
    },
    salute(){
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }
}
const Student2 = Object.create(Person2);
Student2.major = "unknown";
Student2.greeting = function (){
    console.log("Hey, my name is "+this.name+ " and I am studying "+ this.major+".");
}
const Professor2 = Object.create(Person2);
Professor2.department = "unknown";
Professor2.greeting = function (){
    console.log("Good day, my name is "+this.name+ " and I am in the "+ this.department+".");
}
nam = Object.create(Student2);
nam.name = "Nam";
nam.major = "Computer Sciences"
nam.greeting();
nam.salute();
john = Object.create(Professor2);
john.name="John";
john.department = "ComPro";
john.greeting();
john.salute();