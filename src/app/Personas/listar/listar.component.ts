import { Component } from '@angular/core';
import { CrudService } from '../../Services/crud.service';
import { Persona } from '../../Model/Persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {

  // Inicializamos un array de Personas
  personas: Persona[] = [];

  // Inyeccion de los servicios(Router, Crud)
  constructor(private router: Router, private crud: CrudService) {

    // Llamamos al metodo getPersonas
    this.crud.getPersonas()
      .subscribe(data => { // Nos suscribimos al metodo para obtener los datos
        this.personas = data // Guardamos los datos en la propiedad personas
      })
  }

  // Metodo editar segun el id
  editar(id: Persona['id']) {
    // Guardamos el id en localStorage
    // localStorage solo acepta strings
    localStorage.setItem('id', JSON.stringify(id))
    this.router.navigateByUrl('edit') // Redirigimos a edit
  }

  // Metodo eliminar segun el id
  eliminar(id: Persona['id']) {
    // Pedimos confirmación al usuario
    const isSure = confirm('¿Está seguro que desea eliminar la persona?')

    // Evaluamos la confirmación
    if (isSure) {
      this.crud.removePersona(id) // Ejecutamos el metodo removePersona segun el id
        .subscribe(data => { // Nos suscribimos a los datos
          if (data) {
            // Metodo filter devuelve los elementos de un array que cumplan con una condición específica
            // Removemos la persona de la propiedad del componente
            this.personas = this.personas.filter(persona => persona.id !== id)
          }
        })
    }
  }
}
