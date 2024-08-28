import { Routes } from '@angular/router';
import { ListarComponent } from './Personas/listar/listar.component';
import { AddComponent } from './Personas/add/add.component';
import { EditComponent } from './Personas/edit/edit.component';

export const routes: Routes = [
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
    { path: 'listar', component: ListarComponent },
    { path: 'add', component: AddComponent },
    { path: 'edit', component: EditComponent }
]
