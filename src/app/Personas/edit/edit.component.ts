import { Component } from '@angular/core';
import { CrudService } from '../../Services/crud.service';
import { Persona } from '../../Model/Persona';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  // ?? - Nullish Coalescing Operator (Operador de Coalescencia Nula).
  // Si el primer valor es nulo se asigna el segundo
  localStorageId = localStorage.getItem('id') ?? '' // Obtenemos el id guardado en localStorage
  persona: Persona = new Persona() // Instanciamos una persona vacia

  // Inyectamos los servicios (Router, Crud)
  constructor(private router: Router, private crud: CrudService) {

    // Verificamos si el id está vacio
    if (this.localStorageId === '') {
      // Lanzamos una alerta y redirigimos
      alert('El id no se obtuvo correctamente')
      this.router.navigateByUrl('listar')

    } else {
      // Ejecutamos el metodo getPersonaById
      this.crud.getPersonaById(JSON.parse(this.localStorageId))
        .subscribe(data => { // Nos suscribimos al metodo para obtener los datos
          this.persona = data // Guardamos los datos en la propiedad persona
        })
    }
  }

  // Metodo guardar
  guardar() {
    // Ejecutamos el metodo updatePersona
    this.crud.updatePersona(this.persona)
      .subscribe(data => { // Nos suscribimos al metodo para obtener los datos

        // Evaluamos la data (true o false)
        if (data) {
          // Lanzamos una alerta, eliminamos el id de localStorage y redirigimos
          alert('La persona se actualizó correctamente.')
          localStorage.removeItem('id')
          this.router.navigateByUrl('listar')
          
        } else {
          // Eliminamos el id de localStorage y redirigimos
          localStorage.removeItem('id')
          alert('Ocurrió un error al actualizar la persona.')
          this.router.navigateByUrl('listar')
        }
      })
  }

}
