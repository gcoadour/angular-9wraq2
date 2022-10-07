import { Component, Input } from '@angular/core';

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent {
  @Input() dayStatus: any;
}
