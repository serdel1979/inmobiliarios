import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { elementAt, Observable } from 'rxjs';
import { Inmobiliario } from '../interfaces/inmobiliarios';

@Injectable({
  providedIn: 'root'
})
export class InmobiliariosService {

  constructor(private http: HttpClient) { }

  AllInmobiliarios: Inmobiliario[] = [];


  //localhost:3000/api/v1/real_state

  getInmobiliarios(): Observable<Inmobiliario[]>{
    return this.http.get<Inmobiliario[]>('http://localhost:3000/api/v1/real_state');
  }

  
  agregaInmobiliario(inmobiliario: Inmobiliario){
    return this.http.post<Inmobiliario>('http://localhost:3000/api/v1/real_state', inmobiliario);
  }

  editaInmobiliario(inmobiliario: Inmobiliario, id:string){
    return this.http.put<Inmobiliario>(`http://localhost:3000/api/v1/real_state/${id}`, inmobiliario);
  }


  getInmobiliario(id:string): Observable<Inmobiliario>{
    return this.http.get<Inmobiliario>(`http://localhost:3000/api/v1/real_state/${id}`);
  }

  deleteInmobiliario(id:string):Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/api/v1/real_state/${id}`);
  }


}
