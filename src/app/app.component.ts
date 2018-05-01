import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello <br/>{{name}}</h1>`,
})
export class AppComponent  { name = ' my name is vartik'; }
