import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Inyeccion del servicio Router
  constructor(private router: Router){}

  listar(){
    // Redireccion a ruta listar
    this.router.navigateByUrl('listar')
  }
  
  nuevo(){
    // Redireccion a ruta add
    this.router.navigateByUrl('add')
  }
}
