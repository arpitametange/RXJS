import { Component, OnInit } from '@angular/core';
import { filter, from,map, reduce } from 'rxjs';

@Component({
  selector: 'app-from-operator',
  templateUrl: './from-operator.component.html',
  styleUrls: ['./from-operator.component.css']
})
export class FromOperatorComponent implements OnInit {


  reducedata:any
  trasnformeddata:any=[]

  public array=[1,2,3,4]
  myobservable=from(this.array)   //observable created using from operator


//transformed data using map method
  transformedata=this.myobservable.pipe(map((value)=>{
   return value*2
  }))

///Filter data using filter method and reduce also used
  filterdata=this.transformedata.pipe(filter((value)=>{
    return value>=3
  }),reduce((first:any,next:any)=>{
        return first+next
  }))



  //WE CAN COMBINED THESE TWO METHODS FILTER AND MAP

  // transformedata=this.myobservable.pipe(map((value)=>{
  //   return value*2
  //  }),filter((val)=>{
  //    return val>=3
  // }))

  ngOnInit(): void {
    
///NORMAL OBSERVABLE SUBSCRIBE HERE

// this.myobservable.subscribe(res=>{
//   console.log('myobservable  created using from',res);

// })

//TRANSFORMED OBSERVABLE SUBSCRIBE HERE
this.transformedata.subscribe((data)=>{
  console.log('transformed observable',data);
  this.trasnformeddata=data
},(error)=>{
  console.error(error)
},()=>{
console.log('complete')  
}
)
//filter data subscribe here
this.filterdata.subscribe(res=>{
  console.log('FILTER DATA ==',res)
  this.reducedata=res
})


}



}
