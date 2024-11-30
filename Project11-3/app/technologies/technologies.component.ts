import { Component } from '@angular/core';
import { TechService } from '../tech.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {

  public techstack : any = []

  public constructor(tobj : TechService)
  {
    tobj.getData().subscribe(data => this.techstack = data)
  }

}
