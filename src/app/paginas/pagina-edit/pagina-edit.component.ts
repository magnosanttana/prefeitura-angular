import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute, Router }     from '@angular/router'

import { Pagina }             from '../pagina.model'
import { PaginasService }     from '../paginas.service';

@Component({
  selector: 'app-pagina-edit',
  templateUrl: './pagina-edit.component.html',
  styleUrls: ['./pagina-edit.component.css']
})
export class PaginaEditComponent implements OnInit {

  pagina: Pagina = new Pagina();

  constructor(private paginaService: PaginasService, 
              private activateRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.paginaService.recurso = 'paginas';
    this.paginaService.paginaById(this.activateRouter.snapshot.params['id']).subscribe(pagina => this.pagina = pagina);
  }

  save(){
    console.log('chegou no save do coponetn edit')
    return this.paginaService.save(this.pagina).subscribe(() => this.router.navigate(['/paginas']));
  }

}
