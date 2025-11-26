// task_4/js/subjects/Subject.ts
import { Subjects } from './Teacher';

export class Subject {
  teacher?: Subjects.Teacher;

  setTeacher(teacher: Subjects.Teacher) {
    this.teacher = teacher;
  }
}
