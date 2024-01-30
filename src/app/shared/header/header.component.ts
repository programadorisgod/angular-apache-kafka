import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: ` <header>
    <nav class="nav">
      <a class="nav_title" routerLink="/home">
        <h1>Wish X</h1>
      </a>

      <div class="nav_search">
        <form class="nav_search_form">
          <input
            class="nav_search_input"
            type="text"
            placeholder="Busca productos, marcas y más..."
          />
          <button class="nav_search_button">
            <img src="assets/icons/serchIcon.svg" alt="search" />
          </button>
        </form>
      </div>

      <div class="nav_options_users">
        <div class="nav_options_users_signin">
          <img
            class="hover_effect"
            src="/assets/icons/signIn.svg"
            alt="Inicia sesión"
          />
          <p>Inicia Sesion</p>
        </div>

        <button class="nav_options_users_favorites">
          <img src="/assets/icons/favorites.svg" alt="" />
        </button>

        <button class="nav_options_users_car">
          <img src="/assets/icons/shoppingCar.svg" alt="Shopping-car" />
        </button>
      </div>
    </nav>
  </header>`,
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
