import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Inmobiliario } from 'src/app/interfaces/inmobiliarios';
import { InmobiliariosService } from 'src/app/services/inmobiliarios.service';

@Component({
  selector: 'app-editar-inmobiliario',
  templateUrl: './editar-inmobiliario.component.html',
  styleUrls: ['./editar-inmobiliario.component.css']
})
export class EditarInmobiliarioComponent implements OnInit {

  public form: FormGroup;


  calificaciones = [
    { value: 'clubCampo', viewValue: 'Club de campo' },
    { value: 'cerrado', viewValue: 'Barrio cerrado' },
    { value: 'chacra', viewValue: 'Club de chacra' },
    { value: 'urbano', viewValue: 'Urbano' },
  ];

  inmobiliario!: Inmobiliario;
  id!: string;
  inmobiliariosServices: any;

  constructor(private fb: FormBuilder, private rutaActiva: ActivatedRoute, private service: InmobiliariosService) { 
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
    this.id = this.rutaActiva.snapshot.params['id'];
    this.service.getInmobiliario(this.id).subscribe((data:Inmobiliario) => {
      this.inmobiliario=data;
      this.form = this.fb.group({
        nombre: [this.inmobiliario['nombre'], Validators.required],
        tipo: [this.inmobiliario['tipo'], Validators.required],
        titulares: [this.inmobiliario['titulares']],
        estado: [this.inmobiliario['estado']],
        idCou: [this.inmobiliario['idCou']],
        idMae: [this.inmobiliario['idMae']],
        subestado: [this.inmobiliario['subestado']],
        expediente: [this.inmobiliario['expediente']],
        acta: [this.inmobiliario['acta']],
        num_admin: [this.inmobiliario['num_admin']],
        fecha: [this.inmobiliario['fecha']],
      })
    });
    //this.form.value.nombre = this.inmobiliario['nombre'];
    //this.form.value.tipo = this.inmobiliario['tipo'];
    //this.form.value.titulares = this.inmobiliario['titulares'];
    //this.form.value.estado = this.inmobiliario['estado'];
    //this.form.value.idCou = this.inmobiliario['idCou'];
    //this.form.value.idMae = this.inmobiliario['idMae'];
    //this.form.value.subestado = this.inmobiliario['subestado'];
    //this.form.value.expediente = this.inmobiliario['expediente'];
    //this.form.value.acta = this.inmobiliario['acta'];
    //this.form.value.num_admin = this.inmobiliario['num_admin'];
    //this.form.value.fecha = this.inmobiliario['fecha'];
    console.log(this.form.value);
    
  }

}
