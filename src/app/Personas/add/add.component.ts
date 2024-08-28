import { Component } from '@angular/core';
import { CrudService } from '../../Services/crud.service';
import { Persona } from '../../Model/Persona';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  // Instanciamos una Persona Vacia
  persona: Persona = new Persona()

  // Inyeccion de los servicios (Router, Crud)
  constructor(private router: Router, private crud: CrudService) { }

  // Metodo guardar
  guardar() {
    // Llamamos al metodo insertPersona del servicio
    this.crud.insertPersona(this.persona)
    .subscribe(data => { // Nos suscribimos al metodo para obtener la información(data)

      // Evaluamos data(true o false)
      if (data) {
        // Enviamos una alerta y redirigimos
        alert('La persona se registro con exito.')
        this.router.navigateByUrl('listar')
        
      } else {
        alert('Esa persona ya se encuentra registrada.')
        this.router.navigateByUrl('listar')
      }
    })

  }
}
