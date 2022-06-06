import { Admin } from "./Admin.js";
import { Docente } from "./Docente.js";
import User from "./User.js";

const novoUser = new User('Renata', 'r@r.com', '1983/05/08')

console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Mariana', 'm@m.com', '1990/10/10');
console.log(novoAdmin.exibirInfos());

console.log(novoAdmin.nome)

// novoUser.#nome = "Creuza"
// console.log(novoUser)

// console.log(User.prototype.isPrototypeOf(novoUser))

// console.log(" ============================== ")

// const novoAdmin = new Admin('Renata', 'r@r.com', '1983/01/01');
// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.criarCurso('Javascript', 20))

// console.log(" ============================== ")

// const novoDocente = new Docente('Juliana', 'j@j.com', '1983/01/01')
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovaEstudante('Renata', 'Javascript'))