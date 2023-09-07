import { Component } from '@angular/core';
import { ForkJoinServiceService } from './fork-join-service.service';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent {
  constructor(private service:ForkJoinServiceService){
this.service.requestFromMultiple().subscribe(res=>{
  console.log('request froom multiple',res);
  
})
  }


}
