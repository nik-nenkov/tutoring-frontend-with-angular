import {Component} from '@angular/core';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-library-angular';
}

fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));
