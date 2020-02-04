import {Injectable} from '@angular/core';

export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--main-color': '#9BC3D3',
    '--accent-color': '#8BB8CE',
    '--accent-color2': '#97D0F0',
    '--background-dark': '#eff3f4',
    '--background-light': '#FFFFFF',
    '--status-bad-color': '#EAC4D5',
    '--inactive-color': '#939DA6',
    '--status-good-color': '#D6EADF'
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
