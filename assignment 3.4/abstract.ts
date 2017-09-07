//Created an abstract Class Department
abstract class Department {
    public name: string;
    //constructor method
    constructor(name: string) {
        this.name = name;
    }
    printName(): void {
        console.log(`Department's name is ${this.name}`);
    };
    //abstract method
    abstract printMeeting(day: string): void;
}

//Created a class AccountingDepartment which extends the abstract class Department
class AccountingDepartment extends Department {
    //constructor method
    constructor(name: string) {
        super(name);
    }
    //abstract class's method used
    printName() {
        super.printName();
    }
    //abstract method from abstract class implemented here
    printMeeting(day: string): void {
        console.log(`${this.name} Departemnt's meeting is on ${day}`)
    }
}

//Created another class which extends the abstract class
class FinanceDepartment extends Department {
    //constructor method
    constructor(name: string) {
        super(name);
    }
    //abstract class's method used
    printName() {
        super.printName();
    }
    //abstract method from abstract class implemented here
    printMeeting(day: string): void {
        console.log(`${this.name} Department's Meeting is on ${day}`);
    }
    //new method added to FinanceDepartment class
    noOfEployees(no: number): void {
        console.log(`${this.name} Department has ${no} Employees`);
    }
}

//New instance of AccountingDepartment Class created
const Accounting = new AccountingDepartment("Accounting");

//Methods invoked
Accounting.printName();
Accounting.printMeeting("Monday");


//New instance of FinanceDepartment created
const Finance = new FinanceDepartment("Finance");

//All the methods invoked
Finance.printName();
Finance.printMeeting("Tuesday");
Finance.noOfEployees(43);