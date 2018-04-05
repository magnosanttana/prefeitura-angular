import { Component, OnInit, Input } from '@angular/core';

import { Pagina } from '../pagina.model'

@Component({
  selector: 'app-pagina-new',
  templateUrl: './pagina-new.component.html',
  styleUrls: ['./pagina-new.component.css']
})
export class PaginaNewComponent implements OnInit {

  @Input()
  pagina: Pagina;

  constructor() { }

  ngOnInit() {
  }

}
