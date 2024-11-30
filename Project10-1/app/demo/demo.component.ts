import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  private addResult : number = 0
  private subResult : number = 0
  private No1 : number = 10
  private No2 : number = 5
  private aobj : ArithmeticService


  constructor(aobj : ArithmeticService)
  {
    this.aobj = aobj
  }

  public getAddResult() : number
  {
     return this.aobj.Add(this.No1, this.No2)
  }

  public getSubResult() : number
  {
     return this.aobj.Sub(this.No1, this.No2)
  }


}
