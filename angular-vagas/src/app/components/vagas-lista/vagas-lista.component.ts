import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VagasService, Vaga } from '../../services/vagas.service';

@Component({
  selector: 'app-vagas-lista',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <section>
      <h2>Vagas Abertas</h2>
      <div class="filters">
        <input [(ngModel)]="busca()" placeholder="Buscar por título, empresa ou área" />
        <select [(ngModel)]="areaSelecionada()">
          <option value="">Todas as áreas</option>
          <option *ngFor="let a of areas()" [value]="a">{{a}}</option>
        </select>
        <select [(ngModel)]="nivelSelecionado()">
          <option value="">Todos os níveis</option>
          <option>Júnior</option>
          <option>Pleno</option>
          <option>Sênior</option>
          <option>Trainee</option>
        </select>
      </div>

      <div class="grid">
        <article *ngFor="let v of vagasFiltradas()" class="card">
          <header class="card-h">
            <h3>{{v.titulo}}</h3>
            <span class="chip">{{v.nivel}}</span>
          </header>
          <p class="muted">{{v.empresa}} • {{v.local}} • {{v.tipo}}</p>
          <p class="desc">{{v.descricao}}</p>
          <footer class="card-f">
            <a [routerLink]="['/vagas', v.id]" class="btn-sm">Detalhes</a>
            <span class="date">Publicada: {{v.publicadaEm | date:'dd/MM/yyyy'}}</span>
          </footer>
        </article>
      </div>
    </section>
  `,
  styles: [`
    h2{margin:0 0 12px 0}
    .filters{display:grid;grid-template-columns:1fr 200px 200px;gap:10px;margin-bottom:16px}
    .filters input,.filters select{padding:10px;border:1px solid #e5e7eb;border-radius:12px}
    .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px}
    .card{border:1px solid #e5e7eb;border-radius:16px;padding:14px;background:#fff;display:flex;flex-direction:column;gap:8px}
    .card-h{display:flex;align-items:center;justify-content:space-between;gap:10px}
    .chip{background:#eef2ff;color:#3730a3;padding:4px 8px;border-radius:999px;font-size:12px}
    .muted{color:#6b7280;margin:0}
    .desc{color:#111827;margin:0}
    .card-f{display:flex;align-items:center;justify-content:space-between}
    .btn-sm{background:#10b981;color:#fff;text-decoration:none;padding:8px 12px;border-radius:12px}
    .btn-sm:hover{background:#059669}
    .date{color:#6b7280;font-size:12px}
    @media (max-width: 720px){
      .filters{grid-template-columns:1fr;}
    }
  `]
})
export class VagasListaComponent implements OnInit {
  private service = inject(VagasService);

  vagas = signal<Vaga[]>([]);
  busca = signal<string>('');
  areaSelecionada = signal<string>('');
  nivelSelecionado = signal<string>('');

  areas = computed(() => Array.from(new Set(this.vagas().map(v => v.area))).sort());

  vagasFiltradas = computed(() => {
    const q = this.busca().toLowerCase();
    const area = this.areaSelecionada();
    const nivel = this.nivelSelecionado();
    return this.vagas().filter(v => {
      const matchQ = !q || [v.titulo, v.empresa, v.area].join(' ').toLowerCase().includes(q);
      const matchArea = !area || area === '' || v.area === area;
      const matchNivel = !nivel || nivel === '' || v.nivel === nivel;
      return matchQ && matchArea && matchNivel;
    });
  });

  ngOnInit(): void {
    this.service.getVagas().subscribe((vs) => this.vagas.set(vs));
  }
}