import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgLogo } from '../shared/ng-logo/ng-logo';

@Component({
  selector: 'toolbar',
  imports: [RouterLink, RouterLinkActive, NgLogo],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {

}
