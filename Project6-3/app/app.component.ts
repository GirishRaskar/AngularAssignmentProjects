import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<h1 [class] = "'Color'">Marvellous Infosystems</h1> <input type = "text">`,
  styles: `.Color{color: blue}`
})
export class AppComponent {
  title = 'Project6-3';
}
