import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private basePath = environment.url //http:127.0.0.1:3000, <url:port>
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  public getInfoTeamPlayers(team_id: any): Observable<any> {
    return this.http.get<any>(`${this.basePath}/v1/jugador/informacion/jugadores/v2/${team_id}`, this.httpOptions).pipe(
      catchError(this.manejadorError)
    );
  }

  public getInfoTeam(team_id: any): Observable<any> {
    return this.http.get<any>(`${this.basePath}/v1/equipo/informacion/equipos/v2/${team_id}`, this.httpOptions).pipe(
      catchError(this.manejadorError)
    );
  }


  //Manejador de Errores 
  private manejadorError(error: HttpErrorResponse){
    if(!(error.error instanceof ErrorEvent)) console.error(`Error Backend - Code: ${error.status} - Mensaje: ${error.error}`)
    else console.error(error.error)
    return throwError(error);
  }
}
