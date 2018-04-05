import { Component, OnInit } from '@angular/core';

import { Pagina } from './pagina.model'
import { PaginasService } from './paginas.service';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css']
})
export class PaginasComponent implements OnInit {
  
  paginas: Pagina[]
 
  constructor(private paginaService: PaginasService) { }

  ngOnInit() {
    this.paginaService.recurso = 'paginas'; 
    this.paginaService.paginas().subscribe(paginas => this.paginas = paginas);
  }

}
