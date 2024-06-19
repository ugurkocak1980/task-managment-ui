import { Component, OnInit } from '@angular/core';
import { Priority, Task } from '../../model/task';
import { CrudService } from '../../service/crud.service';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-dashbaord',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './dashbaord.component.html',
  styleUrl: './dashbaord.component.css'
})
export class DashbaordComponent implements OnInit {

  taskObj: Task = new Task();
  taskArr: Task[] = [];


  addTaskName: string = '';

  addTaskDate: string = '';

  editTaskValue: string = '';
  editTaskDone: boolean = false;
  editTaskPriority: Priority = Priority.NORMAL;



  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.editTaskValue = '';
    this.editTaskDone = false;
    this.addTaskName = '';
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }
  getAllTask() {
    this.crudService.getAllTask().subscribe(res => {
      this.taskArr = res;
    }, err => {
      alert("Unable to get list of tasks")
    });
  }

  addTask() {
    this.taskObj.name = this.addTaskName;

    this.taskObj.created = this.addTaskDate;

    this.taskObj.done = this.editTaskDone;
    this.taskObj.priority = this.editTaskPriority;

    this.crudService.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
      this.addTaskName = '';

    }, err => {
      alert(err);
    });
  }

  editTask() {
    this.taskObj.name = this.editTaskValue;
    this.taskObj.done = this.editTaskDone;
    this.taskObj.priority = this.editTaskPriority;

    this.crudService.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("Failed to update task")
    });
  }

  deleteTask(etask: Task) {
    this.crudService.deleteTask(etask).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("Failed to delete task");
    });
  }


  call(etask: Task) {
    this.taskObj = etask;
    this.editTaskValue = etask.name;
    this.editTaskDone = etask.done;
  }

  onSelecDone(action: string) {
    if (action == "true") {
      this.editTaskDone = true;
    } else {
      this.editTaskDone = false;
    }
  }

  onSelecPriority(action: string) {
    if (action == "LOW" || action == "") {
      this.editTaskPriority = Priority.LOW
    } else if (action == "NORMAL") {
      this.editTaskPriority = Priority.NORMAL
    } else if (action == "URGENT") {
      this.editTaskPriority = Priority.URGENT
    }
  }

}
