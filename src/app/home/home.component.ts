import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { SectionComponent } from '../shared/section/section.component';
import listCategories from '../utils/listCategories';
import Categories from '../interfaces/categories.interface';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SectionComponent,
    CardComponent,
    RouterOutlet,
  ],
  template: `
    <main class="main_home">
      <app-section>
        @for (item of listCategories ; track $index) {
        <app-card [categorie]="item" />
        }
      </app-section>
    </main>
  `,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  public listCategories: Categories[] = [];
  constructor() {
    this.listCategories = listCategories;
  }
}
