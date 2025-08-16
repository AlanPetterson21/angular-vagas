import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Vaga {
  id: number;
  titulo: string;
  empresa: string;
  local: string;
  tipo: 'CLT' | 'PJ' | 'Estágio' | 'Temporário';
  nivel: 'Júnior' | 'Pleno' | 'Sênior' | 'Trainee';
  salario?: number;
  descricao: string;
  requisitos: string[];
  publicadaEm: string; // ISO date
  area: string;
}

@Injectable({ providedIn: 'root' })
export class VagasService {
  private http = inject(HttpClient);

  getVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>('assets/vagas-db.json');
  }

  getVagaById(id: number): Observable<Vaga | undefined> {
    return this.getVagas().pipe(map(vs => vs.find(v => v.id === id)));
  }
}