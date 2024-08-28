import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Model/Persona';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // Inyectamos el servicio HttpClient
  constructor(private http: HttpClient) { }

  // Definimos una url base
  url = 'http://localhost/projects/Senati/Angular/S5%20-%20Crud/backend'

  // Metodo getPersona
  getPersonas() {
    // Retornamos la petición del archivo listar.php
    return this.http.get<Persona[]>(`${this.url}/listar.php`)
  }

  // Metodo insertPersona recibe una persona
  insertPersona(persona: Persona) {
    // Retornamos la petición del archivo insert.php
    return this.http.get<boolean>(`${this.url}/insert.php`, {
      // Asignamos parametros segun las variables de persona
      params: {
        nombres: persona.nombres,
        apellidos: persona.apellidos
      }
    })
  }

  // Metodo getPersonaById recibe un id
  // El tipo del id es el mismo que el del Modelo Persona
  getPersonaById(id: Persona['id']){
    // Retornamos la petición del archivo getPersona.php
    return this.http.get<Persona>(`${this.url}/getPersona.php`, {
      params: {
        id: id
      }
    })
  }

  // Metodo updatePersona recibe una persona
  updatePersona(persona: Persona){
    // Retornamos la petición del archivo update.php
    return this.http.get<boolean>(`${this.url}/update.php`, {
      params: {
        id: persona.id,
        nombres: persona.nombres,
        apellidos: persona.apellidos
      }
    })
  }

  // Metodo removePersona recibe un id
  removePersona(id: Persona['id']){
    // Retornamos la petición del archivo remove.php
    return this.http.get<boolean>(`${this.url}/remove.php`, {
      params: {
        id: id
      }
    })
  }
}
