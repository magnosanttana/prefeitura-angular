import { Injectable }      from '@angular/core';
import { Http }            from '@angular/http'
import { Observable }      from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { AppHttpService}   from '../app.http.service'
import { APP_API }         from '../app.api'
import { ErroHandler }     from '../app.error-handler'
import { Secretaria } from './secretaria.model';


@Injectable()
export class SecretariasService extends AppHttpService{
    
    constructor(private _http: Http){
        super(_http);
    }

    all(): Observable<Secretaria[]>{
        return this.lists().map(response => response as Secretaria[]);
    }

    paginaById(id: number): Observable<Secretaria>{
        return this.findById(id)
               .map(response => response as Secretaria);
    }
    
}