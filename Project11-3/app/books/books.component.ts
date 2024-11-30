import { Component } from '@angular/core';
import { TechService } from '../tech.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  public techstack : any = []

  public constructor(tobj : TechService)
  {
    tobj.getData().subscribe(data => this.techstack = data)
  }

}
