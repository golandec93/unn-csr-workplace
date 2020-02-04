import { Component } from '@angular/core';
import {light, ThemeService} from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'unn-csr-workplace';

  constructor(theming: ThemeService) {
    theming.setActiveScheme(light);
  }
}
