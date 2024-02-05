import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import Categories from '../../interfaces/categories.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="card_categorie" (click)="navigate()">
      <header class="card_header">
        <img
          class="card_img"
          [srcset]="categorie?.image"
          alt="image categorie: {{ categorie?.title }}"
        />
      </header>

      <main>
        <section>
          <p>{{ categorie?.title }}</p>
        </section>
      </main>
    </article>
  `,
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input({ required: true }) categorie: Categories | undefined;

  _route: Router = inject(Router);
  navigate() {
    this._route.navigate([this.categorie?.id]);
  }
}
