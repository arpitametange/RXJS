import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForkJoinServiceService {
url1="https://jsonplaceholder.typicode.com/posts"
url2='https://jsonplaceholder.typicode.com/comments'
url3="https://jsonplaceholder.typicode.com/albums"

  constructor(private http:HttpClient) { }

  requestFromMultiple(){
    let first=this.http.get(this.url1)
    let second=this.http.get(this.url2)
    let third=this.http.get(this.url3)
    return forkJoin([first,second,third])
  }
}
