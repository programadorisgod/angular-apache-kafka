import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section">
      <ng-content></ng-content>
    </section>
  `,
  styleUrl: './section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {}
