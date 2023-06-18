import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    //this.getPacientes();
    //this.getPaciente();
    //this.createPaciente();
    //this.updatePaciente();
    this.deletePaciente();
  }
  getPacientes() {
    const url = 'https://api.escuelajs.co/api/v1/users';
    this.httpClient.get(url).subscribe(
      response => {
        console.log(response);
      });
  }

  // Obtener un Paciente
  getPaciente() {
    const url = 'https://api.escuelajs.co/api/v1/users/3';
    this.httpClient.get(url).subscribe(
      response => {
        console.log(response);
      });
  }

  // Crear nuevo student
  createPaciente() {
    const data = {
      email: "ink_owl@gmail.com",
      name: "David Quiroga | Sebastian Donoso",
      password: "Campos0430",
      role: "admin",
      avatar: "https://api.lorem.space/image/face?w=640&h=480"
    }

    const url = 'https://api.escuelajs.co/api/v1/users';
    this.httpClient.post(url, data).subscribe(
      response => {
        console.log(response);
      });
  }

  // Actualizar student
  updatePaciente() {
    const data = {
      "email": "dsa@yavirac.edu.ec",
      "name": "David",
      "password": "Campos0430",
    }

    const url = 'https://api.escuelajs.co/api/v1/users/54';
    this.httpClient.put(url, data).subscribe(
      response => {
        console.log(response);
      });
  }

  // Eliminar student
  deletePaciente() {
    const url = 'https://api.escuelajs.co/api/v1/users/54';
    this.httpClient.delete(url).subscribe(
      response => {
        console.log(response);
      });
  }

}
