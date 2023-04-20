import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { ResolveNotaService } from './servicios/resolve-nota.service';
import { MainComponent } from './componentes/main/main.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'articulo/:_id', component: ArticuloComponent, resolve: {data: ResolveNotaService}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
