import { Component } from '@angular/core';
import { hello } from '../../../shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = hello;
}
