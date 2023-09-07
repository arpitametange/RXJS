import { Component } from '@angular/core';
import { SubjectSERVICEService } from '../subject-service.service';

@Component({
  selector: 'app-secondsub-behaviour',
  templateUrl: './secondsub-behaviour.component.html',
  styleUrls: ['./secondsub-behaviour.component.css']
})
export class SecondsubBehaviourComponent {
  public username!:string
constructor(private service:SubjectSERVICEService){
  this.service.username.subscribe(res=>{
    this.username=res   ///here we assigned next value (updated valuee) which is in res to username
    console.log(res);
    

  })
}

//input value is in next
buttonclick(val:any){    
  this.username=val.value
  this.service.username.next(val.value)
}




}



