import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  standalone: true,
  template: `
    <section class="about">
      <h2>Sobre o Projeto</h2>
      <p>Este projeto demonstra o uso de rotas, componentes e consumo de um arquivo JSON local (assets/vagas-db.json) no Angular.</p>
      <ul>
        <li>Duas rotas obrigatórias (+ bônus com rota de detalhes e sobre)</li>
        <li>Estilização com CSS</li>
        <li>Lista de vagas com filtro por texto, área e nível</li>
      </ul>
    </section>
  `,
  styles: [`
    .about{background:#f9fafb;border:1px solid #e5e7eb;border-radius:16px;padding:16px}
  `]
})
export class SobreComponent {}