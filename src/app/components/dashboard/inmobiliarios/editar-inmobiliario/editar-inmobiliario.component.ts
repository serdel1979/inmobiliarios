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
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      titulares: ['', Validators.required],
      estado: [''],
      idCou: [''],
      idMae: [''],
      subestado: [''],
      expediente: [''],
      acta: [''],
      num_admin: [''],
      fecha: [''],
    })
    
    this.service.getInmobiliario(this.id).subscribe((data:Inmobiliario) => {
      this.inmobiliario=data;
      this.form.controls['nombre'].setValue(this.inmobiliario['nombre']);
      this.form.controls['tipo'].setValue(this.inmobiliario['tipo']);
      this.form.controls['titulares'].setValue(this.inmobiliario['titulares']);
      this.form.controls['estado'].setValue(this.inmobiliario['estado']);
      this.form.controls['idCou'].setValue(this.inmobiliario['idCou']);
      this.form.controls['idMae'].setValue(this.inmobiliario['idMae']);
      this.form.controls['subestado'].setValue(this.inmobiliario['subestado']);
      this.form.controls['expediente'].setValue(this.inmobiliario['expediente']);
      this.form.controls['acta'].setValue(this.inmobiliario['acta']);
      this.form.controls['num_admin'].setValue(this.inmobiliario['num_admin']);
      this.form.controls['fecha'].setValue(this.inmobiliario['fecha']);
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
