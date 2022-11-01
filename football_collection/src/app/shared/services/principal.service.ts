import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  private basePath = environment.url //http:127.0.0.1:3000, <url:port>
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  public getInfoPlayer(): Observable<any>{
    return this.http.get<any>(`${this.basePath}/v1/jugador/informacion/jugadores/v2/`, this.httpOptions).pipe(
      catchError(this.manejadorError)
    );
  }

  public getinfoLigue(): Observable<any> {
    return this.http.get<any>(`${this.basePath}/v1/equipo/informacion/liga`, this.httpOptions).pipe(
      catchError(this.manejadorError)
    );
  }

  public getTeamsLigue(): Observable<any> {
    return this.http.get<any>(`${this.basePath}/v1/equipo/informacion/equipos`, this.httpOptions).pipe(
      catchError(this.manejadorError)
    );
  }

  public inicio_sesion(user:String, pass:String) {
    if(user.trim() == 'admin' && pass.trim() == 'admin') 
      return {
        'usuario': user,
        'autenticado': true
      };
    else
      return {
        'usuario': user,
        'autenticado': false
      };
  }

  public cerrar_sesion() {
    return {
      'usuario': '',
      'autenticado': false
    };
  }

  public registro_usuario(user:String, pass:String) {
    let usuario = {
      'usuario': user,
      'autenticado': false,
      'creacion': true
    }
    return usuario;
  }


  //Manejador de Errores 
  private manejadorError(error: HttpErrorResponse){
    if(!(error.error instanceof ErrorEvent)) console.error(`Error Backend - Code: ${error.status} - Mensaje: ${error.error}`)
    else console.error(error.error)
    return throwError(error);
  }
}
