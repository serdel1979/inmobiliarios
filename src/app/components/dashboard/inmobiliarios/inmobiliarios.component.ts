import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Inmobiliario } from 'src/app/interfaces/inmobiliarios';
import { InmobiliariosService } from 'src/app/services/inmobiliarios.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from 'src/app/components/dialogo-confirmacion/dialogo-confirmacion.component';

@Component({
  selector: 'app-inmobiliarios',
  templateUrl: './inmobiliarios.component.html',
  styleUrls: ['./inmobiliarios.component.css']
})
export class InmobiliariosComponent implements OnInit {

  listInmobiliarios: Inmobiliario[] = [];
  inmobiliario!: Inmobiliario;

  displayedColumns: string[] = ['nombre', 'distrito','tipo', 'estado', 'idCou', 'idMae', 'Acciones'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //@ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 
  


  constructor(public dialogo: MatDialog, public inmobiliariosServices: InmobiliariosService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.inmobiliariosServices.getInmobiliarios().subscribe(data => {
      this.dataSource = new MatTableDataSource<Inmobiliario>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  crearInmobiliario() {
    console.log("crear");
  }


  mostrarDialogo(id:string): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Seguro de borrar el registro inmobiliario?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.borraInmobiliario(id);
          this._snackBar.open("Registro eliminado", "", {
            duration: 1500,
            horizontalPosition: 'center'
          });
        } 
      });
  }

  borraInmobiliario(id: string) {
    this.inmobiliariosServices.deleteInmobiliario(id).subscribe(() => {
      this.cargarDatos();
    });
  }



  editarInmobiliario(id: string) {
    this.router.navigate([`/dashboard/editar_inmobiliario/${id}`]);
  }


}
