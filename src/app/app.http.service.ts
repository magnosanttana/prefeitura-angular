import { Injectable }      from '@angular/core';
import { Http }            from '@angular/http'
import { Observable }      from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { APP_API }         from './app.api'
import { ErroHandler }     from './app.error-handler'

@Injectable()
export class AppHttpService{
    private _recurso: string;

    constructor(private http: Http){}

    set recurso(rec: string){
        this._recurso = rec;
    }

    get recurso(): string{
        return this._recurso
    }

    lists(): Observable<any[]>{
        return this.http.get(`${APP_API}/${this._recurso}`)
               .map(response => response.json())
               .catch(ErroHandler.handleError);
    }

    findById(id: number): Observable<any>{
        return this.http.get(`${APP_API}/${this._recurso}/${id}`)
               .map(response => response.json())
               .catch(ErroHandler.handleError);
    }

    save(data: any){
        if(!data.id)
            return this.http.post(`${APP_API}/${this._recurso}`, data).catch(ErroHandler.handleError);
        else
            return this.http.put(`${APP_API}/${this._recurso}/${data.id}`, data).catch(ErroHandler.handleError);
    }

    delete(id: number){
        return this.http.delete(`${APP_API}/${this._recurso}/${id}`).catch(ErroHandler.handleError);
    }
}