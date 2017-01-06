import { Component } from '@angular/core';
import { Config } from 'app/config';
import { NgModule } from '@angular/core';

@Component({
    selector: 'dashboardSelector',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.css']
})

export class dashboardComponent {

    showStyle = false;

    Welcome = Config.Welcome;
    TaskHeading = Config.taskHeading;
    ToDoText = Config.Todo;
    InProgress = Config.InProgress;
    Completed = Config.Completed;

    newText: string;
    taskItem: string;
    temporaryTodoTaskArray: string;
    temporaryinProgressTaskArray: string;
    temporarycompletedTaskArray: string;
    todoTaskArray = [];
    inProgressTaskArray = [];
    completedTaskArray = [];

    todoText: string;
    ngOnInit() {

        //alert('hiiiii');
        //fetching the todo task lists from user's local storage to screen
        this.temporaryTodoTaskArray = window.localStorage.getItem("todoTaskArray");
        this.todoTaskArray = JSON.parse(this.temporaryTodoTaskArray);
        this.temporaryinProgressTaskArray = window.localStorage.getItem("inProgressTaskArray");
        console.log('inProgressTaskArray is ' + this.temporaryinProgressTaskArray);

        if (this.temporaryinProgressTaskArray == "") {
            this.inProgressTaskArray = [];
            console.log('inProgressTaskArray now is ' + this.inProgressTaskArray);
        } else {
            this.inProgressTaskArray = JSON.parse(this.temporaryinProgressTaskArray);

        }

        this.temporarycompletedTaskArray = window.localStorage.getItem("completedTaskArray");
        console.log('temporarycompletedTaskArray data is' + this.temporarycompletedTaskArray);

        if (this.temporarycompletedTaskArray == "") {
            this.completedTaskArray = [];
            console.log('temporarycompletedTaskArray data is' + this.temporarycompletedTaskArray);

        } else {
            this.completedTaskArray = JSON.parse(this.temporarycompletedTaskArray);
        }

    }

    //adding new task in list
    addItem() {
        // alert('hi' + this.newText);

        if (this.newText == "") {
            this.newText = this.newText.replace(/ /g, '');
        }

        if (this.newText == undefined) {
            alert('Please enter the task');
        } else {
            this.todoTaskArray.push(this.newText);
            window.localStorage.setItem("todoTaskArray", JSON.stringify(this.todoTaskArray));
            // this.newText = this.newText.replace(/ /g, ''); //removing extra spacing from text
        }

        this.newText = "";
        console.log('todoTaskArray' + this.todoTaskArray);
    }

    //move the selected task to to list
    moveToDoTask(taskToPush) {
        //  alert('pushed'+ taskToPush);
        window.localStorage.removeItem("todoTaskArray");
        this.todoTaskArray.push(taskToPush);
        window.localStorage.setItem("todoTaskArray", JSON.stringify(this.todoTaskArray));
        this.inProgressTaskArray.splice(this.inProgressTaskArray.indexOf(taskToPush), 1);
        window.localStorage.setItem("inProgressTaskArray", JSON.stringify(this.inProgressTaskArray));

    }


    //move the selected task to in progress list
    moveToInProgress(taskToPush, taskType) {
        switch (taskType) {
            case 'todotask':
                console.log('taskToPush is ' + taskToPush);
                // console.log('inProgressTaskArray is ' + this.inProgressTaskArray);
                window.localStorage.removeItem("todoTaskArray");

                this.inProgressTaskArray.push(taskToPush);
                window.localStorage.setItem("inProgressTaskArray", JSON.stringify(this.inProgressTaskArray));

                this.todoTaskArray.splice(this.todoTaskArray.indexOf(taskToPush), 1);
                window.localStorage.setItem("todoTaskArray", JSON.stringify(this.todoTaskArray));

                console.log('inProgressTaskArray' + this.inProgressTaskArray);
                break;
            case 'completedTask':
                window.localStorage.removeItem("inProgressTaskArray");

                this.inProgressTaskArray.push(taskToPush);
                window.localStorage.setItem("inProgressTaskArray", JSON.stringify(this.inProgressTaskArray));

                this.completedTaskArray.splice(this.completedTaskArray.indexOf(taskToPush), 1);
                window.localStorage.setItem("completedTaskArray", JSON.stringify(this.completedTaskArray));

                break;
            default:
                break;
        }
    }

    //move the selected task to commpleted 
    moveToCompleted(taskToPush) {
        //  alert('pushed'+ taskToPush);
        window.localStorage.removeItem("completedTaskArray");

        this.completedTaskArray.push(taskToPush);
        window.localStorage.setItem("completedTaskArray", JSON.stringify(this.completedTaskArray));

        this.inProgressTaskArray.splice(this.inProgressTaskArray.indexOf(taskToPush), 1);
        window.localStorage.setItem("inProgressTaskArray", JSON.stringify(this.inProgressTaskArray));

        console.log('completedTaskArray' + this.completedTaskArray);
    }

    //delete tasks from respective list
    removeItem(taskToRemove, taskType, index) {
        console.log('taskToRemove is' + taskToRemove + ' and test is' + taskType + 'index' + index);
        switch (taskType) {
            case 'inprogressTask':

                window.localStorage.removeItem("inProgressTaskArray");
                this.inProgressTaskArray.splice(index, 1);
                window.localStorage.setItem("inProgressTaskArray", JSON.stringify(this.inProgressTaskArray));

                break;
            case 'completedTask':
                window.localStorage.removeItem("inProgressTaskArray");
                this.completedTaskArray.splice(index, 1);
                window.localStorage.setItem("completedTaskArray", JSON.stringify(this.completedTaskArray));

                break;
            case 'todotask':
                window.localStorage.removeItem("todoTaskArray");

                this.todoTaskArray.splice(index, 1);
                window.localStorage.setItem("todoTaskArray", JSON.stringify(this.todoTaskArray));

                break;
            default:
                console.log('default statement');
                break;
        }

        console.log('taskToRemove this is' + JSON.stringify(this));
    }

    markImportant(tasks, taskType, i) {
        console.log('markImportant ' + tasks + 'index is ' + i + 'taskType is' + i);
        // for (var item in )
        
    }

    swipeHi() {
        alert('hi');
    }

    // updateText(tasks, taskType, i) {
    //     console.log('new text os ' + tasks + 'index is ' + i + 'taskType is' + taskType);
    //     // console.log('data is ' + JSON.stringify(document.getElementById('todoText')));
    //     // this.temp = document.getElementById('todoText').innerText;
        
    //     console.log('console is' + this.taskItem);
    // }

    updateText(newValue) {
  this.taskItem = newValue;
  console.log(newValue)
}
  getStyle() {
    if(this.showStyle){
      return "yellow";
    } else {
      return "";
    }
  }


}





