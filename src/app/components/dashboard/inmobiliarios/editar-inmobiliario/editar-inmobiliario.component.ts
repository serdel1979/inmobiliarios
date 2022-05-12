import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Inmobiliario } from 'src/app/interfaces/inmobiliarios';
import { InmobiliariosService } from 'src/app/services/inmobiliarios.service';

@Component({
  selector: 'app-editar-inmobiliario',
  templateUrl: './editar-inmobiliario.component.html',
  styleUrls: ['./editar-inmobiliario.component.css']
})
export class EditarInmobiliarioComponent implements OnInit {

  form!: FormGroup;


  calificaciones = [
    { value: 'Club de campo', viewValue: 'Club de campo' },
    { value: 'Barrio cerrado', viewValue: 'Barrio cerrado' },
    { value: 'Club de chacra', viewValue: 'Club de chacra' },
    { value: 'Urbano', viewValue: 'Urbano' },
  ];


  estado = [
    { value: 'Asignación de valores', viewValue: 'Asignación de valores' },
    { value: 'Acto administrativo', viewValue: 'Acto administrativo' },
    { value: 'Análisis', viewValue: 'Análisis' },
    { value: 'Seguimiento', viewValue: 'Seguimiento' },
    { value: 'Descartado', viewValue: 'Descartado' }
  ]

  inmobiliario!: Inmobiliario;
  id!: string;
  inmobiliariosServices: any;

  constructor(private fb: FormBuilder, private rutaActiva: ActivatedRoute, private service: InmobiliariosService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params['id'];
    this.form = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      id_cou: ['', Validators.required],
      priority: [''],
      register_source: [''],
      current_state: [''],
      type_real_state: [''],
      district: [''],
      id_mae: [''],
      holders_count: [''],
    })
    
    this.service.getInmobiliario(this.id).subscribe((data:Inmobiliario) => {
      this.inmobiliario=data;
      this.form.controls['name'].setValue(this.inmobiliario['name']);
      this.form.controls['type'].setValue(this.inmobiliario['type']);
      this.form.controls['id_cou'].setValue(this.inmobiliario['id_cou']);
      this.form.controls['priority'].setValue(this.inmobiliario['priority']);
      this.form.controls['register_source'].setValue(this.inmobiliario['register_source']);
      this.form.controls['current_state'].setValue(this.inmobiliario['current_state']);
      this.form.controls['type_real_state'].setValue(this.inmobiliario['type_real_state']);
      this.form.controls['district'].setValue(this.inmobiliario['district']);
      this.form.controls['id_mae'].setValue(this.inmobiliario['id_mae']);
      this.form.controls['holders_count'].setValue(this.inmobiliario['holders_count']);

    });
  }


  goBack() {
    this.router.navigate(['dashboard/inmobiliarios']);
  }

  public guardar() {
    this.service.editaInmobiliario(this.form.value,this.id)
      .subscribe(data => {
        console.log(this.form.value);
        this.goBack();
      })
  }


}
