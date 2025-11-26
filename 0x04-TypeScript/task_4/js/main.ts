// Import the classes and interface
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Subjects } from './subjects/Teacher';

// ---------- C++ Subject ----------
export const cpp = new Cpp();

export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// ---------- Java Subject ----------
export const java = new Java();

console.log('Java');
java.setTeacher(cTeacher); // Using same teacher as C++
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// ---------- React Subject ----------
export const react = new React();

console.log('React');
react.setTeacher(cTeacher); // Using same teacher as C++
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
