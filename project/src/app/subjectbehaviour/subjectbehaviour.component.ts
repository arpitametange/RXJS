import { Component } from '@angular/core';
import { SubjectSERVICEService } from './subject-service.service';

@Component({
  selector: 'app-subjectbehaviour',
  templateUrl: './subjectbehaviour.component.html',
  styleUrls: ['./subjectbehaviour.component.css']
})
export class SubjectbehaviourComponent {
  public username!:string
// 
constructor(private service:SubjectSERVICEService){
  this.service.username.subscribe(res=>{
    console.log(res);
    this.username=res
  })
}
  updatevalue(value:any){
    this.username=value.value
    this.service.username.next(value.value)

  }
}
