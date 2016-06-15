import {Component, OnInit} from '@angular/core'
import {WidgetDetailsComponent} from "./widget-details.component";
import {WidgetsListComponent} from "./widgets-list.component";
import {WidgetsService, Widget} from "./widgets-service";

@Component({
  selector: 'widgets',
  template: `
  <div class="mdl-grid items">
    <div class="mdl-cell mdl-cell--6-col">
      <widgets-list [widgets]="parentWidgets" 
        (selected)="selectWidget($event)"></widgets-list>
    </div>
    <div class="mdl-cell mdl-cell--6-col">
      <widget-details (save)="saveWidget($event)" [widget]="selectedWidget" (save2)="save2Widget($event)"></widget-details>
    </div>
  </div>
  `,
  directives: [WidgetDetailsComponent, WidgetsListComponent],
  providers: [WidgetsService]
})
export class Widgets implements OnInit {
  parentWidgets: Widget[];
  selectedWidget: Widget;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {
    //his.parentWidgets = this.widgetsService.myWidgets;
     this.widgetsService.getWidgets()
      .then(widget => {
        this.parentWidgets = widget;
      });
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }

  saveWidget(widget) {
    console.log(widget);
  }

  save2Widget(widget) {
    console.log(widget);
  }


}