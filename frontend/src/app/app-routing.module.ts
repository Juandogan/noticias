import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { ResolveNotaService } from './servicios/resolve-nota.service';
import { MainComponent } from './componentes/main/main.component';
import { Main2Component } from './componentes/main2/main2.component';
import { ResolveRevistaService } from './servicios/resolve-revista.service';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'articulo/:_id', component: ArticuloComponent, resolve: {data: ResolveNotaService}},
  {path:'ediciones/:_id', component: Main2Component, resolve: {data: ResolveRevistaService}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
