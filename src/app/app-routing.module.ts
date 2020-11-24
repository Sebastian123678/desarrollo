import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule),
    canActivate : [AuthGuard]
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
    path: 'camiones/:id',
    loadChildren: () => import('./modelos-camiones/modelos-camiones.module').then( m => m.ModelosCamionesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule),
    canActivate : [NologinGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
