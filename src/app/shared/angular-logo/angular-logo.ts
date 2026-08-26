import { Component, input } from '@angular/core';

@Component({
  selector: 'angular-logo',
  templateUrl: './angular-logo.html',
  styleUrl: './angular-logo.scss',
})
export class AngularLogo {
  size = input(28);
}
