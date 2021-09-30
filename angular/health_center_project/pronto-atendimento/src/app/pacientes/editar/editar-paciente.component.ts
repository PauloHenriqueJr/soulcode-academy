import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { PacienteService, Paciente } from '../shared';

@Component({
  selector: 'app-editar-pacientes',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarpacientesComponent implements OnInit {

  @ViewChild('formPaciente') formPaciente: NgForm;
  paciente: Paciente;

  constructor(private pacienteService: PacienteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.paciente = this.pacienteService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formPaciente.form.valid) {
      this.pacienteService.atualizar(this.paciente);
      this.router.navigate(['/pacientes']);
    }
  }

}
