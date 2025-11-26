// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log(teacher3);



interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
};

console.log(director1);



// Interface for the function
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

//implemented function
const printTeacher: printTeacherFunction = (teacher) => {
  return `${teacher.firstName[0]}. ${teacher.lastName}`;
};

// Example of the use of the function
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // Output: J. Doe
console.log(printTeacher({ firstName: "Alice", lastName: "Smith" })); // Output: A. Smith
