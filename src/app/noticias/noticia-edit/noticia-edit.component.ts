import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute, Router }     from '@angular/router'

import { Noticia }             from '../noticia.model'
import { NoticiasService }     from '../noticias.service';

@Component({
  selector: 'app-noticia-edit',
  templateUrl: './noticia-edit.component.html',
  styleUrls: ['./noticia-edit.component.css']
})
export class NoticiaEditComponent implements OnInit {

  registro: Noticia = new Noticia();

  constructor(private service: NoticiasService, 
              private activateRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.service.recurso = 'noticias'; 
    this.service.paginaById(this.activateRouter.snapshot.params['id']).subscribe(registro => this.registro = registro);
  }
  
  save(){
    return this.service.save(this.registro).subscribe(() => this.router.navigate(['/noticias']));
  }

}
