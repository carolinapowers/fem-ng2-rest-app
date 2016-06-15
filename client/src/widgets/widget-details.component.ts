import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup } from '@angular/common';
import {Widget} from './widgets-service';


@Component({
  selector: 'widget-details',
  template: `
{{selectedWidget.name}}
{{selectedWidget.description}}
  <div class="item-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text" *ngIf="selectedWidget.id">Editing {{originalName}}</h2>
      <h2 class="mdl-card__title-text" *ngIf="!selectedWidget.id">Create New Widget</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <form novalidate  (ngSubmit)="save.emit(selectedWidget)" >
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
          <div class="mdl-card__actions">
            <button type="submit" (click)="cancelled.emit(selectedWidget)"
          class="mdl-button mdl-js-button mdl-js-ripple-effect">Cancel</button>
            <button type="submit" class="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect">Save</button>
        </div>
      </form>
      <form [ngFormModel]="widgetForm" (ngSubmit)="save2.emit(widgetForm.value)">
          <div class="mdl-textfield mdl-js-textfield">
            <label>Item Description</label>
            <input [ngFormControl]="widgetForm.controls['firstName']">
          </div>
          <div class="mdl-textfield mdl-js-textfield">
            <label>Item Description</label>
            <input [ngFormControl]="widgetForm.controls['lastName']">
          </div>
          <div class="mdl-card__actions">
            <button type="submit" class="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect">Save</button>
        </div>
      </form>
    </div>
  </div>
  `,
  styles: [`
    .ng-invalid {
      border-color: red;
    }
  `],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class WidgetDetailsComponent {
  originalName: string;
  selectedWidget: Widget;
  widgetForm: ControlGroup;

  @Input() set widget(widgetVal: Widget){
    if (widgetVal) this.originalName = widgetVal.name;
    this.selectedWidget = Object.assign({}, widgetVal);
    console.log(widgetVal);
  }
  @Output() save = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Output() save2 = new EventEmitter();

  constructor (private _builder : FormBuilder) {
    this.widgetForm = this._builder.group ({
      firstName: ['', Validators.required],
      lastName: ['Powers']
    })
  }
}