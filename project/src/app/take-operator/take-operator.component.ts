import { Component } from '@angular/core';
import { from, interval, take, takeLast, takeUntil, timer, toArray } from 'rxjs';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.css']
})
export class TakeOperatorComponent {

 public  arrya= from([1,2,3,4,5,6])

   
   constructor(){
    //take
    //print == 1.2,3
    this.arrya.pipe(take(3)).subscribe(res=>{
      console.log('take ==',res);
    })

    //takeuntil
        let inter=interval(1000)  //it generate 1,2,3,4... 
        let conditon=timer(9000)  //  until 9 sec
    inter.pipe(takeUntil(conditon)).subscribe(res=>{
      console.log('Take until ',res); //generate numbers until 9 sec 
    })


    //take last
    this.arrya.pipe(takeLast(2)).subscribe(res=>{
      console.log('take last 2 from 1,2,3,4,5,6 =',res);
      
    })

    
   }


}
