import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {
  
  constructor() { }
  
  public CountCapital(Value : string) : number
  {
    var Count : number = 0
    var i : number = 0
    
    for(i = 0; i < Value.length; i++)
    {
      if(Value[i] >= 'A' && Value[i] <= 'Z')
      {
        Count++
      }
    }

    return Count
  }
}
