import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddTramiteComponent} from "./pages/add-tramite/add-tramite.component";
import {ListTramiteComponent} from "./pages/list-tramite/list-tramite.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add',
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddTramiteComponent
  },
  {
    path: 'list',
    component: ListTramiteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
