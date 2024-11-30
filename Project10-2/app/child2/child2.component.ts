import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

  private str : StringService

  constructor(str : StringService)
  {
    this.str = str
  }

  public countCapital()
  {
    return this.str.CountCapital("Hello World")
  }

}
