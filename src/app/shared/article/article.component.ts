import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import Article from '../../interfaces/article.interface';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="card">
      <header class="card_header_image">
        <img
          class="card_image"
          [alt]="article?.title"
          [srcset]="article?.img"
        />
      </header>

      <section>
        <header class="section_header">
          <h2 class="section_header_title">{{ article?.title }}</h2>
          <span class="section_header_subtitle">{{
            article?.shipmentCost
          }}</span>
        </header>

        <main>
          <p class="paragraph_section_main">{{ article?.description }}</p>
        </main>

        <footer class="footer_section">
          <button class="footer_section_button_primary">Buy now</button>
          <button class="footer_section_button_secondary">Add car</button>
        </footer>
      </section>
    </article>
  `,
  styleUrl: './article.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  @Input({ required: true }) article: Article | undefined;
}
