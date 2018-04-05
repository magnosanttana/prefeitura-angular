import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { FormsModule } from '@angular/forms'

//import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { HomeComponent } from './home/home.component';
import { PaginasComponent } from './paginas/paginas.component';
import { PaginaNewComponent } from './paginas/pagina-new/pagina-new.component';
import { AppHttpService } from './app.http.service';
import { PaginasService } from './paginas/paginas.service';
import { VereadoresService } from './vereadores/vereadores.service';
import { HttpModule } from '@angular/http';
import { PaginaEditComponent } from './paginas/pagina-edit/pagina-edit.component';

import { CKEditorModule } from 'ng2-ckeditor';
import { HeaderPageComponent } from './header-page/header-page.component';
import { VereadoresComponent } from './vereadores/vereadores.component';
import { VereadorEditComponent } from './vereadores/vereador-edit/vereador-edit.component';
import { VereadorNewComponent } from './vereadores/vereador-new/vereador-new.component';
import { SecretariasComponent } from './secretarias/secretarias.component';
import { SecretariasService } from './secretarias/secreatarias.service';
import { SecretariaNewComponent } from './secretarias/secretaria-new/secretaria-new.component';
import { SecretariaEditComponent } from './secretarias/secretaria-edit/secretaria-edit.component';
import { SecretariaListComponent } from './secretarias/secretaria-list/secretaria-list.component';

import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiasService } from './noticias/noticias.service';
import { NoticiaNewComponent } from './noticias/noticia-new/noticia-new.component';
import { NoticiaEditComponent } from './noticias/noticia-edit/noticia-edit.component';
import { NoticiaListComponent } from './noticias/noticia-list/noticia-list.component';

const ROUTES: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: HomeComponent},
  {path: 'paginas', component: PaginasComponent},
  {path: 'paginas/:id/editar', component: PaginaEditComponent},
  {path: 'vereadores', component: VereadoresComponent},
  {path: 'vereadores/:id/editar', component: VereadorEditComponent},
  {path: 'vereadores/novo', component: VereadorNewComponent},
  {path: 'secretarias', component: SecretariasComponent,
        children: [
          {path: '', component: SecretariaListComponent},
          {path: 'list', component: SecretariaListComponent},
          {path: 'novo', component: SecretariaNewComponent},
          {path: ':id/editar', component: SecretariaEditComponent},
        ]
  },
  {path: 'noticias', component: NoticiasComponent,
        children: [
          {path: '', component: NoticiaListComponent},
          {path: 'list', component: NoticiaListComponent},
          {path: 'novo', component: NoticiaNewComponent},
          {path: ':id/editar', component: NoticiaEditComponent},
        ]
  },
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    HomeComponent,
    PaginasComponent,
    PaginaNewComponent,
    PaginaEditComponent,
    VereadoresComponent,
    VereadorEditComponent,
    VereadorNewComponent,
    SecretariasComponent,
    SecretariaNewComponent,
    SecretariaEditComponent,
    HeaderPageComponent,
    SecretariaListComponent,
    NoticiasComponent,
    NoticiaNewComponent,
    NoticiaEditComponent,
    NoticiaListComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [AppHttpService, PaginasService, VereadoresService, SecretariasService, NoticiasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
