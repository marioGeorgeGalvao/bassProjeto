import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { EditComponent } from './pages/musicas/edit/edit.component';
import { ListComponent } from './pages/musicas/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/listaMusica', pathMatch: 'full' },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'novaMusica', component: EditComponent },
  { path: 'listaMusica', component: ListComponent },
  { path: '**', component: Error404Component }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
