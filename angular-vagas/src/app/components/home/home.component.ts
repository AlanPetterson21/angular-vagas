import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="hero">
      <h2>Bem-vindo ao Portal de Vagas</h2>
      <p>Explore oportunidades, filtre por área e conheça os detalhes de cada vaga.</p>
      <a routerLink="/vagas" class="btn">Ver Vagas</a>
    </section>
  `,
  styles: [`
    .hero{background:#f3f4f6;border-radius:16px;padding:32px;display:flex;flex-direction:column;gap:12px}
    .btn{display:inline-block;background:#2563eb;color:#fff;padding:10px 16px;border-radius:12px;text-decoration:none}
    .btn:hover{background:#1d4ed8}
  `]
})
export class HomeComponent {}