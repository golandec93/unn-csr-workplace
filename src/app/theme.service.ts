import {Injectable} from '@angular/core';

export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--grey-light': '#FAFAFA',
    '--bg-white': '#FFFFFF',
    '--status-bad-color': '#EAC4D5',
    '--bg-blue-dark': '#1976d2',
    '--status-good-color': '#D6EADF',
    '--grey-dark': '#616161'
  }
};

@Injectable(
  {providedIn: 'root'}
)
export class ThemeService {
  setActiveScheme(scheme: Theme): void {
    Object.keys(scheme.properties).forEach(property => {
        document.documentElement.style.setProperty(property, scheme.properties[property]);
      }
    );
  }
}
