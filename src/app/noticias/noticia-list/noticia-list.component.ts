import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Noticia } from '../noticia.model'
import { NoticiasService } from '../noticias.service';
import { Router } from '@angular/router';

declare let $;

@Component({
  selector: 'app-noticia-list',
  templateUrl: './noticia-list.component.html',
  styleUrls: ['./noticia-list.component.css']
})
export class NoticiaListComponent implements OnInit {

  registros: Noticia[];
  registroToDelete: Noticia;

  @ViewChild('divModalDelete')
  divModalDelete: ElementRef

  constructor(private service: NoticiasService, private router: Router) { }

  ngOnInit() {
    this.service.recurso = 'noticias'; 
    this.service.all().subscribe(registros => this.registros = registros);
  }

  openModalConfirmDelete(registro: Noticia){
    $(this.divModalDelete.nativeElement).modal('show');
    this.registroToDelete = registro;
  }

  destroy(){
    this.service.delete(this.registroToDelete.id).subscribe(() => {
      $(this.divModalDelete.nativeElement).modal('hide');
      let index = this.registros.indexOf(this.registroToDelete);
      this.registros.splice(index, 1)
      this.registroToDelete = null;
    });
  }

}
