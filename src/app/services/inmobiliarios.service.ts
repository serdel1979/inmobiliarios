import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { elementAt, Observable } from 'rxjs';
import { Inmobiliario } from '../interfaces/inmobiliarios';
import { TypeRealState } from '../interfaces/type_real_state';
import { District } from '../interfaces/distritos';

@Injectable({
  providedIn: 'root'
})
export class InmobiliariosService {

  constructor(private http: HttpClient) { }

  AllInmobiliarios: Inmobiliario[] = [];

  getInmobiliarios(): Observable<Inmobiliario[]>{
    return this.http.get<Inmobiliario[]>('/api/v1/real_state');
  }

  getTypeRealState(): Observable<TypeRealState[]>{
    return this.http.get<TypeRealState[]>('/api/v1/real_state/type_real_state');
  }
   

  getDistricts(): Observable<District[]>{
    return this.http.get<District[]>('/api/v1/real_state/districts');
  }

  agregaInmobiliario(inmobiliario: Inmobiliario){
    return this.http.post<Inmobiliario>('/api/v1/real_state', inmobiliario);
  }

  editaInmobiliario(inmobiliario: Inmobiliario, id:string){
    return this.http.put<Inmobiliario>(`/api/v1/real_state/${id}`, inmobiliario);
  }


  getInmobiliario(id:string): Observable<Inmobiliario>{
    return this.http.get<Inmobiliario>(`/api/v1/real_state/${id}`);
  }

  deleteInmobiliario(id:string):Observable<any>{
    return this.http.delete<any>(`/api/v1/real_state/${id}`);
  }


}
