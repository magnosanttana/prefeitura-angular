import { Injectable }      from '@angular/core';
import { Http }            from '@angular/http'
import { Observable }      from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { AppHttpService}   from '../app.http.service'
import { APP_API }         from '../app.api'
import { ErroHandler }     from '../app.error-handler'
import { Noticia } from './noticia.model';


@Injectable()
export class NoticiasService extends AppHttpService{
    
    constructor(private _http: Http){
        super(_http);
    }

    all(): Observable<Noticia[]>{
        return this.lists().map(response => response as Noticia[]);
    }

    paginaById(id: number): Observable<Noticia>{
        return this.findById(id)
               .map(response => response as Noticia);
    }
    
}