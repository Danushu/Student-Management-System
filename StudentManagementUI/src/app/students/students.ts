import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student } from '../services/student';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students implements OnInit {

  students: any[] = [];

  isEdit: boolean = false;

  student: any = {
    studentId: 0,
    studentName: '',
    email: '',
    age: 0,
    course: ''
  };

  constructor(private studentService: Student) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (res: any[]) => {
        this.students = res;
      },
      error: (err) => console.log(err)
    });
  }

  saveStudent(): void {

    if (!this.isEdit) {

      this.studentService.addStudent(this.student).subscribe({
        next: () => {
          alert('Student Added Successfully');
          this.loadStudents();
          this.clear();
        },
        error: (err) => console.log(err)
      });

    } else {

      this.studentService.updateStudent(this.student.studentId, this.student).subscribe({
        next: () => {
          alert('Student Updated Successfully');
          this.loadStudents();
          this.clear();
        },
        error: (err) => console.log(err)
      });

    }

  }

  edit(student: any): void {

    this.student = { ...student };
    this.isEdit = true;

  }

  delete(id: number): void {

    if (confirm("Are you sure you want to delete this student?")) {

      this.studentService.deleteStudent(id).subscribe({
        next: () => {
          alert("Student Deleted Successfully");
          this.loadStudents();
        },
        error: (err) => console.log(err)
      });

    }

  }

  clear(): void {

    this.student = {
      studentId: 0,
      studentName: '',
      email: '',
      age: 0,
      course: ''
    };

    this.isEdit = false;

  }

}