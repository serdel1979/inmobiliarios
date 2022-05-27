import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { InmobiliariosService } from 'src/app/services/inmobiliarios.service';
import { TypeRealState } from 'src/app/interfaces/type_real_state';

@Component({
  selector: 'app-crear-inmobiliario',
  templateUrl: './crear-inmobiliario.component.html',
  styleUrls: ['./crear-inmobiliario.component.css']
})
export class CrearInmobiliarioComponent implements OnInit {


  public form: FormGroup;


  calificaciones = [
    { value: 'Club de campo', viewValue: 'Club de campo' },
    { value: 'Barrio cerrado', viewValue: 'Barrio cerrado' },
    { value: 'Club de chacra', viewValue: 'Club de chacra' },
    { value: 'Urbano', viewValue: 'Urbano' },
  ];

  selected = 'Urbano';

  types : TypeRealState[] = [];

  estado = [
    { value: 'Asignación de valores', viewValue: 'Asignación de valores' },
    { value: 'Acto administrativo', viewValue: 'Acto administrativo' },
    { value: 'Análisis', viewValue: 'Análisis' },
    { value: 'Seguimiento', viewValue: 'Seguimiento' },
    { value: 'Descartado', viewValue: 'Descartado' }
  ]
  selectedEstado = '';


  constructor(private fb: FormBuilder, private router: Router, private service: InmobiliariosService) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      id_cou: [''],
      priority: [''],
      register_source: [''],
      current_state: [''],
      type_real_state: [''],
      district: [''],
      id_mae: [''],
      holders_count: [''],
    })
  }

  ngOnInit(): void {
     this.service.getTypeRealState().subscribe(data=>{
       this.types = data;
       console.log(this.types);
     })
  }


  goBack() {
    this.router.navigate(['dashboard/inmobiliarios']);
  }

  public guardar() {
    this.service.agregaInmobiliario(this.form.value)
      .subscribe(data => {
        console.log(this.form.value);
        this.goBack();
      })
  }

}
