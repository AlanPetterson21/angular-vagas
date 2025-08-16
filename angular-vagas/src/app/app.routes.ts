import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VagasListaComponent } from './components/vagas-lista/vagas-lista.component';
import { VagaDetalheComponent } from './components/vaga-detalhe/vaga-detalhe.component';
import { SobreComponent } from './components/sobre/sobre.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Início' },
  { path: 'vagas', component: VagasListaComponent, title: 'Vagas' },
  { path: 'vagas/:id', component: VagaDetalheComponent, title: 'Detalhe da Vaga' },
  { path: 'sobre', component: SobreComponent, title: 'Sobre' },
  { path: '**', redirectTo: '' }
];