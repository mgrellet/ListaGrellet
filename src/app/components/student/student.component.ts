import {Component} from '@angular/core';
import {Student} from "../../interfaces/student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students: Student[] = [
    {name: 'Martin', lastName: 'Grellet', startDate: new Date(), payment: true},
    {name: 'Lalo', lastName: 'Landa', startDate: new Date(2020, 1, 1), payment: true},
    {name: 'Cosme', lastName: 'Fulanito', startDate: new Date(2022, 5, 5), payment: false},
  ]
}
