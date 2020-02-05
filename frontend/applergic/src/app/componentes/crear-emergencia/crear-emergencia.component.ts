import { Component, OnInit } from '@angular/core';
import { PersonaEmergenciaServicio } from '../../servicios/personaEmergenciaServicio';
import { PersonaEmergencia } from '../../entidades/personaEmergencia';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-crear-emergencia',
  templateUrl: './crear-emergencia.component.html',
  styleUrls: ['./crear-emergencia.component.css']
})

export class CrearEmergenciaComponent implements OnInit {

  titulo: string = "Vamos a añadir tu contacto en caso de emergencia.";
  public personaEmergencia: PersonaEmergencia;
  valido: boolean;
  public usuarioRegistrado: Usuario;


  constructor(private emergenciaServicio: PersonaEmergenciaServicio, private router: Router) { 
    this.valido = false;
    this.personaEmergencia = {
      usuario: this.usuarioRegistrado = JSON.parse(sessionStorage.getItem("usuario")),
      nombre: "",
      email: "",
      movil: "",
      compania: "",
      poliza: ""
    }
    this.usuarioRegistrado = {
      nombre: "",
      email: "",
      movil: "",
      password: "",
      imagen: "",
      alimentos: [],
      }
  }

  ngOnInit() {
    this.usuarioRegistrado = JSON.parse(sessionStorage.getItem("usuario"))
    console.log(this.usuarioRegistrado);
  }

  onSubmit(form) {
    this.emergenciaServicio.crearPersona(this.personaEmergencia);
    console.log(this.personaEmergencia);
    this.router.navigate(['alergias']);
  }

  alPerderFoco() {
    if ( typeof this.personaEmergencia.nombre !== "undefined"
        && this.personaEmergencia.nombre !== "") {
          this.valido = true;
        }
  }

}
