import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public ChkPrime(Value : number) : boolean
  {
    var i : number = 0
    var bFlag : boolean = true

    for(i = 2; i <= Value/2; i++)
    {
      if(Value%i == 0)
      {
        bFlag = false
        break
      }
    }

    return bFlag
  }
}
