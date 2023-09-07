import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent {
  objse
constructor(){
  this.objse=from([1,2,3,4,5])
}
}
