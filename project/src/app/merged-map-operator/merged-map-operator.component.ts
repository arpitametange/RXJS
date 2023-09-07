import { Component, OnInit } from '@angular/core';
import { merge, mergeMap ,of,from} from 'rxjs';
import{map} from 'rxjs/operators'
@Component({
  selector: 'app-merged-map-operator',
  templateUrl: './merged-map-operator.component.html',
  styleUrls: ['./merged-map-operator.component.css']
})
export class MergedMapOperatorComponent implements OnInit{


  ngOnInit(): void {
  
let array1=of(1,2,3,4);
let array2=of(5,6,7,8)
console.log(array1,array2);


 array1.pipe(
  mergeMap(val=> array2.pipe(map(val1 => val +' '+val1)))).subscribe(res=>{
console.log('data from mergemap',res);

 })

 

}



}