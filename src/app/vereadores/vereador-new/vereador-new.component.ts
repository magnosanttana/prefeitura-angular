import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute, Router }     from '@angular/router'

import { Vereador }             from '../vereador.model'
import { VereadoresService }     from '../vereadores.service';

@Component({
  selector: 'app-vereador-new',
  templateUrl: './vereador-new.component.html',
  styleUrls: ['./vereador-new.component.css']
})
export class VereadorNewComponent implements OnInit {

  vereador: Vereador = new Vereador();

  constructor(private vereadorService: VereadoresService, 
              private router: Router) { }

  ngOnInit() {
    this.vereadorService.recurso = 'vereadores'; 
  }

  save(){
    return this.vereadorService.save(this.vereador).subscribe(() => this.router.navigate(['/vereadores']));
  }

}
