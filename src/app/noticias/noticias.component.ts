import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Noticia } from './noticia.model'
import { Router } from '@angular/router';

declare let $;

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  pageTitulo: string = 'Notícias'
  pageSubTitulo: string = 'Gerenciamento de Notícias'

  constructor() { }

  ngOnInit() {

  }

}
