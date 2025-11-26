// task_4/js/subjects/Teacher.ts

// Use a namespace for Subjects
export namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
    experienceTeachingJava?: number;
    experienceTeachingReact?: number;
  }
}
