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

// Function declaration with  parameters
function printTeacher({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // J. Doe
console.log(printTeacher({ firstName: "Alice", lastName: "Smith" })); // A. Smith
