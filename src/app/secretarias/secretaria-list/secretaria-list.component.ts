import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Secretaria } from '../secretaria.model'
import { SecretariasService } from '../secreatarias.service';
import { Router } from '@angular/router';

declare let $;

@Component({
  selector: 'app-secretaria-list',
  templateUrl: './secretaria-list.component.html',
  styleUrls: ['./secretaria-list.component.css']
})
export class SecretariaListComponent implements OnInit {

  registros: Secretaria[];
  registroToDelete: Secretaria;

  @ViewChild('divModalDelete')
  divModalDelete: ElementRef

  constructor(private service: SecretariasService, private router: Router) { }

  ngOnInit() {
    this.service.recurso = 'secretarias'; 
    this.service.all().subscribe(registros => this.registros = registros);
  }

  openModalConfirmDelete(registro: Secretaria){
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
