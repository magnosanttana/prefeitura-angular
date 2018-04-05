import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute, Router }     from '@angular/router'

import { Secretaria }             from '../secretaria.model'
import { SecretariasService }     from '../secreatarias.service';


@Component({
  selector: 'app-secretaria-new',
  templateUrl: './secretaria-new.component.html',
  styleUrls: ['./secretaria-new.component.css']
})
export class SecretariaNewComponent implements OnInit {

  registro: Secretaria = new Secretaria();

  constructor(private service: SecretariasService, 
              private router: Router) { }

  ngOnInit() {
    this.service.recurso = 'secretarias'; 
  }

  save(){
    return this.service.save(this.registro).subscribe(() => this.router.navigate(['/secretarias']));
  }


}
