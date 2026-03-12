class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    console.log(`Name of the Employee: ${name}`);
    console.log(`Monthly Salary: $${salary}`);
  }

 calculateAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calculateAnnualSalary() {
    const baseSalary = super.calculateAnnualSalary();
    const bonus = 0.1; 
    console.log(`Bonus (10% of the base salary): ${bonus}`);
    return (bonus * baseSalary) + baseSalary;
  }
}

const manager1 = new Manager('Angela Luca', 5000, 'Marketing');
const annualSalary1 = manager1.calculateAnnualSalary();

console.log(`Manager: ${manager1.name}`);
console.log(`Department: ${manager1.department}`);
console.log(`Annual Salary: $${annualSalary1}`);


const manager2 = new Manager('Jonelle Rozaliya', 5500, 'Marketing');
const annualSalary2 = manager2.calculateAnnualSalary();

console.log(`Manager: ${manager2.name}`);
console.log(`Department: ${manager2.department}`);
console.log(`Annual Salary: $${annualSalary2}`);
