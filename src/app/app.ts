import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './toolbar/toolbar';
import { UserMessages } from './shared/user-messages/user-messages';
import { GlobalLoading } from './shared/loading-indicator/global-loading';

@Component({
  selector: 'root',
  imports: [RouterOutlet, Toolbar, UserMessages, GlobalLoading],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

}
