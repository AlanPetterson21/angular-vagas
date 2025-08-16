import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="topbar">
      <h1 class="brand">Portal de Vagas</h1>
      <nav class="nav">
        <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Início</a>
        <a routerLink="/vagas" routerLinkActive="active">Vagas</a>
        <a routerLink="/sobre" routerLinkActive="active">Sobre</a>
      </nav>
    </header>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
    <footer class="footer">© {{year}} Portal de Vagas — UC8</footer>
  `,
  styles: [`
    .topbar{display:flex;align-items:center;justify-content:space-between;padding:12px 20px;background:#111827;color:#fff;position:sticky;top:0}
    .brand{margin:0;font-size:20px}
    .nav a{color:#e5e7eb;margin-left:12px;text-decoration:none;padding:6px 10px;border-radius:10px}
    .nav a.active,.nav a:hover{background:#374151;color:#fff}
    .container{max-width:1000px;margin:20px auto;padding:0 16px}
    .footer{margin-top:40px;padding:20px 0;border-top:1px solid #e5e7eb;color:#6b7280;text-align:center}
  `]
})
export class AppComponent {
  year = new Date().getFullYear();
}