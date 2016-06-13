import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Widget} from './widgets-service';

@Component({
  selector: 'widget-details',
  template: `
{{selectedWidget.name}}
{{selectedWidget.description}}
  <div class="item-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text" *ngIf="selectedWidget.id">Editing {{originalName}}</h2>
      <h2 class="mdl-card__title-text" *ngIf="!selectedWidget.id">Create New Item</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <form novalidate>
          <div class="mdl-textfield mdl-js-textfield">
            <label>Item Name</label>
            <input [(ngModel)]="selectedWidget.name"
              placeholder="Enter a name"
              class="mdl-textfield__input" type="text">
          </div>

          <div class="mdl-textfield mdl-js-textfield">
            <label>Item Description</label>
            <input [(ngModel)]="selectedWidget.description"
              placeholder="Enter a description"
              class="mdl-textfield__input" type="text">
          </div>
      </form>
    </div>
    <div class="mdl-card__actions">
        <button type="submit" (click)="cancelled.emit(selectedWidget)"
          class="mdl-button mdl-js-button mdl-js-ripple-effect">Cancel</button>
        <button type="submit" (click)="saved.emit(selectedWidget)"
          class="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect">Save</button>
    </div>
  </div>
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

    @Output() cancelled = new EventEmitter();
}