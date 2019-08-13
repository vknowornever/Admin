import { Component, OnInit } from '@angular/core';
class User{
  constructor(
  public task_id:string ='',
  public title:string ='',
  public due_date:string ='',
  public desc:string ='',
  public priority:string ='',
  public assigned_to:string ='',
  public assigned_date:string ='',
  public comment:string ='',
  public status:string ='',
  ){}
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
newUser:User[]=[];
  constructor() {
    this.newUser.push(new User("1","End To End","12-03-2028","Kiran","High","Kiran","10-03-2018","Develop As soon as possible","in-progress"));
   }

  ngOnInit() {
  }

}
