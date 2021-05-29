import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  todoTask: string = "";
  todoTasks = [];
  localTodoList: any;
  data = [];
  done = [];
  // todoTask;
  // todoTask
  ngOnInit() {


    if (localStorage.getItem("todotasksCompleted") === undefined) {
      localStorage.setItem('todotasksCompleted',"[]")
    }
    if (localStorage.getItem("todotasks") === undefined) {
      localStorage.setItem('todotasksCompleted',"[]")
    }
    this.data = JSON.parse(localStorage.getItem('todotasks'))
    this.done = JSON.parse(localStorage.getItem('todotasksCompleted'))

    // this.data = this.data ? this.data.split(',') : [];

    // if(localStorage.getItem("todotasks")!= null){
    //   this.data = JSON.parse(localStorage.getItem("todotasks"));

    //   alert("dsds")
    // }else{
    //   // this.data =[]
    //   localStorage.setItem("todotasks",JSON.stringify(this.data))
    //   this.data = JSON.parse(localStorage.getItem("todotasks"));

    // }

    // this.data = JSON.parse(localStorage.getItem("todotasks"));
  }
  constructor() { }
  addToDo(todolist: String) {
    if (todolist != "") {
      console.log(this.data)
      if(this.data==null){
        this.data=[]
        localStorage.setItem('todotasks', JSON.stringify(this.data));
      }
      this.todoTask = ""

      this.data = JSON.parse(localStorage.getItem("todotasks"))
      // alert(this.data)
      this.data.push(todolist.trim())
      localStorage.setItem('todotasks', JSON.stringify(this.data));
      console.log(this.data);

    }

  }
  reomvetask(e: String) {
   
    // alert(e)
    // this.data.splice(index, 1);
    for (let order of this.data) {
      if (order === e) {
        this.data.splice(this.data.indexOf(order), 1);
        break;
      }
    }
    this.data = this.data.filter(function (el) { return el != e; });
    localStorage.setItem('todotasks', JSON.stringify(this.data));

    this.done = JSON.parse(localStorage.getItem('todotasksCompleted'))
    if(this.done==null){
      this.done=[]
      localStorage.setItem('todotasksCompleted', JSON.stringify(this.done));
    }



    this.done = JSON.parse(localStorage.getItem("todotasksCompleted"))
    console.log(this.done)
    // alert(this.done)
    // alert(this.data)
    this.done.push(e)
    localStorage.setItem('todotasksCompleted', JSON.stringify(this.done));
    console.log(this.done);
    //  break;

    //   console.log(this.data)
    //   // this.todoTask = ""

    //   this.done = JSON.parse(localStorage.getItem("todotasks"))
    //   // alert(this.data)
    //   this.done.push(e)
    //   localStorage.setItem('todotasksCompleted', JSON.stringify(e));
    //   this.done = JSON.parse(localStorage.getItem("todotasks"))
    //   this.done.push(e)
    //   console.log(this.done);
  }

  // doneTask(e) {
  //   alert(e)

  // }


}
