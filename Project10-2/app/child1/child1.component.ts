import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {

  private nobj : NumberService

  constructor(nobj : NumberService)
  {
    this.nobj = nobj
  }

  public chkPrime() : string
  {
    var str : string = ""

    if(this.nobj.ChkPrime(3))
    {
      str = "Its Prime"
    }
    else
    {
      str = "Its not Prime"
    }

    return str
  }

}
