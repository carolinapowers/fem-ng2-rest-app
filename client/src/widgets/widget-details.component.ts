import {Component, Input} from '@angular/core';
import {Widget} from './widgets-service';

@Component({
  selector: 'widget-details',
  template: `
{{selectedWidget.name}}
{{selectedWidget.description}}
 
  `
})
export class WidgetDetailsComponent {
  originalName: string;
  selectedWidget: Widget;
  
  @Input() set widget(widgetVal: Widget){
    if (widgetVal) this.originalName = widgetVal.name;
    this.selectedWidget = Object.assign({}, widgetVal);
    console.log(widgetVal);

  }
}