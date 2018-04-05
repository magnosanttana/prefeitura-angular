import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute, Router }     from '@angular/router'

import { Secretaria }             from '../secretaria.model'
import { SecretariasService }     from '../secreatarias.service';

@Component({
  selector: 'app-secretaria-edit',
  templateUrl: './secretaria-edit.component.html',
  styleUrls: ['./secretaria-edit.component.css']
})
export class SecretariaEditComponent implements OnInit {

  registro: Secretaria = new Secretaria();

  constructor(private service: SecretariasService, 
              private activateRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.service.recurso = 'secretarias'; 
    this.service.paginaById(this.activateRouter.snapshot.params['id']).subscribe(registro => this.registro = registro);
  }

  save(){
    return this.service.save(this.registro).subscribe(() => this.router.navigate(['/secretarias']));
  }

}
