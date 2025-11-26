// task_4/js/subjects/React.ts
import { Subject } from "./Subject";
import { Subjects } from "./Teacher";

export class React extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for React";
  }

  getAvailableTeacher(): string {
    if (!this.teacher?.experienceTeachingReact) {
      return "No available teacher";
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
