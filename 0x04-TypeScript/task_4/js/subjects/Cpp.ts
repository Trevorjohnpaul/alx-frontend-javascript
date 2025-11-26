// task_4/js/subjects/Cpp.ts
import { Subject } from "./Subject";
import { Subjects } from "./Teacher";

export class Cpp extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for Cpp";
  }

  getAvailableTeacher(): string {
    if (!this.teacher?.experienceTeachingC) {
      return "No available teacher";
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
