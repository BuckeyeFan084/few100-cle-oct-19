

export class Employee {
    // firstName: string;
    // lastName: string;
    // salary: number;

    // constructor(firstName: string, lastName: string, salary: number) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.salary = salary;
    // }

    constructor(public firstName: string, public lastName: string, public salary: number) { }

    giveRaise(amount: number) {
        this.salary += amount;
    }
    get currentSalary() {
        return this.salary;
    }
}

