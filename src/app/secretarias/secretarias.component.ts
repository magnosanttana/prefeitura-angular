import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Secretaria } from './secretaria.model'
import { SecretariasService } from './secreatarias.service';
import { Router } from '@angular/router';

declare let $;

@Component({
  selector: 'app-secretarias',
  templateUrl: './secretarias.component.html',
  styleUrls: ['./secretarias.component.css']
})
export class SecretariasComponent implements OnInit {

  pageTitulo: string = 'Secretarias'
  pageSubTitulo: string = 'Gerenciamento de Secretarias'

  constructor() { }

  ngOnInit() {

  }

}
