import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

export interface Widget {
  id: number;
  name: string;
  description: string;
}

@Injectable() 
export class WidgetsService {
  // myWidgets: Widget[] = [
  //   {id: 1, name: 'Widget 01', description: 'This is a description 1'},
  //   {id: 2, name: 'Widget 02', description: 'This is a description 2'},
  //   {id: 3, name: 'Widget 03', description: 'This is a description 3'},
  //   {id: 4, name: 'Widget 04', description: 'This is a description 4'}
  // ]

  myWidgets: Widget[];
  
  constructor (private _http: Http) {}

  getWidgets() {
  	return this._http.get(BASE_URL)
      .map(res => res.json())
      .toPromise();
  }

}