import { CommonModule } from '@angular/common';
import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {

  public str = "Marvellous Infosystems"
  public strU : any
  public strL : any

  public upper()
  {
    this.strU = this.str.toUpperCase()
  }

  public lower()
  {
    this.strL = this.str.toLowerCase()
  }

}
