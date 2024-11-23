import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project8-4';
  stringLength: number = 0;

  // Event listener for input event
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.stringLength = inputElement.value.length;
  }
}
