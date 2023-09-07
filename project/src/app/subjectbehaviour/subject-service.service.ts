import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectSERVICEService {
username=new BehaviorSubject('this is the ')
  constructor() { }
}
