/////////////////////////////////////////////////////////////////////////////////////Паттерн Prototype

/*interface IEmployee { 
    position: string; 
    department: string; 
    experience: boolean; 
  } 
   
  class Employee implements IEmployee { 
    position: string; 
    department: string; 
    experience: boolean; 
    constructor( 
      employeePosition: string, 
      employeeDepartment: string, 
      employeeExperience: boolean 
    ) { 
      this.position = employeePosition; 
      this.department = employeeDepartment; 
      this.experience = employeeExperience; 
    } 
    clone() { 
      return new Employee(this.position, this.department, this.experience); 
    } 
  } 
   
  const employee = new Employee("engineer", "building", true); 
   
  const employee1 = employee.clone(); 
  const employee2 = employee.clone(); 
  employee2.experience = false; 
   
  console.log(employee1); 
  console.log(employee2);*/

/////////////////////////////////////////////////////////////////////////////////////Паттерн Mediator

/*interface IMaster { 
    paint(employeeName: string): void,
    dig(employeeName: string): void
  } 
  
  interface IEmployee {
    employeeName: string;
    work(): void
  }
   
  class Master implements IMaster { 
    paint(employeeName: string) { 
      console.log(${employeeName} идёт красить);
    }
    dig(employeeName: string) { 
      console.log(${employeeName} идёт копать);
    }
  } 
  
  const mediator = new Master();
  
  class Employee implements IEmployee { 
    employeeName: string;
    mediator: IMaster;
  
    constructor(employeeName: string, mediator: IMaster) {
      this.employeeName = employeeName;
      this.mediator = mediator;
    }
  
    work() {
      console.log(this.mediator.dig(this.employeeName));
    }
  } 
  
  const employee = new Employee("Dan", mediator);
   
  console.log(employee.work());*/

/////////////////////////////////////////////////////////////////////////////////////Паттерн Strategy

/*interface ISalary {
    salary(): void;
    minSalary: number;
  }
  
  class Mechanic implements ISalary {
    minSalary: number;
  
    constructor(minSalary: number) {
      this.minSalary = minSalary;
    }
  
    salary() {
      const mechanicAmount = this.minSalary * 1.2;
      console.log(`Заработная плата слесаря - ${mechanicAmount}`);
    }
  }
  
  class Master implements ISalary {
    minSalary: number;
  
    constructor(minSalary: number) {
      this.minSalary = minSalary;
    }
  
    salary() {
      const masterAmount = this.minSalary * 1.7;
      console.log(`Заработная плата мастера - ${masterAmount}`);
    }
  }
  
  const mechanic = new Mechanic(1000);
  const master = new Master(1000);
  
  class Context {
    workerSalary: ISalary;
  
    constructor(workerSalary: ISalary) {
      this.workerSalary = workerSalary;
    }
  
    setSalary() {
      console.log(this.workerSalary.salary());
    }
  }
  
  const mechanicSalary = new Context(mechanic);
  const masterSalary = new Context(master);
  
  console.log(mechanicSalary.setSalary());
  console.log(masterSalary.setSalary());*/
