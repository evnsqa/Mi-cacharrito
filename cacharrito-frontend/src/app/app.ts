import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
<<<<<<< HEAD
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
=======
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
>>>>>>> 8139a59cfc45de1b72d97b64aa63e6987ad12dd6
})
export class App {
  protected readonly title = signal('cacharrito-frontend');
}
