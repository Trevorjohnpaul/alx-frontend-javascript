// task_4/js/subjects/Java.ts
import { Subject } from "./Subject";
import { Subjects } from "./Teacher";

export class Java extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for Java";
  }

  getAvailableTeacher(): string {
    if (!this.teacher?.experienceTeachingJava) {
      return "No available teacher";
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
