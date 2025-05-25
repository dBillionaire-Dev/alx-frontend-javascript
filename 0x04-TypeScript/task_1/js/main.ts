const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  contract: false, // extra property not explicitly defined, allowed
};

const teacher2: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  yearsOfExperience: 10,
  remote: true // another arbitrary property
};

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

