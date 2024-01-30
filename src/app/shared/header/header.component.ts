import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: ` <header>
    <nav class="nav">
      <div class="nav_title">
        <h1>Wish X</h1>
      </div>

      <div class="nav_search">
        <form>
          <input
            class="nav_search_input"
            type="text"
            placeholder="Busca productos, marcas y más..."
          />
          <button class="nav_search_button">Buscar</button>
        </form>
      </div>

      <div class="nav_options_users">
        <button class="nav_options_users_signin">Inicia sesión</button>
        <button class="nav_options_users_favorites">Favoritos</button>
        <button class="nav_options_users_car">carrito</button>
      </div>
    </nav>
  </header>`,
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
