import User from "./User.js";

export class Docente extends User {
  constructor(nome, email, nascimento, role = 'docente', ativo = true) {
    super(nome, email, nascimento, role, ativo)
}
  aprovaEstudante(estudante, curso){
    return `Estudante ${estudante} aprovado no curso ${curso}.`
  }
}

