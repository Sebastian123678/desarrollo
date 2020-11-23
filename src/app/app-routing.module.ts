import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'carros/:id',
    loadChildren: () => import('./modelos-carros/modelos-carros.module').then( m => m.ModelosCarrosPageModule)
  },
  {
    path: 'motos/:id',
    loadChildren: () => import('./modelos-motos/modelos-motos.module').then( m => m.ModelosMotosPageModule)
  },
  {
    path: 'modelos-camiones',
    loadChildren: () => import('./modelos-camiones/modelos-camiones.module').then( m => m.ModelosCamionesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
