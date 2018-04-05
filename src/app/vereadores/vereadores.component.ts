import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Vereador } from './vereador.model'
import { VereadoresService } from './vereadores.service';
import { Router } from '@angular/router';

declare let $;

@Component({
  selector: 'app-vereadores',
  templateUrl: './vereadores.component.html',
  styleUrls: ['./vereadores.component.css']
})
export class VereadoresComponent implements OnInit {

  vereadores: Vereador[];
  vereadorToDelete: Vereador;

  @ViewChild('divModalDelete')
  divModalDelete: ElementRef

  constructor(private vereadorService: VereadoresService, private router: Router) { }

  ngOnInit() {
    this.vereadorService.recurso = 'vereadores'; 
    this.vereadorService.all().subscribe(vereadores => this.vereadores = vereadores);
  }

  openModalConfirmDelete(vereador: Vereador){
    $(this.divModalDelete.nativeElement).modal('show');
    this.vereadorToDelete = vereador;
  }

  destroy(){
    this.vereadorService.delete(this.vereadorToDelete.id).subscribe(() => {
      $(this.divModalDelete.nativeElement).modal('hide');
      let index = this.vereadores.indexOf(this.vereadorToDelete);
      this.vereadores.splice(index, 1)
      this.vereadorToDelete = null;
    });
  }

}
