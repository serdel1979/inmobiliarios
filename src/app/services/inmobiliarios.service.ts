import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inmobiliario } from '../interfaces/inmobiliarios';

@Injectable({
  providedIn: 'root'
})
export class InmobiliariosService {

  constructor(private http: HttpClient) { }

  AllInmobiliarios: Inmobiliario[] = [];


  getInmobiliarios(): Observable<Inmobiliario[]>{
    return this.http.get<Inmobiliario[]>('http://localhost:3000/inmobiliarios');
  }

  
  agregaInmobiliario(inmobiliario: Inmobiliario){
    return this.http.post<Inmobiliario>('http://localhost:3000/inmobiliarios', inmobiliario);
  }


  getInmobiliario(id:string): Observable<Inmobiliario>{
    return this.http.get<Inmobiliario>(`http://localhost:3000/inmobiliarios/${id}`);
  }

  deleteInmobiliario(id:string): Observable<Inmobiliario>{
    return this.http.delete<Inmobiliario>(`http://localhost:3000/inmobiliarios/${id}`);
  }


}
