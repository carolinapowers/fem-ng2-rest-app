import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Widget} from './widgets-service';

@Component({
  selector: 'widgets-list',
  template: `
  <div *ngFor="let widget of widgets" (click)="selected.emit(widget)"
    class="item-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{widget.name}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {{widget.description}}
    </div>
    <div class="mdl-card__menu">
      <button (click)="deleted.emit(widget); $event.stopPropagation();"
        class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">close</i>
      </button>
    </div>
  </div>
  `
})
export class WidgetsListComponent {
  @Input() widgets: Widget[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}