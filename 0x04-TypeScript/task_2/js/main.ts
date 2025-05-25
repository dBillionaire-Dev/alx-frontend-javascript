// interfaces.ts
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// classes.ts
import { DirectorInterface, TeacherInterface } from './interfaces';

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// main.ts
import { Director } from './classes';
import { Teacher } from './classes';

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

console.log(createEmployee(200));   
console.log(createEmployee(1000));  
console.log(createEmployee('$500'));

type Employee = Director | Teacher;

interface Director {
  salary: number;
  role: 'director';
}

interface Teacher {
  salary: number;
  role: 'teacher';
}

function createEmployee(salary: number): Employee {
  if (salary > 500) {
    return { salary, role: 'director' };
  } else {
    return { salary, role: 'teacher' };
  }
}

function isDirector(employee: Employee): employee is Director {
  return employee.role === 'director';
}

function workDirectorTasks(): void {
  console.log('Getting to director tasks');
}

function workTeacherTasks(): void {
  console.log('Getting to work');
}

function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    workDirectorTasks();
  } else {
    workTeacherTasks();
  }
}

// Testing:
executeWork(createEmployee(200));  // Output: Getting to work
executeWork(createEmployee(1000)); // Output: Getting to director tasks

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Testing:
console.log(teachClass('Math'));    // Teaching Math
console.log(teachClass('History')); // Teaching History
