import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { VagasService, Vaga } from '../../services/vagas.service';

@Component({
  selector: 'app-vaga-detalhe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <ng-container *ngIf="vaga; else notfound">
      <article class="detail">
        <h2>{{vaga.titulo}}</h2>
        <p class="muted">{{vaga.empresa}} • {{vaga.local}} • {{vaga.tipo}} • {{vaga.nivel}}</p>
        <p class="desc">{{vaga.descricao}}</p>
        <h3>Requisitos</h3>
        <ul>
          <li *ngFor="let r of vaga.requisitos">{{r}}</li>
        </ul>
        <p class="date">Publicada: {{vaga.publicadaEm | date:'dd/MM/yyyy'}}</p>
        <a routerLink="/vagas" class="btn-sm">Voltar</a>
      </article>
    </ng-container>
    <ng-template #notfound>
      <p>Vaga não encontrada.</p>
      <a routerLink="/vagas" class="btn-sm">Ver todas</a>
    </ng-template>
  `,
  styles: [`
    .detail{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:16px;display:flex;flex-direction:column;gap:8px}
    .muted{color:#6b7280}
    .desc{margin-top:8px}
    .btn-sm{align-self:flex-start;background:#2563eb;color:#fff;text-decoration:none;padding:8px 12px;border-radius:12px}
    .date{color:#6b7280;font-size:12px}
  `]
})
export class VagaDetalheComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(VagasService);
  vaga?: Vaga;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getVagaById(id).subscribe(v => this.vaga = v);
  }
}