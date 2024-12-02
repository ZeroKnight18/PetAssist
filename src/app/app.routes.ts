import { Routes } from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarComponent } from './editar/editar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

export const routes: Routes = [
    {
        path:"Inicio",
        component: InicioComponent,
    },
    {
        path:"Tabla",
        component: TablaComponent
    },
    {
        path:"Perfil",
        component: PerfilComponent
    },
    {
        path:"Editar",
        component: EditarComponent
    },
    {
        path:"Nosotros",
        component: NosotrosComponent
    },
    {
        path:"**",
        redirectTo: 'Inicio',
        pathMatch: 'full'
    }
];
