import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { techi } from './techi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  private url : string = "assets/techdb.json"

  constructor(private http : HttpClient) { }

  public getData() : Observable<techi[]>
  {
     return this.http.get<techi[]>(this.url);
  }
}
