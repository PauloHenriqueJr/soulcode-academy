import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { PacienteService, Paciente } from '../shared';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.css']
})
export class CadastrarPacienteComponent implements OnInit {

  @ViewChild('formPaciente') formPaciente: NgForm;

  paciente: Paciente;

  constructor(private pacienteService: PacienteService, private router: Router) { }

  ngOnInit() {
    this.paciente = new Paciente();
  }

  cadastrar(): void {
    if (this.formPaciente.form.valid) {
      this.pacienteService.cadastrar(this.paciente);
      this.router.navigate(["/pacientes"]);
    }
  }


}
