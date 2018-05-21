import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts: any;
  hello: any;
  isEdit:boolean=false;
  constructor(private dataservice: DataService) {
    console.log("in user component constructor");
    console.log(dataservice.getPosts());
   }

  ngOnInit() {
    this.name = "John Doe ";
    this.age=30;
    this.email="johndoe@email.com"
    this.address={
      street:"Gandhinagar",
      city:"Mumbai",
      state:"Maharastra"
    }
    this.isEdit=false;
    this.hobbies=["Photography", "Hunting", "Travelling", "Watch Movies", "Listen to Music"];
    this.hello="Hello";
    this.dataservice.getPosts().subscribe((postjosn)=>{
      console.log(postjosn);
      this.posts=postjosn;
    });
  }
  onclick(){
    this.name="Brian Chopskeys";
    this.hobbies.push("Khali Baithna");
  }
  addHobbie(hobbie){
    console.log(hobbie);
    this.hobbies.unshift(hobbie);
    return false;
  }
  changeData(){
    console.log("Data changing");
  }
  deleteThis(hobbie){
    for(let i=0;i<this.hobbies.length;i++){
      if(this.hobbies[i]==hobbie){
        this.hobbies.splice(i,1);
      }
    }
  }
  toggleEdit(){
    this.isEdit=!this.isEdit;
  }
}
interface Address{
  street:string;
  city:string;
  state:string;
}