import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() public Message : unknown

  @Output() public Myevent = new EventEmitter()

  public SendMessage()
  {
    this.Myevent.emit("Hello Parent.. from child")
  }
}
