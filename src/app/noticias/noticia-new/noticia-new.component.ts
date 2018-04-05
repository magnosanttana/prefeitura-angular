import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute, Router }     from '@angular/router'

import { Noticia }             from '../noticia.model'
import { NoticiasService }     from '../noticias.service';


@Component({
  selector: 'app-noticia-new',
  templateUrl: './noticia-new.component.html',
  styleUrls: ['./noticia-new.component.css']
})
export class NoticiaNewComponent implements OnInit {

  registro: Noticia = new Noticia();

  constructor(private service: NoticiasService, 
              private router: Router) { }

  ngOnInit() {
    this.service.recurso = 'noticias'; 
  }

  save(){
    return this.service.save(this.registro).subscribe(() => this.router.navigate(['/noticias']));
  }


}
