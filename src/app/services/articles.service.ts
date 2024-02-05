import { Injectable } from '@angular/core';
import Article from '../interfaces/article.interface';
import listArticles from '../utils/listArticles';

@Injectable({
  providedIn: 'root',
})

export default class ArticlesServices {
  public getArticles(): Article[] {
    return listArticles;
  }

}
