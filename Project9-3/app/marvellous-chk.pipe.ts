import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  private ChkPrime(value : number) : boolean
  {
    var i : number = 0
    var iCnt : number = 0
    var bFlag : boolean = false

    for(i = 2; i <= value/2; i++)
    {
      if(value % i == 0)
      {
        iCnt++;
      }
    }

    if(iCnt == 0)
    {
      bFlag = true
    }

    return bFlag
  }

  private ChkPerfect(value : number) : boolean
  {
    var i : number = 0
    var sumFac : number = 0
    var bFlag : boolean = false

    for(i = 0; i < value; i++)
    {
      if(value % i == 0)
      {
        sumFac = sumFac + i
      }
    }

    if(sumFac == value)
    {
      bFlag = true
    }

    return bFlag
  }

  private ChkEvenOdd(value : number) : boolean
  {
    var bFlag : boolean = false

    if(value % 2 == 0)
    {
      bFlag = true
    }

    return bFlag
  }


  transform(value: number, ...args: string[]): string {

    var str : string = ""

    if(args[0] == "Perfect")
    {

      if(this.ChkPerfect(value))
      {
        str =  "Its Perfect"
      }
      else
      {
        str = "Its not Perfect"
      }
    }

    if(args[0] == "Even" || args[0] == "Odd")
    {
      if(this.ChkEvenOdd(value))
      {
        str = "Its Even"
      }
      else
      {
        str = "Its not Even"
      }
    }

    if(args[0] == "Prime")
    {
      if(this.ChkPrime(value))
      {
        str = "Its Prime Number"
      }
      else
      {
        str = "Its not a prime Number"
      }
    }
    
    return str;
  }

}
