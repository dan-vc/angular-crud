<<<<<<< HEAD
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
=======
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
>>>>>>> f1a955c72d5dc774445b0d6d04e05f46143e61d0
