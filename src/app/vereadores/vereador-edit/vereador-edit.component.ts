import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute, Router }     from '@angular/router'

import { Vereador }             from '../vereador.model'
import { VereadoresService }     from '../vereadores.service';

@Component({
  selector: 'app-vereador-edit',
  templateUrl: './vereador-edit.component.html',
  styleUrls: ['./vereador-edit.component.css']
})
export class VereadorEditComponent implements OnInit {

  vereador: Vereador = new Vereador();

  constructor(private vereadorService: VereadoresService, 
              private activateRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.vereadorService.recurso = 'vereadores'; 
    this.vereadorService.paginaById(this.activateRouter.snapshot.params['id']).subscribe(pagina => this.vereador = pagina);
  }

  save(){
    return this.vereadorService.save(this.vereador).subscribe(() => this.router.navigate(['/vereadores']));
  }

}
