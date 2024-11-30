import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { techs } from './techs';



@Injectable({
  providedIn: 'root'
})
export class TechService {

  public url = "assets/techdb.json"


  constructor(private http: HttpClient) {
    // this.http.get('assets/techdb.json').subscribe({
    //   next: (data) => console.log('Data:', data), // For success
    //   error: (err) => console.error('Error:', err), // For errors
    //   complete: () => console.log('Request completed') // Optional
    // });
  }

  public getData() : Observable<techs[]>
  {
    
    return this.http.get<techs[]>(this.url);
  }
}
