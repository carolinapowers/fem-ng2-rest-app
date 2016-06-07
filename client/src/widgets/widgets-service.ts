import {Injectable} from '@angular/core';

export interface Widget {
  id: number;
  name: string;
  description: string;
}

@Injectable()
export class WidgetsService {
  myWidgets: Widget[] = [
    {id: 1, name: 'Widget 01', description: 'This is a description'},
    {id: 2, name: 'Widget 02', description: 'This is a description'},
    {id: 3, name: 'Widget 03', description: 'This is a description'},
    {id: 4, name: 'Widget 04', description: 'This is a description'}
  ]
}