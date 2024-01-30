import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HomeComponent  from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'preferencesUserKafka';
}
