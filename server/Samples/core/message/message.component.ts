import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() message = '';
  @Input() buttonText = '';
  @Input() redirectPath = '';

  constructor() { }
}
