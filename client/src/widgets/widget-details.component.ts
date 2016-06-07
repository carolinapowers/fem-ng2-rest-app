import {Component, Input} from '@angular/core';
import {Widget} from './widgets-service';

@Component({
  selector: 'widget-details',
  template: `
  <pre>{{widget | json}}</pre>
  `
})
export class WidgetDetailsComponent {
  @Input() widget: Widget;
}