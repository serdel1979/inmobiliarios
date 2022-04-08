import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InmobiliariosService } from 'src/app/services/inmobiliarios.service';
import { Inmobiliario } from '../../../../interfaces/inmobiliarios';

@Component({
  selector: 'app-crear-inmobiliario',
  templateUrl: './crear-inmobiliario.component.html',
  styleUrls: ['./crear-inmobiliario.component.css']
})
export class CrearInmobiliarioComponent implements OnInit {


  public form: FormGroup;

  public inmobiliario: any;


  calificaciones = [
    { value: 'clubCampo', viewValue: 'Club de campo' },
    { value: 'cerrado', viewValue: 'Barrio cerrado' },
    { value: 'chacra', viewValue: 'Club de chacra' },
    { value: 'urbano', viewValue: 'Urbano' },
  ];

  selected = 'Urbano';

  estado = [
    { value: 'Asignación de valores', viewValue: 'Asignación de valores' },
    { value: 'Acto administrativo', viewValue: 'Acto administrativo' },
    { value: 'Análisis', viewValue: 'Análisis' },
    { value: 'Seguimiento', viewValue: 'Seguimiento' },
    { value: 'Descartado', viewValue: 'Descartado' }
  ]
  selectedEstado = '';

  constructor(private fb: FormBuilder, private router: Router, private service: InmobiliariosService, private activate: ActivatedRoute) { 
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      titulares: [''],
      estado: [''],
      idCou: [''],
      idMae: [''],
      subestado: [''],
      expediente: [''],
      acta: [''],
      num_admin: [''],
      fecha: [''],
    })
  }

  ngOnInit(): void {
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
