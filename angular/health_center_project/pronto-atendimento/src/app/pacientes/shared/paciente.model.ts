export class Paciente {

  constructor(
    public id?: number,
    public nome?: string,
    public genero?: string,
    public cpf?: string,
    public prioridade:boolean = true,
    public ativo:boolean = true,
    public atendido?: boolean
  ) {}
}
