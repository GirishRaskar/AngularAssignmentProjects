import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  private nobj : NumberService
  private sobj : StringService
  
  constructor(nobj : NumberService, sobj : StringService)
  {
    this.nobj = nobj
    this.sobj = sobj
  }

  public getCapCount(sValue : string)
  {
    return this.sobj.CountCapital(sValue)
  }

  public chkPrime(iValue : number) : string
  {
    var str : string = ""

    if(this.nobj.ChkPrime(iValue))
    {
      str = "Its prime"
    }
    else
    {
      str = "Its Not Prime"
    }

    return str
  }

}
