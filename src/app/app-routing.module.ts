import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/Auth/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'createuser',
    loadChildren: () =>
      import('./components/users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
