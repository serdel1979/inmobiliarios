import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs';
import { Inmobiliario } from 'src/app/interfaces/inmobiliarios';
import { InmobiliariosService } from 'src/app/services/inmobiliarios.service';

@Component({
  selector: 'app-inmobiliarios',
  templateUrl: './inmobiliarios.component.html',
  styleUrls: ['./inmobiliarios.component.css']
})
export class InmobiliariosComponent implements OnInit {

  listInmobiliarios: Inmobiliario[] = [];

  displayedColumns: string[] = ['nombre', 'tipo', 'titulares', 'estado', 'idCou', 'idMae', 'Acciones'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //@ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  private _refresh$: any;


  constructor(public inmobiliariosServices: InmobiliariosService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.inmobiliariosServices.getInmobiliarios().subscribe(data => {
      this.dataSource = new MatTableDataSource<Inmobiliario>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  crearInmobiliario() {
    console.log("crear");
  }

  borraInmobiliario(id: string) {
    this.inmobiliariosServices.deleteInmobiliario(id).subscribe(() => {
      this.cargarDatos();
    });
    this._snackBar.open("Registro eliminado", "", {
      duration: 5000,
      horizontalPosition: 'center'
    });
  }



  editarInmobiliario(id: string) {
    console.log(id);
  }


}
