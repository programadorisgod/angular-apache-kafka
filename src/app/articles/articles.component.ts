import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import ArticlesServices from '../services/articles.service';
import Article from '../interfaces/article.interface';
import { ArticleComponent } from '../shared/article/article.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, ArticleComponent],
  template: `
    <main class="main_articles">
      <section class="section_main_articles">
        @for (item of listArticles; track item.id) {

        <app-article [article]="item"></app-article>

        }
      </section>
    </main>
  `,
  styleUrl: './articles.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ArticlesComponent {
  articleService = inject(ArticlesServices);
  listArticles: Article[] = [];

  constructor() {
    this.listArticles = this.articleService.getArticles();
  }
}
