import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {PaginasComponent} from './paginas/paginas.component'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'paginas', component: PaginasComponent}
]