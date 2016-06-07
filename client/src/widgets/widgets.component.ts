import {Component, OnInit} from '@angular/core'
import {WidgetDetailsComponent} from "./widget-details.component";
import {WidgetsListComponent} from "./widgets-list.component";
import {WidgetsService, Widget} from "./widgets-service";

@Component({
  selector: 'widgets',
  template: `
  <div class="mdl-grid items">
    <div class="mdl-cell mdl-cell--6-col">
      <widgets-list [widgets]="widgets" 
        (selected)="selectWidget($event)"></widgets-list>
    </div>
    <div class="mdl-cell mdl-cell--6-col">
      <widget-details [widget]="selectedWidget"></widget-details>
    </div>
  </div>
  `,
  directives: [WidgetDetailsComponent, WidgetsListComponent],
  providers: [WidgetsService]
})
export class Widgets implements OnInit {
  widgets: Widget[];
  selectedWidget: Widget;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {
    this.widgets = this.widgetsService.myWidgets;
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }

}