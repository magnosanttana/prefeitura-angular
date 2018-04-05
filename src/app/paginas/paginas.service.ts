import { Injectable }      from '@angular/core';
import { Http }            from '@angular/http'
import { Observable }      from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { AppHttpService}   from '../app.http.service'
import { Pagina }          from './pagina.model'
import { APP_API }         from '../app.api'
import { ErroHandler }     from '../app.error-handler'



@Injectable()
export class PaginasService extends AppHttpService{
    
    constructor(private _http: Http){
        super(_http);
    }

    paginas(): Observable<Pagina[]>{
        return this.lists().map(response => response as Pagina[]);
    }

    paginaById(id: number): Observable<Pagina>{
        return this.findById(id)
               .map(response => response as Pagina);
    }
    
}